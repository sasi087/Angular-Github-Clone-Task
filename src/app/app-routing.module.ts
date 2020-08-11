import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponentComponent } from './users-component/users-component.component';
import { ReposComponentComponent } from './repos-component/repos-component.component';


const routes: Routes = [
  {
    path: '',
    component: UsersComponentComponent
  },
  {
    path: 'users/:user_name/repos',
    component: ReposComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
