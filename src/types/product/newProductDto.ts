export interface NewProductDto {
  name: string;
  description: string;
  code: string;
  categoryCatalogId: number;
  unitCatalogId: number;
  supplierCatalogId: number;
  imageUrl: string;
}
