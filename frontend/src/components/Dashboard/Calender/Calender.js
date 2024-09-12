import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isToday, isSameMonth } from 'date-fns';
import './Calender.css'; // Import the CSS file

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const start = startOfMonth(currentDate);
  const end = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start, end });

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h2 className="calendar-month-year">{format(currentDate,'MMMMyyyy')}</h2>
        <div className="calendar-btns">

        <button  onClick={handlePrevMonth} className="calendar-button"><i class="fa fa-angle-left"></i></button>
        <button onClick={handleNextMonth} className="calendar-button"><i class="fa fa-angle-right"></i>
</button>
        </div>
      </div>
      <div className="calendar-grid">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="calendar-day-header">{day}</div>
        ))}
        {days.map((day) => (
          <div
            key={day.toString()}
            className={`calendar-day ${isToday(day) ? 'today' : ''} ${!isSameMonth(day, currentDate) ? 'not-in-month' : ''}`}
          >
            {format(day, 'd')}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
