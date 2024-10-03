const ConvertDateObjectToPtbrDate = (date: Date): string => {
  const day = PadZero(date.getDate());
  const month = PadZero(date.getMonth() + 1);
  const year = PadZero(date.getFullYear());

  return `${day}/${month}/${year}`;
}

const PadZero = (number: number): string => {
  return number < 10 ? `0${number}` : `${number}`;
}

export default ConvertDateObjectToPtbrDate;
