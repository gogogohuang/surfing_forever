export const fillZero = (n: number): string => (n < 10 ? `0${n}` : `${n}`);

export const getHourMinuteFromTimestamp = (ts: number): string => {
  const date = new Date(ts);

  return `${fillZero(date.getHours())}:${fillZero(date.getMinutes())}`;
};
