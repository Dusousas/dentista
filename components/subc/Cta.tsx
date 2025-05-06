import React from 'react';

export default function Cta() {
    return (
        <>
            <section className='bg-BlueP py-6 hidden lg:block'>
                <div className='maxW flex items-center justify-center'>
                    <h1 className='text-white uppercase text-xl w-1/3 text-center'>Entre em contato conosco hoje mesmo!</h1>
                    <h1 className='text-white uppercase text-2xl font-bold w-1/3 text-center'>(14) 9 98132293</h1>

                    <div className=' text-white uppercase font-bold w-1/3 text-center'>
                        <a className='border border-white py-4 px-6 uppercase' target='_blank' href="https://api.whatsapp.com/send?phone=5514998132293&text=Olá,%20gostaria%20de%20marcar%20uma%20consulta.">Agendar Hórario</a>
                    </div>


                </div>
            </section>
        </>
    );
}