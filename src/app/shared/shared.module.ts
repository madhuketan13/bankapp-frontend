import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { httpInterceptors } from './interceptors';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[httpInterceptors]
})
export class SharedModule { }
