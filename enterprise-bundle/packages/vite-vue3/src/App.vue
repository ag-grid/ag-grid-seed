<script setup>
import { AgGridVue } from "ag-grid-vue3"; // Vue Grid Logic

import { AllEnterpriseModule, LicenseManager, ModuleRegistry } from "ag-grid-enterprise";
import { AgChartsEnterpriseModule } from "ag-charts-enterprise";
ModuleRegistry.registerModules([AllEnterpriseModule.with(AgChartsEnterpriseModule)]);
LicenseManager.setLicenseKey("<your license key>")

const columnDefs = [
  {field: "make"},
  {field: "model"},
  {field: "price"}
];

const rowData = [
  {make: "Toyota", model: "Celica", price: 35000},
  {make: "Ford", model: "Mondeo", price: 32000},
  {make: "Porsche", model: "Boxster", price: 72000}
];

const defaultColDef = {
  flex: 1,
};

const statusBar = {
  statusPanels: [
    {
      statusPanel: 'agTotalAndFilteredRowCountComponent',
      align: 'left',
    }
  ]
};
</script>

<template>
  <ag-grid-vue
      :rowData="rowData"
      :columnDefs="columnDefs"
      style="height: 500px"
      :defaultColDef="defaultColDef"
      :statusBar="statusBar"
      class="ag-theme-quartz">
  </ag-grid-vue>
</template>

<style>
@import "ag-grid-community/styles/ag-grid.css";
@import "ag-grid-community/styles/ag-theme-quartz.css";
</style>
