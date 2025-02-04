

import { Paper } from "@mui/material";
import { DataGrid} from "@mui/x-data-grid";
import { DataTableProps } from "../types/helpers/dataTableProps";

// import { esES} from "@mui/material/locale";
import { esES } from "../utils/esES";

export const DataTable = ({ rows, columns, paginationModel }: DataTableProps) => {
  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: {paginationModel} }}
        pageSizeOptions={[5, 10]}
        checkboxSelection={false}
        sx={{ border: 0 }}
        disableColumnResize={true}
        localeText={{ 
          ...esES.components.MuiDataGrid.defaultProps.localeText, 
        }}
      />
    </Paper>
  );
}
