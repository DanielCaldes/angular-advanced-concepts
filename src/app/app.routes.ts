import { Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';

export const routes: Routes = [
    { path:"table", component:TableComponent },
    { path:"form", component:FormComponent }
];
