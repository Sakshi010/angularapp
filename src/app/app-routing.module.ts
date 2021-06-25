import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestaurentComponent } from './add-restaurent/add-restaurent.component';
import { HomeComponent } from './home/home.component';
import { ListRestaurentComponent } from './list-restaurent/list-restaurent.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { UpdateRestaurentComponent } from './update-restaurent/update-restaurent.component';
import { ExpenseGuard } from './expense.guard';
import { RegistersComponent } from './registers/registers.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {component:HomeComponent,path:'home'},
  {component:AddRestaurentComponent,path:'add',canActivate: [ExpenseGuard]},
  {component:UpdateRestaurentComponent,path:'update/:id',canActivate: [ExpenseGuard]},
  {component:ListRestaurentComponent,path:'list',canActivate: [ExpenseGuard]},
  {component:LoginComponent,path:'login'},
  {component:RegistersComponent,path:'registers'},
  {component:ReactiveFormComponent,path:'reactive'},
  {component:RegisterComponent,path:'register',canActivate: [ExpenseGuard]},
  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
