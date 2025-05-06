import React from 'react';
import { FaFacebookSquare, FaMapMarked } from 'react-icons/fa';
import { FaSquareInstagram, FaSquareWhatsapp } from 'react-icons/fa6';
import { MdEmail, MdOutlinePhonelinkRing } from 'react-icons/md';

export default function About() {
    return (
        <>
            <section id='sobre' className='bg-white py-10 bgAbout'>
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
                            <img className='w-full' src="dente.png" alt="" />
                        </div>

                        <div className='lg:w-1/2 text-center lg:text-left'>
                            <h1 className='text-xl uppercase text-GrayS font-semibold'>Cuidando de sorrisos</h1>
                            <div className='border-b border-BlueP w-[30%] mt-2 mx-auto lg:mx-0' />
                            <p className='mt-4 text-GrayP font-light'>Na nossa clínica, acreditamos que um sorriso saudável vai além da estética, é reflexo de bem-estar, autoestima e qualidade de vida. Por isso, nos dedicamos diariamente a oferecer um atendimento humanizado, ético e personalizado, com foco no cuidado integral da saúde bucal.</p>
                            <p className='mt-2 text-GrayP font-light'>Contamos com uma equipe de profissionais qualificados e apaixonados pelo que fazem, sempre atualizados com as mais modernas técnicas e tecnologias da odontologia. Nossa estrutura foi pensada para proporcionar conforto, segurança e tranquilidade em cada etapa do seu tratamento.</p>
                            <div className='mt-8'>
                                <a className='border border-GrayS py-4 px-6 uppercase' target='_blank' href="https://api.whatsapp.com/send?phone=5514998132293&text=Olá,%20gostaria%20de%20marcar%20uma%20consulta.">Fale com um Especialista</a>
                            </div>
                        </div>
                    </article>

                    <article className='mt-20 flex flex-col-reverse gap-20 lg:flex-row'>
                        <div className='lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0'>
                            <h1 className='text-xl uppercase text-GrayS font-semibold'>Cliníca <span className='text-BlueP'>Espaço Saúde</span></h1>
                            <div className='border-b mx-auto border-BlueP w-[30%] mt-2 lg:mx-0' />
                            <p className='mt-4 text-GrayP font-light'>O Espaço Saúde Odontologia está em atividade desde 2017, na cidade de Torrinha, com profissionais capacitados e atualizados, trazendo para cidade uma odontologia acessível, tratamento humanizado e responsável. Contamos com um ambiente amplo e aconchegante para receber nossos pacientes e tornarmos a experiência leve e tranquila.</p>
                            <div className='mt-8 flex flex-col items-center justify-center gap-4 lg:justify-start lg:items-start'>
                                <p className='flex gap-2 text-GrayS'><FaMapMarked className='text-BlueP text-xl' />Rua XV de novembro, 321 Torrinha-SP</p>
                                <p className='flex gap-2 text-GrayS'><MdOutlinePhonelinkRing className='text-BlueP text-xl' />                              
                                (14)9 98132293</p>
                                <p className='flex gap-2 text-GrayS'><MdEmail className='text-BlueP text-xl' />contato@espaçosaude.com</p>
                                <div className='flex items-center justify-center gap-4 lg:justify-start lg:items-start'>
                                    <a target='_blank' href="https://www.instagram.com/esaudeodontologia/"><FaSquareInstagram className='text-BlueP text-xl' /></a>
                                    <a href="/"><FaFacebookSquare className='text-BlueP text-xl' /></a>
                                    <a target='_blank' href="https://api.whatsapp.com/send?phone=5514998132293&fbclid=PAZXh0bgNhZW0CMTEAAac8Sjg1qEeDIvTG5zYcHKo8Nb-tP2E-xcCxgP_oYArTKBRwm5k3Z_xt9Vb6KA_aem_sww5vE5UKy9CamwDIF3p_g"><FaSquareWhatsapp className='text-BlueP text-xl' /></a>
                                </div>
                            </div>

                        </div>
                        <div className='lg:w-1/2'>
                            <img className='arrow-border' src="mainbg1.jpg" alt="" />
                        </div>
                    </article>

                </div>
            </section>
        </>
    );
}