export interface UpdateProductDto {
    productId: number;
    name: string;
    description?: string;
    categoryCatalogId?: number;
    unitCatalogId?: number;
    supplierCatalogId?: number; 
    imageUrl?: string;
  }