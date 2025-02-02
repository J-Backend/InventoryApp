import { PagedList } from "../../types/helpers/pagedList";
import { InventoryDto } from "../../types/inventory/inventoryDto";
import { apiSlice } from "../apiSlice";
import { INVENTORY_URL } from "../../constants";
import { InventoryParams } from "../../types/helpers/inventoryParams";



export const inventoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getInventory: builder.query<PagedList<InventoryDto>, InventoryParams>({
      query: (params) => ({
        url: INVENTORY_URL,
        params,
      }),
      providesTags: ["Inventory"],
    }),
    
  }),
});

export const {
    useGetInventoryQuery
  } = inventoryApiSlice;