export const fillZero = (n: number): string => (n < 10 ? `0${n}` : `${n}`);

export const getHourMinuteFromTimestamp = (ts: number): string => {
  const date = new Date(ts);

  return `${fillZero(date.getHours())}:${fillZero(date.getMinutes())}`;
};

export const timeDisplayFactory = (timestampInMs: number, now?: Date): string => {
  if (!timestampInMs) {
    return '';
  }
  const d = new Date(timestampInMs);
  const nowDate = new Date(now);

  const todayStartInTimestamp = nowDate.setHours(0, 0, 0, 0);
  const todayEndInTimestamp = nowDate.setHours(23, 59, 59, 999);

  // same day
  if (timestampInMs >= todayStartInTimestamp && timestampInMs <= todayEndInTimestamp) {
    return `${fillZero(d.getHours())}:${fillZero(d.getMinutes())}`;
  }

  // same year
  if (nowDate.getFullYear() === d.getFullYear()) {
    return `${fillZero(d.getMonth() + 1)}/${fillZero(d.getDate())}`;
  }

  // else
  return `${d.getFullYear()}/${fillZero(d.getMonth() + 1)}/${fillZero(d.getDate())} ${fillZero(
    d.getHours()
  )}:${fillZero(d.getMinutes())}`;
};
