import api from '@/shared/redux/api';

export const privateApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPrivateData: build.query<string, void>({
      query: () => ({
        url: '/privateData',
      }),
      providesTags: ['Auth'],
    }),
  }),
});

export const { useLazyGetPrivateDataQuery } = privateApi;
