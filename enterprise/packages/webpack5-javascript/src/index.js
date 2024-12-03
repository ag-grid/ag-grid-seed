import {createGrid} from "ag-grid-community";

import { AllEnterpriseModule, LicenseManager, ModuleRegistry } from "ag-grid-enterprise";
ModuleRegistry.registerModules([AllEnterpriseModule]);
LicenseManager.setLicenseKey("<your license key>")

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
    loadThemeGoogleFonts: true,
}

let eGridDiv = document.querySelector('#myGrid');
createGrid(eGridDiv, gridOptions);
