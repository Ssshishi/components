import React, { useEffect, useRef, useState } from 'react';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { match } from 'ts-pattern';
import { ScrollViewProps } from '@tarojs/components/types/ScrollView';

type LoadMoreElementProps = {
  hasMore: boolean;
  loadMore: () => Promise<void>;
  refresherRefresh?: () => void;
};

export interface IInfiniteScrollProps {
  hasMore: boolean;
  loadMore: () => Promise<void>;
  refresherRefresh?: () => void;
}

const classPrefix = 't-infinite-scroll';

const getLoadMoreComponentProps = (children: React.ReactNode): LoadMoreElementProps | undefined => {
  for (let node of React.Children.toArray(children)) {
    if (React.isValidElement(node)) {
      if (typeof node.props.hasMore === 'boolean') {
        return node.props;
      }
      const props: LoadMoreElementProps | undefined = getLoadMoreComponentProps(
        node.props.children,
      );
      if (props) {
        return props;
      }
    }
  }
};

const getChildrenCount = (children: React.ReactNode): number => {
  if (React.isValidElement(children)) {
    if (React.isValidElement(children.props.children)) {
      return React.Children.count(children.props.children.props.children);
    }
  }
  return 0;
};

export const InfiniteScroll: React.FC<IInfiniteScrollProps> = (props) => {
  return (
    <View className={classPrefix} id={`${classPrefix}--load-more`}>
      {props.children ??
        match(props.hasMore)
          .with(true, () => '努力加载中')
          .otherwise(() => '没有更多了')}
    </View>
  );
};

export const Provider: React.FC<ScrollViewProps> = (props) => {
  const loading = useRef<boolean>(false);
  const [refresherTriggered, setRefresherTriggered] = useState<boolean>(false);
  const [scrollViewHeight, setScrollViewHeight] = useState<number>();

  const childrenLength = getChildrenCount(props.children);
  const loadMoreProps = getLoadMoreComponentProps(props.children);

  useEffect(() => {
    Taro.nextTick(() => {
      Taro.createSelectorQuery()
        .select(`#${classPrefix}--scroll-view`)
        .boundingClientRect()
        .exec((scrollViewRes: Taro.NodesRef.BoundingClientRectCallbackResult[]) => {
          const height = scrollViewRes?.[0]?.height ?? 0;
          if (height) {
            setScrollViewHeight(height);
          }
          Taro.createSelectorQuery()
            .select(`#${classPrefix}--load-more`)
            .boundingClientRect()
            .exec((loadMoreRes: Taro.NodesRef.BoundingClientRectCallbackResult[]) => {
              const top = loadMoreRes?.[0]?.top ?? 0;
              if (top < height) {
                onLoadMore();
              }
            });
        });
    });
  }, []);

  useEffect(() => {
    if (scrollViewHeight) {
      Taro.nextTick(() => {
        Taro.createSelectorQuery()
          .select(`#${classPrefix}--load-more`)
          .boundingClientRect()
          .exec((res: Taro.NodesRef.BoundingClientRectCallbackResult[]) => {
            const top = res?.[0]?.top ?? 0;
            if (top < scrollViewHeight) {
              onLoadMore();
              setRefresherTriggered(false);
            }
          });
      });
    }
  }, [childrenLength, loadMoreProps?.hasMore]);

  const onScrollToLower = () => {
    onLoadMore();
  };

  const onRefresherRefresh = () => {
    if (refresherTriggered) {
      return;
    } else {
      setRefresherTriggered(true);
    }
    loadMoreProps?.refresherRefresh?.();
  };

  const onLoadMore = () => {
    if (loadMoreProps?.hasMore) {
      if (loading.current) {
        return;
      } else {
        loading.current = true;
      }
      loadMoreProps?.loadMore().then(() => {
        loading.current = false;
      });
    }
  };

  return (
    <>
      {match(React.isValidElement(props.children))
        .with(true, () => {
          return React.Children.map(props.children, (child: React.ReactNode) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                id: `${classPrefix}--scroll-view`,
                scrollY: true,
                onScrollToLower,
                refresherTriggered,
                refresherEnabled: typeof loadMoreProps?.refresherRefresh === 'function',
                onRefresherRefresh,
              });
            } else {
              return <></>;
            }
          });
        })
        .otherwise(() => (
          <></>
        ))}
    </>
  );
};
