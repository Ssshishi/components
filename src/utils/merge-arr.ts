export const mergeArr = (...items: any[]) => {
  let result: typeof items[] = []

  items.forEach((item) => {
    result = [...result, ...item]
  })

  return result;
}