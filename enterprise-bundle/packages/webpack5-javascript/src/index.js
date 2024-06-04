import {createGrid} from "ag-grid-community";

import "ag-grid-charts-enterprise";

import {LicenseManager} from "ag-grid-charts-enterprise";
LicenseManager.setLicenseKey("<your license key>")

// if using plain CSS:
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

// if using sass (update webpack.config.js too):
// import './styles.scss';

const gridOptions = {
    columnDefs: [
        {field: "make"},
        {field: "model"},
        {field: "price"}
    ],
    rowData: [
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxster", price: 72000}
    ],
    defaultColDef: {
        flex: 1,
    },
    statusBar: {
        statusPanels: [
            {
                statusPanel: 'agTotalAndFilteredRowCountComponent',
                align: 'left',
            }
        ]
    },
}

let eGridDiv = document.querySelector('#myGrid');
createGrid(eGridDiv, gridOptions);
