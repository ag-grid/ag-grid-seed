import {createGrid, GridOptions, ModuleRegistry} from "@ag-grid-community/core";
import {ClientSideRowModelModule} from "@ag-grid-community/client-side-row-model";
import {StatusBarModule} from "@ag-grid-charts-enterprise/status-bar";

ModuleRegistry.registerModules([ClientSideRowModelModule, StatusBarModule]);

import './style.css'

import {LicenseManager} from "@ag-grid-charts-enterprise/core";
LicenseManager.setLicenseKey("<your license key>")

class SimpleGrid {
    private readonly gridOptions: GridOptions = <GridOptions>{};

    constructor() {
        this.gridOptions = {
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
        };

        const eGridDiv: HTMLElement = <HTMLElement>document.querySelector('#app');
        createGrid(eGridDiv, this.gridOptions);
    }
}

new SimpleGrid();
