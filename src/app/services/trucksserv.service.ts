import { Injectable } from '@angular/core';
import { trukcs } from '../models/trukcs';
import { HttpClient } from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})
export class TrucksservService {
  
  constructor(private http: HttpClient) {
    console.log('TrucksservService stert');
    
    http.get('https://raw.githubusercontent.com/Elchanan100/Car-sales/master/src/assets/trukcs.json').subscribe(
      x=>{this.arreyTrucks=x as trukcs[];
        this.currentCerOfarreyTrucks=this.arreyTrucks[2];
       }
    )
    
  }
  arreyTrucks:trukcs[]=[]
  currentIndexOfTrucks=2        
  currentCerOfarreyTrucks:trukcs;
}
