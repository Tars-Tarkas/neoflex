/**
 * Функция для добавления знака валюты
 * @param price принимает значение типа number
 * @param grouping принимает значение типа boolean, разделение на блоки
 * @returns возвращает строку
 */

export const locCurrency = (price: number, grouping: boolean) => {
  const locale = navigator.language;
  const LocaleOptions: Intl.NumberFormatOptions = {
    style: "currency",
    currency: "RUB",
    currencyDisplay: "symbol",
    useGrouping: grouping,
    minimumFractionDigits: 0,
  };
  return price.toLocaleString(locale, LocaleOptions);
};
