import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

//https://react-day-picker.js.org/docs/basic-concepts

export default class BasicConcepts extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }

  handleDayClick(day, { selected }) {
    if (selected) {
      // Unselect the day if already selected
      this.setState({ selectedDay: undefined });
      return;
    }
    this.setState({ selectedDay: day });
  }

  render() {
    return (
      <div align="center">
        <DayPicker
          onDayClick={this.handleDayClick}
          selectedDays={this.state.selectedDay}
        />
        {this.state.selectedDay ? (
          <p>Datum: {this.state.selectedDay.toLocaleDateString()}</p>
        ) : (
          <p>Wählen sie ein Datum aus.</p>
        )}
      </div>
    );
  }
}



// import React, { useState } from 'react'
// import { format } from 'date-fns'
// import { enGB } from 'date-fns/locale'
// import { DatePickerCalendar } from 'react-nice-dates'
// import 'react-nice-dates/build/style.css'
//
// function PrognoseContent() {
//   const [date, setDate] = useState()
//   return (
//     <div className="h-100 d-inline-block w-100 p-3">
//       <p>
//         Selected date: {date ? format(date, 'dd MMM yyyy', { locale: enGB }) : 'none'}.
//       </p>
//       <DatePickerCalendar date={date} onDateChange={setDate} locale={enGB} />
//     </div>
//   )
// }
//
// export default PrognoseContent;
