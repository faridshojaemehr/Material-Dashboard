import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: 'menu',
    loadChildren: () => import ('./modules/dashboard/dashboard.module')
    .then(m => m.DashboardModule)
  },

  {
    path: '',
    loadChildren: () => import ('./modules/auth/auth.module')
    .then(m => m.AuthModule)
  },
 
  {
    path: '**',
    component:PagenotfoundComponent    
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
