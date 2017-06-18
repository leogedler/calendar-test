import { AppService } from './../app.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ap-angular2-fullcalendar';

@Component({
  selector: 'app-calendars',
  templateUrl: './calendars.component.html',
  styleUrls: ['./calendars.component.css']
})
export class CalendarsComponent implements OnInit {

  @ViewChild(CalendarComponent) calendar: CalendarComponent;
  
  calendarOptions:Object = {
    header:{
      left:   'prev',
      center: 'title',
      right:  'next'
    },
    height: 350,
    fixedWeekCount : false,
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: [
      {title:'evento 1', start:'2017-06-09'},
      {title:'evento 1', start:'2017-06-10'},
      {title:'evento 1', start:'2017-06-16'}
    ]
  }

  constructor(private appService: AppService) { }

  ngOnInit() {
    // this.appService.getHoliday('US', '2016').subscribe((response:any)=>{
    //   console.log('response', response);
    // },(error:any)=>{
    //   console.log('error', error);
    // })

    this.calendar.fullCalendar({
        dayRender: function (date, cell) {
            
            var today = new Date();
            var end = new Date();
            end.setDate(today.getDate()+7);
            cell.css("background-color", "red");
            console.log(date);
            // if (date.getDate() === today.getDate()) {
            //     cell.css("background-color", "red");
            // }
            
            if(date > today && date <= end) {
                cell.css("background-color", "yellow");
            }
          
        }   
    })
  }

}
