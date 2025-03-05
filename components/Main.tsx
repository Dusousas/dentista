import React from 'react';
import Cta from './subc/Cta';

export default function Main() {
    return (
        <>
            <section className='bgMain'>
                <div className='maxW flex flex-col gap-y-2 items-center justify-center h-full lg:items-start'>
                    <h1 className='text-5xl uppercase text-center text-BlueP font-semibold lg:text-6xl'>Construindo sorrisos</h1>
                    <p className='uppercase text-xl text-center text-GrayS font-semibold lg:text-2xl lg:flex items-center gap-2'><span className='text-BlueP text-2xl lg:text-5xl'>& </span>Praticando uma odontologia humanizada</p>
                    <div className='mt-8'>
                        <a className='border border-GrayS py-4 px-6 uppercase' href="">Marque uma consulta</a>
                    </div>
                </div>
            </section>

            <Cta />

        </>
    );
}