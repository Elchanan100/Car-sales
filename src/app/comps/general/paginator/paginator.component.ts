import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output()  myDelta:EventEmitter<number> = new EventEmitter<number>()
  RightAndLeft(delta:number):void{
    console.log('myDelta = '+delta);
    this.myDelta.emit(delta)
    
    
  }


}
