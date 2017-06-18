import { AppService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalendarModule } from 'ap-angular2-fullcalendar';
import { MyDatePickerModule } from 'mydatepicker';
import { CalendarsComponent } from './calendar/calendars.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarsComponent,
  ],
  imports: [
    BrowserModule,
    CalendarModule.forRoot(),
    HttpModule,
    MyDatePickerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
