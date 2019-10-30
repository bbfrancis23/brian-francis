import {MatGridListBase} from '@angular/material/grid-list/typings/grid-list-base';

export abstract class Section {
  readonly viewPortRows: number = 8;
  readonly viewPortCols: number = 11;
  readonly rowHeight: number = 100 / this.viewPortRows;
  readonly contentCols:number = (this.viewPortCols -2);
  contentRows:number = (this.viewPortRows -2);

  gridList: MatGridListBase = { cols: this.viewPortCols, rowHeight: this.rowHeight, gutterSize: '0px'};
}
