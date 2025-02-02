import { PaginationParams } from "./paginationParams";

export interface ProductParams extends PaginationParams {
    Name: string|null;
    Description: string|null;
    Code: string|null;
    Category: string|null;
  }