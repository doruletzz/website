import { ThemeType } from "../../types/theme";

export const getThemeFromLocalStorage = async (): Promise<ThemeType> => {
  const theme = localStorage.getItem("theme");
  return theme !== null
    ? ThemeType[theme as keyof typeof ThemeType]
    : ThemeType.default;
};

export const setThemeToLocalStorage = async (theme: ThemeType) => {
  localStorage.setItem("theme", ThemeType[theme].toString());
};

export const deleteThemeFromLocalStorage = async () => {
  localStorage.removeItem("theme");
};
