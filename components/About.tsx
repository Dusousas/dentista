import React from 'react';
import { FaFacebookSquare, FaMapMarked } from 'react-icons/fa';
import { FaSquareInstagram, FaSquareWhatsapp } from 'react-icons/fa6';
import { MdEmail, MdOutlinePhonelinkRing } from 'react-icons/md';

export default function About() {
    return (
        <>
            <section className='bg-white py-10 bgAbout'>
                <div className='flex flex-col items-center justify-center maxW'>
                    <article className='relative'>
                        <img src="/ico-hover.png" alt="" className='block mx-auto px-10' />
                        <div className='absolute inset-0 flex flex-col items-center justify-center text-center'>
                            <h1 className='text-2xl uppercase text-GrayS'>Sobre <span className='text-BlueP font-medium'>Nós</span></h1>
                            <p className='text-lg text-GrayP font-thin'>Ideias inovadoras em odontologia</p>
                        </div>
                    </article>

                    <article className='flex flex-col justify-between gap-20 mt-20 lg:flex-row'>
                        <div className='lg:w-1/2'>
                            <img className='w-full' src="img3.webp" alt="" />
                        </div>

                        <div className='lg:w-1/2 text-center lg:text-left'>
                            <h1 className='text-xl uppercase text-GrayS font-semibold'>Cuidando de sorrisos</h1>
                            <div className='border-b border-BlueP w-[30%] mt-2 mx-auto lg:mx-0' />
                            <p className='mt-4 text-GrayP font-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto quod sequi doloribus quam autem quae deserunt quibusdam, deleniti blanditiis exercitationem dolor aliquam, voluptatum suscipit consequatur eum. Similique, reprehenderit atque? Quos magnam necessitatibus autem repellendus.</p>
                            <p className='mt-2 text-GrayP font-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto quod sequi doloribus quam autem quae deserunt quibusdam, deleniti blanditiis exercitationem dolor aliquam, voluptatum suscipit consequatur eum. Similique, reprehenderit atque? Quos magnam necessitatibus autem repellendus.</p>
                            <div className='mt-8'>
                                <a className='border border-GrayS py-4 px-6 uppercase' href="">Fale com um Especialista</a>
                            </div>
                        </div>
                    </article>

                    <article className='mt-20 flex flex-col-reverse gap-20 lg:flex-row'>
                        <div className='lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0'>
                            <h1 className='text-xl uppercase text-GrayS font-semibold'>Cliníca <span className='text-BlueP'>Espaço Saúde</span></h1>
                            <div className='border-b mx-auto border-BlueP w-[30%] mt-2 lg:mx-0' />
                            <p className='mt-4 text-GrayP font-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto quod sequi doloribus quam autem quae deserunt quibusdam, deleniti blanditiis exercitationem dolor aliquam, voluptatum suscipit consequatur eum. Similique, reprehenderit atque? Quos magnam necessitatibus autem repellendus.</p>
                            <p className='mt-2 text-GrayP font-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto quod sequi doloribus quam autem quae deserunt quibusdam, deleniti blanditiis exercitationem dolor aliquam, voluptatum suscipit consequatur eum. Similique, reprehenderit atque? Quos magnam necessitatibus autem repellendus.</p>
                            <div className='mt-8 flex flex-col items-center justify-center gap-4 lg:justify-start lg:items-start'>
                                <p className='flex gap-2 text-GrayS'><FaMapMarked className='text-BlueP text-xl' />Rua XV de novembro, 321 Torrinha-SP</p>
                                <p className='flex gap-2 text-GrayS'><MdOutlinePhonelinkRing className='text-BlueP text-xl' />91234-5678</p>
                                <p className='flex gap-2 text-GrayS'><MdEmail className='text-BlueP text-xl' />contato@espaçosaude.com</p>
                                <div className='flex items-center justify-center gap-4 lg:justify-start lg:items-start'>
                                    <a href=""><FaSquareInstagram className='text-BlueP text-xl' /></a>
                                    <a href=""><FaFacebookSquare className='text-BlueP text-xl' /></a>
                                    <a href=""><FaSquareWhatsapp className='text-BlueP text-xl' /></a>
                                </div>
                            </div>

                        </div>
                        <div className='lg:w-1/2'>
                            <img className='arrow-border' src="about1.jpg" alt="" />
                        </div>
                    </article>


                </div>
            </section>
        </>
    );
}