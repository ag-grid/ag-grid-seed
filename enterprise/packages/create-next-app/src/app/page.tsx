'use client'

import { useState } from "react";
import { AgGridReact } from 'ag-grid-react';
import {
  ModuleRegistry,
  ColDef,
} from 'ag-grid-community';
import {
  AllEnterpriseModule,
  LicenseManager,
} from 'ag-grid-enterprise';
ModuleRegistry.registerModules([
  AllEnterpriseModule,
]);

LicenseManager.setLicenseKey(process.env.NEXT_PUBLIC_AG_GRID_LICENSE || '');

export default function Home() {
  const [rowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
  ]);
  const [columnDefs] = useState<ColDef[]>([
    { field: "make" },
    { field: "model" },
    { field: "price" },
  ]);

  const [defaultColDef] = useState({
    flex: 1,
  });

  const [statusBar] = useState({
    statusPanels: [
      {
        statusPanel: "agTotalAndFilteredRowCountComponent",
        align: "left",
      },
    ],
  });

  return (
    <>
      <div style={{ height: "100vh", width: "100%" }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          statusBar={statusBar}
        />
      </div>
    </>
  );
}