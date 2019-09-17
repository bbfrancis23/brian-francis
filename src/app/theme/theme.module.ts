import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeDialogComponent } from './theme-dialog/theme-dialog.component';

@NgModule({
  declarations: [ThemeDialogComponent],
  imports: [
    CommonModule
  ],
  exports: [ThemeDialogComponent]
})
export class ThemeModule { }
