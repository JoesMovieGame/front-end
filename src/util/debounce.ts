export const debounce = (
  delayedFunction: Function,
  delayMilliseconds: number
) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(
      () => delayedFunction.apply(this, args),
      delayMilliseconds
    );
  };
};
