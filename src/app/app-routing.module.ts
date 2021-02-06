import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { TeachersComponent } from './teachers/teachers.component';

const routes: Routes = [
  {
    path: 'users', component: UsersComponent
  },
  {
    path: 'teachers', component: TeachersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
