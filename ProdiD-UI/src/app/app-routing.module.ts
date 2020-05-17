import { EditUserComponent } from './tab1/user-control/edit-user/edit-user.component';
import { UserControlComponent } from './tab1/user-control/user-control.component';
import { RegisterUserComponent } from './tab1/register-user/register-user.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'register',
    component: RegisterUserComponent
  },
  {
    path: 'user-control',
    component: UserControlComponent,
  },
  {
    path: 'edit-user/:id',
    component: EditUserComponent,
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
