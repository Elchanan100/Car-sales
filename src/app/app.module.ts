import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './comps/general/header/header.component';
import { NavigationComponent } from './comps/general/navigation/navigation.component';
import { TrucksPanelComponent } from './panels/trucks-panel/trucks-panel.component';
import { BusesPanelComponent } from './panels/buses-panel/buses-panel.component';
import { CarsPanelComponent } from './panels/cars-panel/cars-panel.component';
import { TruckCardComponent } from './comps/vehicles/truck-card/truck-card.component';
import { CarCardComponent } from './comps/vehicles/car-card/car-card.component';
import { BuseCardComponent } from './comps/vehicles/buse-card/buse-card.component';
import { PaginatorComponent } from './comps/general/paginator/paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    TrucksPanelComponent,
    BusesPanelComponent,
    CarsPanelComponent,
    TruckCardComponent,
    CarCardComponent,
    BuseCardComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule,HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
