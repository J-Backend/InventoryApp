import { useEffect, useState } from "react";
import { setIdProp } from "../utils/helpers";
import { TransactionDto } from "../types/transaction/TransactionDto";
import { GridColDef } from "@mui/x-data-grid";
import { DataTable } from "../components/DataTable";
import { transactionsData } from "../api/data";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'product', headerName: 'Producto', width: 130 },
  { field: 'movementType', headerName: 'Movimiento', width: 100 },
  { field: 'transactionType', headerName: 'Tipo', width: 80 },
  { field: 'quantity', headerName: 'Cantidad', width: 90 },
  { field: 'cost', headerName: 'Costo', width: 100 },
  { field: 'user', headerName: 'Usuario', width: 120 },
  { field: 'entryDate', headerName: 'Fecha', type:"dateTime",width: 200 },
];

const paginationModel = { page: 0, pageSize: 5 };

export const TransactionPanel = () => {

  const [rows, setRows] = useState<TransactionDto[]>([])

  useEffect(() => {
    setRows(setIdProp(transactionsData, "transactionId"));
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
