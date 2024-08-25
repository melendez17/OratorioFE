import React from 'react';
import Sidebar from '../../navigation/sidebar';
import { ReactComponent as Journal } from '../../../assets/Landing/journal.svg';
import { Link } from 'react-router-dom';

const Jornadas = () => {
    return (
        <div className=' bg-gray flex'>
            <Sidebar/>
            <div className='p-8'>
                <h1 className=' text-darkblue font-semibold text-3xl'>Jornadas</h1>
                <div className='flex justify-start flex-wrap gap-8 py-8'>
                    {/* card  */}
                    <Link>
                    <div className='bg-white2 shadow-lg max-w-96 rounded-xl px-4 py-8 flex flex-col'>
                        <div className='flex items-center'>
                        <Journal/>
                        <p className='pl-4 font-semibold'>20 de Marzo</p>
                        </div>
                        <div className=' border-l-2 ml-4 pl-8 flex items-center border-pink'>
                            <p>Acá habrá una pequeña descripción de los temas que se abordarán en la jornada.</p>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Jornadas;