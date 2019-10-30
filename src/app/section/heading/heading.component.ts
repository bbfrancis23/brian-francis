import { Component } from '@angular/core';
import {MatGridListBase} from '@angular/material/grid-list/typings/grid-list-base';
import {Section} from '../section';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['heading.component.scss']
})
export class HeadingComponent extends Section{



  constructor() {
    super();
  }

}
