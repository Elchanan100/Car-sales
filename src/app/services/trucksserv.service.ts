import { Injectable } from '@angular/core';
import { trukcs } from '../models/trukcs';
import { HttpClient } from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})
export class TrucksservService {
  arreyTrucks:trukcs[]=[]
  currentIndexOfTrucks=0        
  currentCerOfarreyTrucks:trukcs;
  constructor(private http: HttpClient) {
    http.get('https://raw.githubusercontent.com/Elchanan100/Car-sales/master/src/assets/trukcs.json').subscribe(
      x=>{this.arreyTrucks=x as trukcs[]
       }
    )
    this.currentCerOfarreyTrucks=this.arreyTrucks[this.currentIndexOfTrucks]
  }
    
}
