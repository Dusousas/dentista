import React from 'react';
import Cta from './subc/Cta';

export default function Main() {
    return (
        <>
            <section dir='inicio' className='bgMain relative'>
                <div className='absolute inset-0 bg-black/40 z-0'></div>
                <div className='maxW flex flex-col relative z-10 gap-y-2 items-center justify-center h-full lg:items-start'>
                    <h1 className='text-5xl uppercase text-center text-BlueP font-semibold lg:text-6xl'>Construindo sorrisos</h1>
                    <p className='uppercase text-xl text-center text-white font-semibold lg:text-2xl lg:flex items-center gap-2'><span className='text-BlueP text-2xl lg:text-5xl'>& </span>Praticando uma odontologia humanizada</p>
                    <div className='mt-8'>
                        <a target='_blank' className='border border-white text-white py-4 px-6 uppercase' href="https://api.whatsapp.com/send?phone=5514998132293&text=Olá,%20gostaria%20de%20marcar%20uma%20consulta.">Marque uma consulta</a>
                    </div>
                </div>
            </section>
            <Cta />
        </>
    );
}