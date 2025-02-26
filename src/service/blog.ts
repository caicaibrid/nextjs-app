export const getData = (): Promise<{ id: string }[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(new Array(20).fill(0).map((_, index) => ({ id: `${index}` })));
    }, 1000);
  });
};
