import { Component, OnInit } from '@angular/core';
import { PanelManagerService } from '../../../services/panel-manager.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(public panelShow:PanelManagerService) { }

  ngOnInit() {
  }
  myClickNev(myPanelShow:string):void{
    console.log('myClickNev',myPanelShow);
    this.panelShow.currentPanel=myPanelShow;
  }
}
