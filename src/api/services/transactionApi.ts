import { PagedList } from "../../types/helpers/pagedList";
import { apiSlice } from "../apiSlice";
import { TRANSACTION_URL } from "../../constants";
import { TransactionDto } from "../../types/transaction/TransactionDto";
import { TransactionParams } from "../../types/helpers/transactionParams";
import { NewTransactionDto } from "../../types/transaction/NewTransactionDto";


export const transactionApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTransactions: builder.query<PagedList<TransactionDto>, TransactionParams>({
      query: (params) => ({
        url: TRANSACTION_URL,
        params,
      }),
      providesTags: ["Transaction"],
    }),
    addTransaction: builder.mutation<void, NewTransactionDto>({
      query: (dto) => ({
        url: TRANSACTION_URL,
        method: "POST",
        body: dto,
      }),
      invalidatesTags: ["Transaction"],
    }),
   
  }),
});

export const {
    useGetTransactionsQuery,
    useAddTransactionMutation,
  } = transactionApiSlice;