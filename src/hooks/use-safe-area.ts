import { useState } from 'react';
import safeAreaInsets from 'safe-area-insets';
import { useMount } from '@/hooks';

type Result = Record<'top' | 'left' | 'right' | 'bottom', number>;

export function useSafeArea(): Result {
  const [safeArea, setSafeArea] = useState<Result>({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });

  useMount(() => {
    const { support, top, left, right, bottom } = safeAreaInsets;

    if (support) {
      setSafeArea({
        top,
        left,
        right,
        bottom,
      });
    }
  });

  return safeArea;
}
