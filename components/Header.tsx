import React from 'react';
import Navbar from './subc/Navbar';

export default function Header() {
    return (
        <>
            <header className='py-6 relative border-b-[1px] border-GrayP'>
                <div className='maxW flex justify-between items-center'>

                    <h1 className='uppercase text-2xl font-bold text-BlueP'>Espaço Saúde</h1>
                    <Navbar />


                </div>
            </header>
        </>
    );
}