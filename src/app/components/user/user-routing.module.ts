import { RouterModule, Routes } from '@angular/router';
import { HostComponent } from './host/host.component';

const routes: Routes = [
  { path: '', component: HostComponent }
];

export const UserRoutes = RouterModule.forChild(routes);

