import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'box-color',
  templateUrl: './box-color.component.html',
  styleUrls: ['./box-color.component.css']
})
export class BoxColorComponent implements OnInit {
  @Input() color:string = "";
  @Input() vote:number = 0;
  @Input() allVotes:number = 0;
  @Input() width:number = 0;

  constructor() { }

  ngOnInit(): void {
  }



}
