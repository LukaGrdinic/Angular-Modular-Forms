import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { AddressComponent } from './address/address.component';

import { ReactiveFormsModule } from '@angular/forms';
import { UserInfoComponent } from './user-info/user-info.component';
import { AgeComponent } from './age/age.component';
import { ExperienceComponent } from './experience/experience.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobStartDateComponent } from './job-details/job-start-date/job-start-date.component';
import { DateOfBirthComponent } from './date-of-birth/date-of-birth.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicInfoComponent,
    AddressComponent,
    UserInfoComponent,
    AgeComponent,
    ExperienceComponent,
    JobDetailsComponent,
    JobStartDateComponent,
    DateOfBirthComponent
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
