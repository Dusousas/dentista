import React from 'react';
import Navbar from './subc/Navbar';

export default function Header() {
    return (
        <>
            <header className='py-2 relative border-b-[1px] border-GrayP'>
                <div className='maxW flex justify-between items-center'>

                    <a href="/">
                        <img className='w-[20%]' src="logo.png" alt="" />
                    </a>
                    <Navbar />


                </div>
            </header>
        </>
    );
}