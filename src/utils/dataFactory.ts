/** number */
export const isNumber = (x: any): boolean => !Number.isNaN(x) && typeof x === 'number';

export const getNumberPart = (num: number, fixed: number = 2): string => {
  // NOTE: 使用原生 Number.toFixed() 遇到小數位時會變成 5 捨 6 入，而造成顯示錯誤。因此改以 Math.round(num)*100/100 來進行 4 捨 5 入
  if (isNumber(num)) {
    return (Math.round(Math.abs(num) * 100) / 100).toFixed(fixed);
  }

  return '';
};

export const getSign = (num: number) => {
  if (isNumber(num)) {
    if (num < 0) {
      return -1;
    }
    if (num > 0) {
      return 1;
    }

    return 0;
  }

  return NaN;
};
