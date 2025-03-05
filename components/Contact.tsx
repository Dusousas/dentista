import React from 'react';
import { MdArrowDropDown } from 'react-icons/md';

export default function Contact() {
    return (
        <section className=''>
            <div className='flex flex-col lg:flex-row'>
                {/* Horários de Funcionamento */}
                <article className='bg-[#F6F9F9] py-20 w-full flex justify-center lg:w-1/2'>
                    <div className='w-[60%]'>
                        <h1 className='text-2xl font-semibold text-GrayS'>
                            Horário de <span className='text-[#00C1E0]'>funcionamento</span>
                        </h1>
                        <ul className='mt-5 space-y-2 text-gray-600'>
                            {[
                                { day: 'Segunda-feira', hours: '10:00 am – 4:00 pm' },
                                { day: 'Terça-feira', hours: '09:00 am – 3:00 pm' },
                                { day: 'Quarta-feira', hours: '11:00 am – 5:00 pm' },
                                { day: 'Quinta-feira', hours: '09:00 am – 3:00 pm' },
                                { day: 'Sexta-feira', hours: '12:00 am – 6:00 pm' },
                                { day: 'Sabádo', hours: '10:00 am – 2:00 pm' },
                                { day: 'Domingo', hours: 'Fechado', closed: true }
                            ].map((item, index) => (
                                <li key={index} className='flex justify-between border-b pb-1'>
                                    <span className='font-semibold'>{item.day} :</span>
                                    <span className={item.closed ? 'text-red-500' : ''}>{item.hours}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </article>

                {/* Formulário */}
                <article className='bg-[#ACEEFE] py-20 w-full flex justify-center lg:w-1/2'>
                    <div className='w-[60%]'>
                        <h1 className='text-2xl font-semibold text-GrayS'>
                            Faça uma avaliação <span className='text-[#00C1E0]'> gratuita</span>
                        </h1>
                        <form className='mt-5 space-y-4'>
                            <input type='text' placeholder='Seu nome' className='border-b-2 bg-transparent border-BlueP p-2 w-full outline-none' />
                            <input type='text' placeholder='Seu telefone' className='border-b-2 bg-transparent border-BlueP p-2 w-full outline-none' />
                            <div className="relative w-full">
                                <select className="border-b-2 bg-transparent border-BlueP p-2 w-full appearance-none cursor-pointer outline-none pr-10" name="treatment" id="treatment">
                                    <option value="" disabled selected>Selecione um tratamento</option>
                                    <option value="tratamento1">Avaliação</option>
                                    <option value="tratamento2">Tratamento 2</option>
                                    <option value="tratamento3">Tratamento 3</option>
                                </select>
                                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-2xl pointer-events-none">
                                    <MdArrowDropDown />
                                </div>
                            </div>

                            <textarea placeholder='Sua mensagem' rows={3} className='w-full border-b-2 bg-transparent outline-none border-BlueP resize-none p-2' name="" id=""></textarea>

                            <button className='border-2 border-GrayS px-5 py-2 mt-4 uppercase'>
                                Ver disponibilidade
                            </button>
                        </form>
                    </div>
                </article>
            </div>
        </section>
    );
}
