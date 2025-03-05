import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='relative'>
            {/* Desktop Menu */}
            <div className='hidden lg:block'>
                <ul className='flex gap-6 uppercase'>
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#servicos">Serviços</a></li>
                    <li><a href="#sobre-nos">Sobre nós</a></li>
                    <li><a href="#dentistas">Profissionais</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className='lg:hidden flex items-center'>
                <button onClick={() => setIsOpen(!isOpen)} className='text-2xl z-50 relative'>
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div 
                className={`fixed top-0 right-0 h-full w-full bg-BlueP p-4 lg:hidden transform transition-transform duration-300 z-20 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} 
                style={{ overflow: isOpen ? 'hidden' : 'auto' }}
            >
                <ul className='flex flex-col items-center gap-6 uppercase h-full justify-center'>
                    <li><a href="#inicio" onClick={() => setIsOpen(false)}>Inicio</a></li>
                    <li><a href="#servicos" onClick={() => setIsOpen(false)}>Serviços</a></li>
                    <li><a href="#sobre-nos" onClick={() => setIsOpen(false)}>Sobre nós</a></li>
                    <li><a href="#dentistas" onClick={() => setIsOpen(false)}>Profissionais</a></li>
                    <li><a href="#contato" onClick={() => setIsOpen(false)}>Contato</a></li>
                </ul>
            </div>
        </nav>
    );
}
