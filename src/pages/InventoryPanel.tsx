import { GridColDef } from "@mui/x-data-grid";
import { DataTable } from "../components/DataTable"
import { useEffect, useState } from "react";
import { InventoryDto } from "../types/inventory/inventoryDto";
import { inventoryData } from "../api/data";
import { setIdProp } from "../utils/helpers";


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70},
  { field: 'code', headerName: 'Código', width: 130 },
  { field: 'product', headerName: 'Producto', width: 130 },
  { field: 'category', headerName: 'Categoría', width: 120 },
  { field: 'stock', headerName: 'Existencias', width: 90 },
  { field: 'unit', headerName: 'Unidad', width: 70 },
  { field: 'lastTransaction', headerName: 'Última transacción', type:"dateTime", width: 200 },
];

const paginationModel = { page: 0, pageSize: 5 };


export const InventoryPanel = () => {
  const [rows, setRows] = useState<InventoryDto[]>([])

  useEffect(() => {
    setRows(setIdProp(inventoryData, "inventoryId"));
  }, [])

  return (
    <>
      <DataTable
        rows={rows}
        columns={columns}
        paginationModel={paginationModel}
      />
    </>
  )
}
