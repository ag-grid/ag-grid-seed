import {useState} from 'react'

import {AgGridReact} from '@ag-grid-community/react';
import {ModuleRegistry} from '@ag-grid-community/core'
import {LicenseManager} from "@ag-grid-charts-enterprise/core";
import {ClientSideRowModelModule} from "@ag-grid-community/client-side-row-model";
import {StatusBarModule} from "@ag-grid-charts-enterprise/status-bar";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";

ModuleRegistry.registerModules([ClientSideRowModelModule, StatusBarModule]);


LicenseManager.setLicenseKey("<your license key>")

function App() {
  const [rowData] = useState([
    {make: "Toyota", model: "Celica", price: 35000},
    {make: "Ford", model: "Mondeo", price: 32000},
    {make: "Porsche", model: "Boxster", price: 72000}
  ]);

  const [colDefs] = useState([
    {field: "make"},
    {field: "model"},
    {field: "price"}
  ]);

  const [defaultColDef] = useState({
    flex: 1,
  });

  const [statusBar] = useState({
    statusPanels: [
      {
        statusPanel: 'agTotalAndFilteredRowCountComponent',
        align: 'left',
      }
    ]
  });

  return (
      <>
        <div
            className="ag-theme-quartz"
            style={{height: "100%", width: "100%"}}
        >
          <AgGridReact
              rowData={rowData}
              columnDefs={colDefs}
              defaultColDef={defaultColDef}
              statusBar={statusBar}
          />
        </div>
      </>
  )
}

export default App;
