import {useState} from 'react'

import {AgGridReact} from '@ag-grid-community/react';
import {ModuleRegistry} from "@ag-grid-community/core";
import {ClientSideRowModelModule} from "@ag-grid-community/client-side-row-model";
import {StatusBarModule} from "@ag-grid-enterprise/status-bar";

ModuleRegistry.registerModules([ClientSideRowModelModule, StatusBarModule]);

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";

import {LicenseManager} from "@ag-grid-enterprise/core";
LicenseManager.setLicenseKey("<your license key>")

function App() {
    const [rowData, setRowData] = useState([
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxster", price: 72000}
    ]);

    const [colDefs, setColDefs] = useState([
        {field: "make"},
        {field: "model"},
        {field: "price"}
    ]);

    const [defaultColDef, setDefaultColDef] = useState({
        flex: 1,
    });

    const [statusBar, setStatusBar] = useState({
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
                className="ag-theme-quartz" // applying the grid theme
                style={{height: "100%", width: "100%"}} // the grid will fill the size of the parent container
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

export default App
