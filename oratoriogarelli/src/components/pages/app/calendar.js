import React, { useState } from 'react';
import Sidebar from '../../navigation/sidebar';
import {ChevronLeft, ChevronRight} from 'lucide-react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 7)); // Inicializa con agosto 2024
  const [selectedDate, setSelectedDate] = useState(null);

  const events = {
    '2024-08-01': [
        { 
        title: 'Event 2', description: 'Description for Event 1' },
        { 
        title: 'Event 3', description: 'Description for Event 1' },
    ],
    '2024-08-15': [{ title: 'Event 2', description: 'Description for Event 2' }],
    '2024-08-20': [{ title: 'Event 3', description: 'Description for Event 3' }],
  };

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const days = [];

  // Adjust the first day of the month to be Monday (index 0)
  const daysOfWeek = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'];
  const adjustedFirstDay = (firstDayOfMonth + 6) % 7; // Adjust to Monday start

  const handlePreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
    setSelectedDate(null);
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
    setSelectedDate(null);
  };

//   const handlePreviousYear = () => {
//     setCurrentDate(new Date(currentDate.getFullYear() - 1, currentDate.getMonth()));
//     setSelectedDate(null);
//   };

//   const handleNextYear = () => {
//     setCurrentDate(new Date(currentDate.getFullYear() + 1, currentDate.getMonth()));
//     setSelectedDate(null);
//   };

// Add the days of the week headers
daysOfWeek.forEach((day, index) => {
    days.push(
      <div key={`header-${index}`} className="p-2 h-fit bg-gray text-center font-bold">
        {day}
      </div>
    );
  });

  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="p-4"></div>);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const dateKey = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
    days.push(
      <div
        key={i}
        className={`p-4 hover:bg-slate-200 h-full flex flex-col rounded-lg justify-start items-start cursor-pointer ${selectedDate === dateKey ? ' bg-pink text-white' : ''}`}
        onClick={() => setSelectedDate(dateKey)}
      >
        <p className="text-center font-medium w-full text-xl py-2">{i}</p>
        {events[dateKey] && (
          <div className={`w-2 h-2 bg-pink rounded-full mx-auto mt-1 ${selectedDate === dateKey ? ' bg-white' : ''}`}></div>
        )}
      </div>
    );
  }

  return (
    <div className="flex bg-gray">
      <Sidebar />
      <div className="w-2/3 h-screen flex flex-col">
        <div className="flex justify-between h-24 items-center p-4">
          {/* <button onClick={handlePreviousYear}>&laquo; Previous Year</button> */}
          <div className='flex justify-center items-center flex-row'>
            <ChevronLeft/>
            <button className='text-lg font-medium' onClick={handlePreviousMonth}>Anterior</button>
          </div>
          <div className="text-lg font-bold">
            {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
          </div>
          <div className='flex justify-center items-center flex-row'>
            <button className='text-lg font-medium' onClick={handleNextMonth}>Próximo</button>
            <ChevronRight/>
          </div>
          {/* <button onClick={handleNextYear}>Next Year &raquo;</button> */}
        </div>
        <div className="grid flex-grow items-end grid-cols-7 gap-2 h-auto p-4">
          {days}
        </div>
      </div>
      <div className="w-1/3 p-4 border-l">
        {selectedDate && events[selectedDate] ? (
          <div className='p-8'>
            <h2 className="text-xl font-medium mb-4 text-darkblue">Eventos el {selectedDate}</h2>

            <ol class="relative border-s border-l-2 border-aquamarine w-full border-gray-200 dark:border-gray-700">
            {events[selectedDate].map((event, index) => (
            <li class="mb-10 ms-4" key={index}>
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 bg-gray border-2 border-aquamarine dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 class="text-lg font-semibold text-aquamarine">
              {event.title}
              </h3>
              <time class="mb-1 text-sm font-semibold leading-none text-gray-400 dark:text-gray-500">
            Insertar hora
              </time>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {event.description}
              </p>
            </li>
            ))}
          </ol>
          </div>
        ) : (
          <h2 className="text-lg text-center font-medium mb-4 text-darkblue p-8">No hay eventos para este día</h2>
        )}
      </div>
    </div>
  );
};

export default Calendar;
