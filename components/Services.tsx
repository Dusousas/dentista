import React from 'react';
import Cards from './subc/Cards';

export default function Services() {
    return (
        <>
            <section id='servicos' className='bg-white pt-20 pb-10'>
                <div className='flex flex-col items-center justify-center maxW'>
                    <div className='relative'>
                        <img src="/nc1_hover.png" alt="" className='block mx-auto px-10' />
                        <div className='absolute inset-0 flex flex-col items-center justify-center text-center'>
                            <h1 className='text-2xl uppercase text-GrayS'>Nossos <span className='text-BlueP font-medium'>Serviços</span></h1>
                            <p className='text-lg text-GrayP font-thin'>Cuidando do seu sorriso</p>
                        </div>
                    </div>
                </div>

                <div className='pt-10 maxW'>
                        <Cards />
                    </div>
            </section>
        </>
    );
}