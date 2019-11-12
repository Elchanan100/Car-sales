import { Component, OnInit } from '@angular/core';
import { TrucksservService } from '../../services/trucksserv.service';

@Component({
  selector: 'app-trucks-panel',
  templateUrl: './trucks-panel.component.html',
  styleUrls: ['./trucks-panel.component.css']
})
export class TrucksPanelComponent implements OnInit {

  constructor(public trucks:TrucksservService) { }

  ngOnInit() {
  }

   myClickLi(myClick):void{
     this.trucks.currentIndexOfTrucks=this.trucks.arreyTrucks.findIndex(x => x.manufacturer==myClick)
     this.trucks.currentCerOfarreyTrucks=this.trucks.arreyTrucks[this.trucks.currentIndexOfTrucks]
   }
}