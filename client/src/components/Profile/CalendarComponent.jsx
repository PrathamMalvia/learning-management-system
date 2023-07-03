import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className='flex flex-col items-center'>
      <Calendar onChange={onChange} value={value} />
    </div>
  );

}

export default CalendarComponent