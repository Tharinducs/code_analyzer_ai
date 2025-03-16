import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define API slice
export const codeApi = createApi({
  reducerPath: "codeApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (builder) => ({
    analyseCode: builder.mutation({
      query: (codeData) => ({
        url: "/code/explain-code", 
        method: "POST",
        body: codeData, 
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

// Export the auto-generated hook
export const { useAnalyseCodeMutation } = codeApi;