import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  tagTypes: ["Pokemon"],
  endpoints: (builder) => ({}),
});

export default apiSlice;
