export interface TransactionDto {
  transactionId: number;
  movementType: string;
  transactionType: string;
  docNumber: string;
  quantity: number;
  cost: number;
  user: string;
  product: string;
}
