import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'parallax-row',
  templateUrl: './parallax-row.component.html',
})
export class ParallaxRowComponent implements OnInit {
  @Input() img:string;
  @Input() height:string;
  @Input() parallax:boolean;
  @Input() color:boolean;
  @Input() accent: boolean;

  constructor() { }

  ngOnInit() {
    this.height = this.height || '100vh';
    this.parallax = this.parallax ? this.parallax : !!this.img;
    this.color = this.color ? this.color : false;
    this.accent= this.accent ? this.accent : false;
  }
}
