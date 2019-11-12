import { Component, OnInit } from '@angular/core';
import { CarservService } from '../../services/carserv.service';

@Component({
  selector: 'app-cars-panel',
  templateUrl: './cars-panel.component.html',
  styleUrls: ['./cars-panel.component.css']
})
export class CarsPanelComponent implements OnInit {

  constructor(public cerses:CarservService) { }

  ngOnInit() {
  }
  myClickLi(myClick):void{
    this.cerses.currentIndexOfCers=this.cerses.arreyCers.findIndex(x => x.manufacturer==myClick)
    this.cerses.currentCerOfarreyCers=this.cerses.arreyCers[this.cerses.currentIndexOfCers]
  }
}
