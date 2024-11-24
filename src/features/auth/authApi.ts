import {
  AuthResponse,
  AuthResponseSchema,
  LoginCredentials,
  RegistrationCredentials,
} from '@/shared/types/auth-model';
import api from '@/shared/redux/api';
import { logoutUser, setCredentials } from './authSlice';

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    signup: build.mutation<AuthResponse, RegistrationCredentials>({
      query: (credentials) => ({
        url: '/signup',
        method: 'POST',
        body: credentials,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data: user } = await queryFulfilled;
          dispatch(setCredentials(user));
        } catch (e) {
          console.log(e);
        }
      },
      invalidatesTags: ['Auth'],
      transformResponse: (response) => {
        console.log(response);
        return AuthResponseSchema.parse(response);
      },
    }),
    login: build.mutation<AuthResponse, LoginCredentials>({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data: user } = await queryFulfilled;
          dispatch(setCredentials(user));
        } catch (e) {
          console.log(e);
        }
      },
      invalidatesTags: ['Auth'],
      transformResponse: (response) => AuthResponseSchema.parse(response),
    }),
    logout: build.mutation<void, void>({
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(logoutUser());
          console.log('Logout successful!');
        } catch (e) {
          console.log(e);
        }
      },
      invalidatesTags: ['Auth'],
    }),
    refresh: build.query<AuthResponse, void>({
      query: () => ({
        url: '/refresh',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data: user } = await queryFulfilled;
          dispatch(setCredentials(user));
        } catch (e) {
          console.log(e);
        }
      },
      transformResponse: (response) => AuthResponseSchema.parse(response),
    }),
  }),
});

export const { useSignupMutation, useLoginMutation, useLogoutMutation, useRefreshQuery } = authApi;
