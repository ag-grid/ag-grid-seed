import {Component, ViewEncapsulation} from '@angular/core';
import {AgGridAngular} from '@ag-grid-community/angular';
import {ColDef, ModuleRegistry} from '@ag-grid-community/core';
import {ClientSideRowModelModule} from "@ag-grid-community/client-side-row-model";
import {StatusBarModule} from "@ag-grid-enterprise/status-bar";

ModuleRegistry.registerModules([ClientSideRowModelModule, StatusBarModule]);

import {LicenseManager} from "@ag-grid-enterprise/core";
LicenseManager.setLicenseKey("<your license key>")

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  rowData = [
    {make: "Toyota", model: "Celica", price: 35000},
    {make: "Ford", model: "Mondeo", price: 32000},
    {make: "Porsche", model: "Boxster", price: 72000}
  ];

  colDefs : ColDef[] = [
    {field: "make"},
    {field: "model"},
    {field: "price"}
  ];

  defaultColDef = {
    flex: 1,
  };

  statusBar = {
    statusPanels: [
      {
        statusPanel: 'agTotalAndFilteredRowCountComponent',
        align: 'left',
      }
    ]
  };
}
