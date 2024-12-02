import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, themeQuartz } from 'ag-grid-community';

import {
  AllEnterpriseModule,
  LicenseManager,
  ModuleRegistry,
} from 'ag-grid-enterprise';
import { AgChartsEnterpriseModule } from 'ag-charts-enterprise';
ModuleRegistry.registerModules([
  AllEnterpriseModule.with(AgChartsEnterpriseModule),
]);
LicenseManager.setLicenseKey('<your license key>');

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AgGridAngular],
  template: /*html*/ ` <ag-grid-angular
    style="height: 100%;"
    [theme]="theme"
    [rowData]="rowData"
    [columnDefs]="colDefs"
    [defaultColDef]="defaultColDef"
    [statusBar]="statusBar"
    [enableCharts]="enableCharts"
    [cellSelection]="cellSelection"
    loadThemeGoogleFonts
  >
  </ag-grid-angular>`,
})
export class AppComponent {
  theme = themeQuartz;
  enableCharts = true;
  cellSelection = true;
  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
  ];

  colDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
  ];

  defaultColDef = {
    flex: 1,
  };

  statusBar = {
    statusPanels: [
      {
        statusPanel: 'agTotalAndFilteredRowCountComponent',
        align: 'left',
      },
    ],
  };
}
