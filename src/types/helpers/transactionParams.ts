import { PaginationParams } from "./paginationParams";

export interface TransactionParams extends PaginationParams {
    MovementType: string|null;
    TransactionType: string|null;
    DocNumber: string|null;
    User: string|null;
    Product: string|null;
  }