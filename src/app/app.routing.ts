import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent}
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
