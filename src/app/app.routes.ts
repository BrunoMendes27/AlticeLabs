import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsPageComponent } from './details/details-page/details-page.component';
import { DashboardPageComponent } from './dashboard/dashboard-page/dashboard-page.component';

export const routes: Routes = [
  { path: '', component: DashboardPageComponent },
  { path: 'details/:id', component: DetailsPageComponent },
  { path: '**', redirectTo: '' },
];
