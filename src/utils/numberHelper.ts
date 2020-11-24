export const getFractionDigits = (input: string) => {
  return (input.split('.')[1] && input.split('.')[1].length) || 0;
};

export const formatFloat = (src: number, pos: number): number => {
  return Math.round(src * Math.pow(10, pos)) / Math.pow(10, pos);
};
