import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { User } from '@/shared/types/user-model';
import { AuthResponse } from '@/shared/types/auth-model';

type AuthState = {
  user: User | null;
  isAuth: boolean;
  isLoading: boolean;
};

const initialState: AuthState = {
  user: null,
  isAuth: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthResponse>) => {
      const { accessToken, user } = action.payload;
      state.user = user;
      localStorage.setItem('token', accessToken);
      state.isAuth = true;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    logoutUser: (state) => {
      localStorage.removeItem('token');
      state.user = null;
      state.isAuth = false;
    },
  },
  selectors: {
    selectIsAuth: (state) => {
      return state.isAuth;
    },
    selectUser: (state) => {
      return state.user;
    },
    selectIsLoading: (state) => {
      return state.isLoading;
    },
  },
});

export default authSlice;

export const { setCredentials, logoutUser, setIsLoading } = authSlice.actions;
export const { selectIsAuth, selectUser, selectIsLoading } = authSlice.selectors;
