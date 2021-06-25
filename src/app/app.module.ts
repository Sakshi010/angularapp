import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{CommonModule} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRestaurentComponent } from './add-restaurent/add-restaurent.component';
import { UpdateRestaurentComponent } from './update-restaurent/update-restaurent.component';
import { ListRestaurentComponent } from './list-restaurent/list-restaurent.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ProfileComponent } from './profile/profile.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { RegistersComponent } from './registers/registers.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CommonService } from './common.service';

@NgModule({
  declarations: [
    AppComponent,
    AddRestaurentComponent,
    UpdateRestaurentComponent,
    ListRestaurentComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    LogoutComponent,
    ReactiveFormComponent,
    ProfileComponent,
    RegistersComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [authInterceptorProviders,CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
