import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { POKEMON_URL } from "../constants";

const apiSlice = createApi({
  //baseUrl - Gonna use the defined proxy server by default
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  tagTypes: ["Pokemon"],
  endpoints: (builder) => ({
    getPokemons: builder.query({
      query: ({ keyword, pageNumber }) => ({
        url: POKEMON_URL,
        params: {
          keyword,
          pageNumber,
        },
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetPokemonsQuery } = apiSlice;

export default apiSlice;
