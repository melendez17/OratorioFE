import React, { useState } from 'react';

const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
};

const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month - 1, 1).getDay();
};

const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);

    const events = {
        1: "Evento 1",
        5: "Evento 2",
        8: "Evento 3",
        // Agrega más eventos según sea necesario
      };

    const handlePrevMonth = () => {
        if (currentMonth === 1) {
            setCurrentMonth(12);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const handleNextMonth = () => {
        if (currentMonth === 12) {
            setCurrentMonth(1);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const renderDays = () => {
        const days = [];
        // Add empty cells for the days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            days.push(<td key={`empty-${i}`} className="pt-2"></td>);
        }
        // Add the days of the month
        for (let i = 1; i <= daysInMonth; i++) {
            const hasEvent = events[i] !== undefined;
            days.push(
                <td key={i} className="pt-4">
                    <div className="flex flex-col justify-center w-full px-2 py-2 cursor-pointer">
                        <p className="text-base font-medium text-center text-gray-500 dark:text-gray-100">{i}</p>
                        {hasEvent && (
            <div className="mx-auto">
              <svg width="8" height="8" className='text-white' xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="3" fill="currentColor" />
              </svg>
            </div>
          )}
          </div>
                </td>
            );
        }
        // Add empty cells to ensure the calendar ends on a Saturday (index 6)
        while (days.length % 7 !== 0) {
            days.push(<td key={`empty-end-${days.length}`} className="pt-6"></td>);
        }
        return days;
    };

    const rows = () => {
        const days = renderDays();
        const numberOfRows = Math.ceil(days.length / 7);
        return Array.from({ length: numberOfRows }, (_, rowIndex) => (
            <tr key={rowIndex}>
                {days.slice(rowIndex * 7, rowIndex * 7 + 7)}
            </tr>
        ));
    };

    return (
        <div className="flex items-center justify-start p-4 pb-4">
            <div className="w-full max-w-sm shadow-lg">
                <div className="w-full bg-white md:p-8 dark:bg-gray-800 rounded-xl">
                    <div className="flex items-center justify-between px-4">
                        <span
                            tabIndex="0"
                            className="text-base font-bold text-gray-800 focus:outline-none dark:text-gray-100"
                        >
                            {`${monthNames[currentMonth - 1]} ${currentYear}`}
                        </span>
                        <div className="flex items-center">
                            <button
                                aria-label="calendar backward"
                                onClick={handlePrevMonth}
                                className="text-gray-800 focus:text-gray-400 hover:text-gray-400 dark:text-gray-100"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <polyline points="15 6 9 12 15 18" />
                                </svg>
                            </button>
                            <button
                                aria-label="calendar forward"
                                onClick={handleNextMonth}
                                className="ml-3 text-gray-800 focus:text-gray-400 hover:text-gray-400 dark:text-gray-100"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <polyline points="9 6 15 12 9 18" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th><div className="flex justify-center w-full"><p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">Lun</p></div></th>
                                    <th><div className="flex justify-center w-full"><p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">Mar</p></div></th>
                                    <th><div className="flex justify-center w-full"><p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">Mié</p></div></th>
                                    <th><div className="flex justify-center w-full"><p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">Jue</p></div></th>
                                    <th><div className="flex justify-center w-full"><p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">Vie</p></div></th>
                                    <th><div className="flex justify-center w-full"><p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">Sáb</p></div></th>
                                    <th><div className="flex justify-center w-full"><p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">Dom</p></div></th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calendar;
