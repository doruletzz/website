import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThemeType } from "../../types/theme";
import { getThemeFromLocalStorage, setThemeToLocalStorage } from "./utils";

type ThemeState = {
  type: ThemeType;
};

const initialState: ThemeState = {
  type: getThemeFromLocalStorage(),
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      state.type = action.payload;
      setThemeToLocalStorage(action.payload);
    },
  },
});

export const { actions, reducer } = themeSlice;

export const { setTheme } = actions;

export default reducer;
