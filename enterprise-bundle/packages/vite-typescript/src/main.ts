import {createGrid, GridOptions} from "ag-grid-community";

import { AllEnterpriseModule, LicenseManager, ModuleRegistry } from "ag-grid-enterprise";
import { AgChartsEnterpriseModule } from "ag-charts-enterprise";
ModuleRegistry.registerModules([AllEnterpriseModule.with(AgChartsEnterpriseModule)]);
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
            enableCharts: true,
            cellSelection: true,
            loadThemeGoogleFonts: true
        };

        const eGridDiv: HTMLElement = <HTMLElement>document.querySelector('#app');
        createGrid(eGridDiv, this.gridOptions);
    }
}

new SimpleGrid();
