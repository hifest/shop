import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const goodsAPI = createApi({
    reducerPath: 'goodsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => `/products`,
        }),
        getProductsSingle: builder.query({
            query: (single) => `/products/${single}`,
        }),
        getProductsBySort: builder.query({
            query: (sort) => `/products?sort=${sort}`,
        }),
        getProductsByLimit: builder.query({
            query: (limit) => `/products?limit=${limit}`,
        }),
        getAllCategories: builder.query({
            query: () => `/products/categories`,
        }),
    }),
})
export const { useGetProductsQuery,useGetProductsSingleQuery,useGetProductsBySortQuery,useGetProductsByLimitQuery,useGetAllCategoriesQuery } = goodsAPI