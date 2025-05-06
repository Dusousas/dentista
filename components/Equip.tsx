import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

const professionals = [
    { name: 'Dra Beatriz Maziero Cury', specialty: 'Clínica geral e atendimento infantil', image: 'profissional/beatriz.png' },
    { name: 'Dra Mariana Minatel Rampazo', specialty: 'Clínica geral, ortodontia e ortopedia  - Aparelhos', image: 'profissional/mariana.png' },
    { name: 'Dra Melissa Hetch Spósito', specialty: 'Clínica geral e extrações', image: 'profissional/melissa.png' },
    { name: 'Dra Lais Tatiane Ferreira', specialty: 'Clínica geral e laserterapia', image: 'profissional/lais.png' },
    { name: 'Dra Paula Minatel Locatelli', specialty: 'Clínica geral e endodontia – Canal', image: 'profissional/paula.png' },
    { name: 'Dra Vitoria Siqueira Burato', specialty: 'Clínica geral', image: 'profissional/vitoria.png' },
];

export default function Equip() {

    return (
        <section id='dentistas' className='py-10'>
            <div className='maxW'>
            <h1 className='text-2xl uppercase text-GrayS text-center'>Nossos <span className='text-BlueP font-medium'>Especialistas</span></h1>
            <p className='mb-10 mt-4 text-GrayP font-extralight text-center'>Conheça nossa equipe de dentistas altamente qualificados, cada um dedicado a uma especialidade para oferecer o melhor cuidado ao seu sorriso.</p>

                <Swiper
                    className='custom'
                    modules={[Navigation, Autoplay, Pagination]}
                    spaceBetween={20}
                    speed={800}
                    autoplay={{ delay: 3000 }}
                    pagination={{ clickable: true }}                    
                    breakpoints={{
                        400: { slidesPerView: 1, slidesPerGroup: 1 },
                        640: { slidesPerView: 1, slidesPerGroup: 1 },
                        768: { slidesPerView: 1, slidesPerGroup: 1 },
                        1024: { slidesPerView: 3, slidesPerGroup: 3 },
                    }}
                >
                    {professionals.map((pro, index) => (
                        <SwiperSlide key={index}>
                            <article className='flex flex-col justify-center items-center text-center'>
                                <img className='max-h-[400px] object-cover' src={pro.image} alt={pro.name} />
                                <h1 className='text-xl mt-2'>{pro.name}</h1>
                                <p className='text-gray-500 font-extralight'>{pro.specialty}</p>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </section>
    );
}
