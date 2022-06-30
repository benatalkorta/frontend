import React, { useMemo } from 'react'
import { AgGridReact } from "ag-grid-react";
import "ag-grid/dist/styles/ag-grid.css";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

const Table = (props: { columns: any; }) => {
  const { columns } = props;
  const columnDefs = useMemo(() => {
    if (columns.length === 0) return []
    return Object.keys(columns[0]).map(cur => ({
      headerName: cur,
      field: cur
    }))
  }, [columns]);

  return (
    <div className='table-container'>
      <div className='table ag-theme-material'>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={columns}
        />
      </div>
    </div>
  )
}

export default Table;
