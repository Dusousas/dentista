import React from 'react';

export default function Cta() {
    return (
        <>
            <section className='bg-BlueP py-6 hidden lg:block'>
                <div className='maxW flex items-center justify-center'>
                    <h1 className='text-white uppercase text-xl w-1/3 text-center'>Entre em contato conosco hoje mesmo!</h1>
                    <h1 className='text-white uppercase text-2xl font-bold w-1/3 text-center'>(14) 91234-5678</h1>

                    <div className=' text-white uppercase font-bold w-1/3 text-center'>
                        <a className='border border-white py-4 px-6 uppercase' href="">Agendar Hórario</a>
                    </div>


                </div>
            </section>
        </>
    );
}