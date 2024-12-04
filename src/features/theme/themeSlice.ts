import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type ThemeState = {
  theme: 'dark' | 'light';
};

const initialState: ThemeState = {
  theme: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducerPath: 'theme',
  reducers: {
    setTheme: (state, action: PayloadAction<'dark' | 'light'>) => {
      state.theme = action.payload;
    },
  },
  selectors: {
    selectTheme: (state) => {
      return state.theme;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export const { selectTheme } = themeSlice.selectors;
