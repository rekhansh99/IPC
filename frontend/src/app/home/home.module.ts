import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PagesModule } from './pages/pages.module';
import { AlexaService } from './pages/alexa-connect-page/alexa.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PagesModule
  ],
  providers: [AlexaService]
})
export class HomeModule { }
