export const formatNumber = (number: number, locale = 'en-US') => {
  return new Intl.NumberFormat(locale).format(number);
};
