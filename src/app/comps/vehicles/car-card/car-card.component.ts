import { Component, OnInit } from '@angular/core';
import { CarservService } from '../../../services/carserv.service';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent implements OnInit {

  constructor(public thisCer:CarservService) { 
    console.log('CarCard ');
    
  }
  
  ngOnInit() {
  }

}
