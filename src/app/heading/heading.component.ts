import { Component } from '@angular/core';
import {MatGridListBase} from '@angular/material/grid-list/typings/grid-list-base';

@Component({
  selector: 'heading',
  templateUrl: './heading.component.html',
  styleUrls: ['heading.component.scss']
})
export class HeadingComponent  {

  readonly viewPortRows:number = 8;
  gridList: MatGridListBase = { cols: 11, rowHeight: 100 / this.viewPortRows, gutterSize: '0px'  };

  readonly contentRows:number = (this.viewPortRows -2);
  readonly contentCols:number = (this.gridList.cols -2);

  constructor() { }

}
