import { Component } from '@angular/core';
import {Section} from '../section';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styles: []
})
export class SkillsComponent extends Section{

  constructor() {
    super();
  }

}
