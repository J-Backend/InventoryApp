import { apiSlice } from "../apiSlice";
import { PRODUCT_URL } from "../../constants";
import { ProductDto } from "../../types/product/productDto";
import { PagedList } from "../../types/helpers/pagedList";
import { ProductParams } from "../../types/helpers/productParams";
import { UpdateProductDto } from "../../types/product/updateProductDto";
import { NewProductDto } from "../../types/product/newProductDto";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<PagedList<ProductDto>, ProductParams>({
      query: (params) => ({
        url: PRODUCT_URL,
        params,
      }),
      providesTags: ["Product"],
    }),
    addProduct: builder.mutation<void, NewProductDto>({
      query: (dto) => ({
        url: PRODUCT_URL,
        method: "POST",
        body: dto,
      }),
      invalidatesTags: ["Product"],
    }),
    getProductById: builder.query<ProductDto, number>({
      query: (id) => `${PRODUCT_URL}/${id}`,
      providesTags: (result, error, id) => [{ type: "Product", id }],
    }),
    updateProduct: builder.mutation<void, UpdateProductDto>({
      query: (dto) => ({
        url: PRODUCT_URL,
        method: "PUT",
        body: dto,
      }),
      invalidatesTags: (result, error, { productId }) => [
        { type: "Product", productId },
      ],
    }),
    deleteProduct: builder.mutation<void, number>({
        query: (id) => ({
          url: `${PRODUCT_URL}/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: ["Product"], 
      }),
  }),
});

export const {
    useGetProductsQuery,
    useAddProductMutation,
    useGetProductByIdQuery,
    useUpdateProductMutation,
    useDeleteProductMutation,
  } = productApiSlice;