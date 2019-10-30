import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeadingComponent} from './heading/heading.component';
import {MatGridListModule} from '@angular/material';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [HeadingComponent, SkillsComponent],
  imports: [
    CommonModule,
    MatGridListModule
  ],
  exports: [ HeadingComponent, SkillsComponent]
})
export class SectionModule { }
