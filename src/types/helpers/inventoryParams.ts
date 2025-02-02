import { PaginationParams } from "./paginationParams";

export interface InventoryParams extends PaginationParams {
    Product: string|null;
    Code: string|null;
    Category: string|null;
  }