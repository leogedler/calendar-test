import { AppService } from './../app.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ap-angular2-fullcalendar';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';
declare let moment: any;

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
    editable: false,
    eventLimit: false, // allow "more" link when too many events
    events: [

    ]
  }

  myDatePickerOptions: IMyDpOptions = {
      dateFormat: 'dd/mm/yyyy',
      markCurrentDay: false
  };

  startDate: Object = { };

  constructor(private appService: AppService) { }

  ngOnInit() {

  }


  onSubmit(values:any){
    console.log(values);

    this.appService.getHoliday(values.country).subscribe((response:any)=>{
      console.log(response);
      this.renderCalendar(values, response.holidays);
    })
    
  }

  renderCalendar(values:any, holidays:any) {
    this.calendar.fullCalendar('destroy');

    this.calendar.fullCalendar({
      dayRender: function (date, cell) {

        let start = values.startDate.jsdate;
        let end = new Date(values.startDate.jsdate);
        end.setDate(start.getDate()+values.days);

        if(date >= start && end > date ) {
            cell.css("background-color", "#A0EB8E");
        }

        let day = moment(date._d).format('YYYY-MM-DD');
        if(holidays[day]){
          cell.css("background-color", "#FFA500");
        }
      }   
    });
    this.calendar.fullCalendar('gotoDate', values.startDate.jsdate);
  }

}
