import { Injectable } from '@angular/core';
import { trukcs } from '../models/trukcs';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class TrucksservService {
  arreyTrucks:trukcs[]=[]
  currentIndexOfTrucks=0        
  currentCerOfarreyTrucks:trukcs;
  constructor(private http:HttpClient) {
    http.get('').subscribe(
      x=>{this.arreyTrucks=x as trukcs[]
       }
    )
    this.currentCerOfarreyTrucks=this.arreyTrucks[this.currentIndexOfTrucks]
  }
    
}
