import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConnexionPage } from './connexion.page';
import {AuthInterceptor} from "../http-interceptor/auth-interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";

const routes: Routes = [
  {
    path: '',
    component: ConnexionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],providers:[],
  declarations: [ConnexionPage]
})
export class ConnexionPageModule {}
