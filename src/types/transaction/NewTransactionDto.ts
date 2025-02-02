export interface NewTransactionDto {
  movementTypeCatalogId: string;
  transactionTypeCatalogId: string;
  docNumber: string;
  quantity: number;
  cost: number;
  userId: number;
  productId: number;
}
