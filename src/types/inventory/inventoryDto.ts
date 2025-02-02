export interface InventoryDto {
  inventoryId: number;
  product: string;
  code: string;
  category: string;
  unit: string;
  stock: number;
  lastTransaction: Date;
}
