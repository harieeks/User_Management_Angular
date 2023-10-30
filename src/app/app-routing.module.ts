import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { RegisterComponent } from './Component/register/register.component';
import { LoginComponent } from './Component/login/login.component';
import { AdminComponent } from './Component/admin/admin.component';
import { UserComponent } from './Component/user/user.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminComponent},
  {path:'user',component:UserComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
