import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

const professionals = [
    { name: 'Dra. Beatriz Cury', specialty: 'General, Orthodontist', image: 'profissional.png' },
    { name: 'Dr. João Silva', specialty: 'Implantodontist', image: 'profissional.png' },
    { name: 'Dra. Maria Souza', specialty: 'Pediatric Dentist', image: 'profissional.png' },
    { name: 'Dra. Maria Souza', specialty: 'Pediatric Dentist', image: 'profissional.png' },
    { name: 'Dra. Beatriz Cury', specialty: 'General, Orthodontist', image: 'profissional.png' },
    { name: 'Dr. João Silva', specialty: 'Implantodontist', image: 'profissional.png' },
];

export default function Equip() {

    return (
        <section className='py-10'>
            <div className='maxW'>
            <h1 className='text-2xl uppercase text-GrayS text-center'>Nossos <span className='text-BlueP font-medium'>Especialistas</span></h1>
            <p className='mb-10 mt-4 text-GrayP font-extralight text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit explicabo impedit voluptas ullam quis sapiente quo excepturi, blanditiis tempore error exercitationem quas unde totam laborum voluptatibus eos nam! Dignissimos, sapiente.</p>

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
                                <img className='max-w-[80%]' src={pro.image} alt={pro.name} />
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
