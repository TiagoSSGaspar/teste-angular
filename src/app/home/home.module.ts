import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { FilterMatrizComponent, ShowHiddenComponent, CalculaFibonacciComponent } from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeComponent,
    CalculaFibonacciComponent,
    ShowHiddenComponent,
    FilterMatrizComponent
  ]
})
export class HomeModule { }
