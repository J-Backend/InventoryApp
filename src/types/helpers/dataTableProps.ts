import { GridColDef } from "@mui/x-data-grid";

export interface DataTableProps {
    rows: object[];
    columns: GridColDef[];
    paginationModel: object;
}