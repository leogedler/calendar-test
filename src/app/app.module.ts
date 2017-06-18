import { AppService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CalendarModule } from 'ap-angular2-fullcalendar';
import { CalendarsComponent } from './calendar/calendars.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarsComponent,
  ],
  imports: [
    BrowserModule,
    CalendarModule.forRoot(),
    HttpModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
