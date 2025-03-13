import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define API slice
export const codeApi = createApi({
  reducerPath: "codeApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (builder) => ({
    analyseCode: builder.query({
      query: () => "/posts",
    }),
  }),
});

// Export the auto-generated hook
export const { useAnalyseCodeQuery } = codeApi;