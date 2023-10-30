import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Component/register/register.component';
import { LoginComponent } from './Component/login/login.component';
import { HomeComponent } from './Component/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MeterialModule } from './material.module';
import { StoreModule } from '@ngrx/store';
import { UserReducer } from './Store/user/user.reducers';
import { EffectsModule } from '@ngrx/effects';
import { UserEffect } from './Store/user/user.effects';
import { AppEffects } from './Store/Common/App.Effect';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AdminComponent } from './Component/admin/admin.component';
import { UserComponent } from './Component/user/user.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './_auth/auth.guard';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { UserService } from './Service/user.service';
import { AddUserComponent } from './Component/add-user/add-user.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    AddUserComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MeterialModule,
    HttpClientModule,
    MatSnackBarModule,
    RouterModule,
    MatTableModule,
    StoreModule.forRoot({user:UserReducer}),
    EffectsModule.forRoot([UserEffect,AppEffects])
  ],
  providers: [
    AuthGuard,{
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
