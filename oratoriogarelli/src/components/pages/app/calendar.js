import React, { useState } from 'react';
import Sidebar from '../../navigation/sidebar';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import jornadasData from '../d/jordata'; // Asegúrate de importar los datos de jornadas correctamente

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date(2024, 7)); // Inicializa con agosto 2024
    const [selectedDate, setSelectedDate] = useState(null);

    // Transformar las jornadas en un objeto de eventos para el calendario
    const events = jornadasData.reduce((acc, jornada) => {
        const dateKey = jornada.fecha; // Asumiendo que la fecha está en formato 'YYYY-MM-DD'
        if (!acc[dateKey]) {
            acc[dateKey] = [];
        }
        acc[dateKey].push({
            title: jornada.descripcion, // Puedes ajustar el título según lo que necesites mostrar
            description: jornada.descripcion,
        });
        return acc;
    }, {});

    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const days = [];

    // Ajustar el primer día del mes para que sea lunes (índice 0)
    const daysOfWeek = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'];
    const adjustedFirstDay = (firstDayOfMonth + 6) % 7; // Ajustar para comenzar en lunes

    const handlePreviousMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
        setSelectedDate(null);
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
        setSelectedDate(null);
    };

    // Agregar los encabezados de los días de la semana
    daysOfWeek.forEach((day, index) => {
        days.push(
            <div key={`header-${index}`} className="p-2 font-bold text-center h-fit bg-gray">
                {day}
            </div>
        );
    });

    // Llenar los días vacíos al inicio del mes
    for (let i = 0; i < adjustedFirstDay; i++) {
        days.push(<div key={`empty-${i}`} className="p-4"></div>);
    }

    // Llenar los días del mes con los eventos correspondientes
    for (let i = 1; i <= daysInMonth; i++) {
        const dateKey = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
        days.push(
            <div
                key={i}
                className={`p-4 hover:bg-slate-200 h-full flex flex-col rounded-lg justify-start items-start cursor-pointer ${selectedDate === dateKey ? ' bg-pink text-white' : ''}`}
                onClick={() => setSelectedDate(dateKey)}
            >
                <p className="w-full py-2 text-xl font-medium text-center">{i}</p>
                {events[dateKey] && (
                    <div className={`w-2 h-2 bg-pink rounded-full mx-auto mt-1 ${selectedDate === dateKey ? ' bg-white' : ''}`}></div>
                )}
            </div>
        );
    }

    return (
        <div className="flex bg-gray">
            <Sidebar />
            <div className="flex flex-col w-2/3 h-screen">
                <div className="flex items-center justify-between h-24 p-4">
                    <div className='flex flex-row items-center justify-center'>
                        <ChevronLeft />
                        <button className='text-lg font-medium' onClick={handlePreviousMonth}>Anterior</button>
                    </div>
                    <div className="text-lg font-bold">
                        {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
                    </div>
                    <div className='flex flex-row items-center justify-center'>
                        <button className='text-lg font-medium' onClick={handleNextMonth}>Próximo</button>
                        <ChevronRight />
                    </div>
                </div>
                <div className="grid items-end flex-grow h-auto grid-cols-7 gap-2 p-4">
                    {days}
                </div>
            </div>
            <div className="w-1/3 p-4 border-l">
                {selectedDate && events[selectedDate] ? (
                    <div className='p-8'>
                        <h2 className="mb-4 text-xl font-medium text-darkblue">Eventos el {selectedDate}</h2>
                        <ol className="relative w-full border-l-2 border-gray-200 border-s border-aquamarine dark:border-gray-700">
                            {events[selectedDate].map((event, index) => (
                                <li className="mb-10 ms-4" key={index}>
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 bg-gray border-2 border-aquamarine dark:border-gray-900 dark:bg-gray-700"></div>
                                    <h3 className="text-lg font-semibold text-aquamarine">
                                        {event.title}
                                    </h3>
                                    <time className="mb-1 text-sm font-semibold leading-none text-gray-400 dark:text-gray-500">
                                        {/* Aquí podrías insertar la hora si es relevante */}
                                    </time>
                                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                        {event.description}
                                    </p>
                                </li>
                            ))}
                        </ol>
                    </div>
                ) : (
                    <h2 className="p-8 mb-4 text-lg font-medium text-center text-darkblue">No hay eventos para este día</h2>
                )}
            </div>
        </div>
    );
};

export default Calendar;
