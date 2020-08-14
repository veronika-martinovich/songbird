export const getTimeFromSeconds = (sec) => {
  if (!sec) return "00:00";
  const SEC_IN_MIN = 60;
  const minutesAndSeconds = sec / SEC_IN_MIN;
  const minutes = Math.floor(minutesAndSeconds);
  const seconds = Math.round((minutesAndSeconds - minutes) * 60);
  const addZeros = (number) => {
    return number < 10 ? `0${number}` : `${number}`;
  };
  return `${addZeros(minutes)}:${addZeros(seconds)}`;
};
