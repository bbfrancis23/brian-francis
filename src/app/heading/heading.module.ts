import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from './heading.component';
import {MatGridListModule} from '@angular/material';

@NgModule({
  declarations: [HeadingComponent],
  imports: [
    CommonModule,
    MatGridListModule
  ],
  exports:[
    HeadingComponent
  ]
})
export class HeadingModule { }
