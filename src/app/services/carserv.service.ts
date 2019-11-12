import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarservService {

  constructor() {
    console.log('Carserv Service' ); 
   }
   arreyCers=[{manufacturer:'Ferrari',model:'GTB 488',yearOfProduction:2019,price:1950000,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWtwdfd1FPAXAFYzZgVkHIOFR_q1qE5_2BkRY3TEksJWAHsDUkzxZQygYs2g&s' },
              {manufacturer:'honda',model:'jazz',yearOfProduction:2019,price:94137,img:'https://honda.co.il/wp-content/uploads/2016/05/jazz-model.png'},
              {manufacturer:'Toyota',model:'iris',yearOfProduction:2018,price:102000,img:'http://carz.co.il.s3.amazonaws.com/idcarimages/yaris2015.jpg'},
              {manufacturer:'Ferrari',model:'GTB 488',yearOfProduction:2019,price:1950000,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWtwdfd1FPAXAFYzZgVkHIOFR_q1qE5_2BkRY3TEksJWAHsDUkzxZQygYs2g&s' },
            ]
    currentIndexOfCers=3        
    currentCerOfarreyCers = this.arreyCers[this.currentIndexOfCers]         
}
