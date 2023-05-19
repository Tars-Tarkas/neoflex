import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    kz: {
      translation: {
        buy: "Сатып алу",
        headphones: "Құлаққаптар",
        Wireless_headphones: "Сымсыз құлаққаптар",
        favourites: "Таңдалған",
        cart: "Себет",
        сontacts: "Байланыс",
        requirement: "Қызмет көрсету шарттары",
        payment: "Төлемге өтіңіз",
        total: "Барлығы",
      },
    },
    ru: {
      translation: {
        buy: "Купить",
        headphones: "Наушники",
        Wireless_headphones: "Беспроводные наушники",
        favourites: "Избранное",
        cart: "Корзина",
        сontacts: "Контакты",
        requirement: "Условия сервиса",
        payment: "Перейти к оформлению",
        total: "Итого",
      },
    },
    en: {
      translation: {
        buy: "Buy",
        headphones: "Headphones",
        Wireless_headphones: "Wireless headphones",
        favourites: "Favourites",
        cart: "Cart",
        сontacts: "Contacts",
        requirement: "Requirement",
        payment: "Go to payment",
        total: "Total",
      },
    },
  },
  lng: "ru", // if you're using a language detector, do not define the lng option
  fallbackLng: "ru",

  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
});
