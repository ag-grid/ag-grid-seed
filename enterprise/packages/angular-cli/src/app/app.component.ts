import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

import {
  AllEnterpriseModule,
  LicenseManager,
  ModuleRegistry,
} from 'ag-grid-enterprise';

ModuleRegistry.registerModules([AllEnterpriseModule]);
LicenseManager.setLicenseKey('<your license key>');

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AgGridAngular],
  template: /* html */ `
    <ag-grid-angular
      class="ag-theme-quartz"
      style="height: 100%;"
      [rowData]="rowData"
      [columnDefs]="colDefs"
      [defaultColDef]="defaultColDef"
      [statusBar]="statusBar"
      loadThemeGoogleFonts
    >
    </ag-grid-angular>
  `,
})
export class AppComponent {
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
