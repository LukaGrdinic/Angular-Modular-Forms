import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { AddressComponent } from './address/address.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BillingInfoComponent } from './billing-info/billing-info.component';
import { AgeComponent } from './age/age.component';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicInfoComponent,
    AddressComponent,
    BillingInfoComponent,
    AgeComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
