import React from 'react';

const cardData = [
    {
        id: 1,
        title: 'Emplantes Dentários',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet deleniti quaerat molestias facere ex dolorem fugiat possimus ipsam, vero praesentium?',
        icon: '/icons/icon1.webp',
    },
    {
        id: 2,
        title: 'Ortodontia',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet deleniti quaerat molestias facere ex dolorem fugiat possimus ipsam, vero praesentium?',
        icon: '/icons/icon2.webp',
    },
    {
        id: 3,
        title: 'Implantes Dentários',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet deleniti quaerat molestias facere ex dolorem fugiat possimus ipsam, vero praesentium?',
        icon: '/icons/icon3.webp',
    },
    {
        id: 4,
        title: 'Clínica Geral',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet deleniti quaerat molestias facere ex dolorem fugiat possimus ipsam, vero praesentium?',
        icon: '/icons/icon4.webp',
    },
    {
        id: 5,
        title: 'Estética Dental',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet deleniti quaerat molestias facere ex dolorem fugiat possimus ipsam, vero praesentium?',
        icon: '/icons/icon5.webp',
    },
    {
        id: 6,
        title: 'Clínica Geral',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet deleniti quaerat molestias facere ex dolorem fugiat possimus ipsam, vero praesentium?',
        icon: '/icons/icon6.webp',
    },

];

export default function Cards() {
    return (
        <article className='pt-10 flex flex-col flex-wrap gap-x-6 gap-y-16 items-center justify-center lg:flex-row'>
            {cardData.map((card) => (
                <div key={card.id} className='border border-GrayP hover:border-BlueS flex flex-col items-center py-10 px-10 lg:w-1/3 max-w-[380px] relative'>
                    <div className='absolute -top-10'>
                        <img className='bg-BlueS rounded-full border-4 border-white' src={card.icon} alt={card.title} />
                    </div>
                    <h1 className='mt-6 text-GrayS text-xl uppercase'>{card.title}</h1>
                    <p className='text-center mt-4 text-GrayP font-light'>{card.description}</p>
                </div>
            ))}
        </article>
    );
}
