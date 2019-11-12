import { Component } from '@angular/core';
import { PanelManagerService } from './services/panel-manager.service';
import { CarservService } from './services/carserv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vehicles';

  constructor(public myPanelManager:PanelManagerService,public myDataCarsInSer:CarservService){
  }
  change(delta:number):void {
    console.log('myHtmlDelta = ',delta);
    switch(this.myPanelManager.currentPanel){
      case 'cars':
      console.log(this.myPanelManager.currentPanel);
        let a = this.myDataCarsInSer.currentIndexOfCers+delta
        if(a>this.myDataCarsInSer.arreyCers.length-1){
          this.myDataCarsInSer.currentIndexOfCers=0;
          this.myDataCarsInSer.currentCerOfarreyCers=this.myDataCarsInSer.arreyCers[this.myDataCarsInSer.currentIndexOfCers]
          console.log('caseiscars if 1'+this.myDataCarsInSer.currentIndexOfCers);
          break;
        } 
        if(a<0){
          this.myDataCarsInSer.currentIndexOfCers=this.myDataCarsInSer.arreyCers.length-1;
          this.myDataCarsInSer.currentCerOfarreyCers=this.myDataCarsInSer.arreyCers[this.myDataCarsInSer.currentIndexOfCers]
          console.log('caseiscars if 2'+this.myDataCarsInSer.currentIndexOfCers);
          break;
        }
        this.myDataCarsInSer.currentIndexOfCers+=delta
        this.myDataCarsInSer.currentCerOfarreyCers=this.myDataCarsInSer.arreyCers[this.myDataCarsInSer.currentIndexOfCers]
        console.log('caseiscars' + this.myDataCarsInSer.currentIndexOfCers);
      break;
      case 'buses':
      break;
      case 'trucks':
      break;
      
      

    }
    console.log(this.myDataCarsInSer.currentIndexOfCers);
    console.log(this.myDataCarsInSer.currentCerOfarreyCers);
  }








}
