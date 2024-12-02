import {useState} from 'react'

import {AgGridReact} from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

import { AllEnterpriseModule, LicenseManager, ModuleRegistry } from "ag-grid-enterprise";
import { AgChartsEnterpriseModule } from "ag-charts-enterprise";
ModuleRegistry.registerModules([AllEnterpriseModule.with(AgChartsEnterpriseModule)]);
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
