import { Component, OnInit } from '@angular/core';
import { TrucksservService } from '../../../services/trucksserv.service';

@Component({
  selector: 'app-truck-card',
  templateUrl: './truck-card.component.html',
  styleUrls: ['./truck-card.component.css']
})
export class TruckCardComponent implements OnInit {

  constructor(public thisTruck:TrucksservService) { }

  ngOnInit() {
  }

}
