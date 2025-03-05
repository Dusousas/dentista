import React from 'react';
import { IoMdSend } from 'react-icons/io';

export default function Newsletter() {
    return (
        <section className='relative py-40 bgNew'>
            <div className="absolute inset-0 bg-black opacity-60"></div>

            <div className='relative maxW text-white'>
                <h1 className='text-center text-2xl'>
                    Fique por dentro das <span className='text-BlueP font-semibold'>nossas novidades</span>
                </h1>
                <h1 className='text-center my-5 text-lg'>Assine nossa newsletter</h1>

                <div className='relative w-full lg:max-w-[50%] mx-auto'>
                    <input 
                        type="text" 
                        className="p-2 w-full text-black outline-none border-b-2 border-BlueP pr-10 " 
                        placeholder="Seu e-mail"
                    />
                    <button className='absolute right-2 top-1/2 transform -translate-y-1/2 text-2xl text-BlueP'>
                        <IoMdSend />
                    </button>
                </div>
            </div>
        </section>
    );
}
