import {createGrid, GridOptions} from "ag-grid-community";

import "ag-grid-charts-enterprise";

import {LicenseManager} from "ag-grid-charts-enterprise";
LicenseManager.setLicenseKey("<your license key>")

import './styles.scss';

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

        const eGridDiv: HTMLElement = <HTMLElement>document.querySelector('#myGrid');
        createGrid(eGridDiv, this.gridOptions);
    }
}

new SimpleGrid();
