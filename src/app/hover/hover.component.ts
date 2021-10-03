import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-hover',
  templateUrl: './hover.component.html',
  styleUrls: ['./hover.component.css']
})
export class HoverComponent implements OnInit {
  @Input('product') product:any;
  
     constructor() { }
  
    ngOnInit(): void {
    }
  
  }