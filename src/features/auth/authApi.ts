import {
  AuthResponse,
  AuthResponseSchema,
  LoginCredentials,
  RegistrationCredentials,
} from '@/shared/types/auth-model';
import api from '@/shared/redux/api';
import { logoutUser, setCredentials, setIsLoading } from './authSlice';

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
      transformResponse: (response) => AuthResponseSchema.parse(response),
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
        } catch (e) {
          console.log(e);
        }
      },
    }),
    refresh: build.query<AuthResponse, void>({
      query: () => ({
        url: '/refresh',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          dispatch(setIsLoading(true));
          const { data: user } = await queryFulfilled;
          dispatch(setCredentials(user));
        } catch {
          //if refresh failed user is not authorized
          dispatch(logoutUser());
        } finally {
          dispatch(setIsLoading(false));
        }
      },
      transformResponse: (response) => AuthResponseSchema.parse(response),
    }),
  }),
  overrideExisting: false,
});

export const {
  useSignupMutation,
  useLoginMutation,
  useLogoutMutation,
  useRefreshQuery,
  useLazyRefreshQuery,
} = authApi;
