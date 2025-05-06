import React from 'react';

const cardData = [
    {
        id: 1,
        title: 'Odontopediatria / Atendimento infantil',
        description: 'Cuidamos do sorriso das crianças com atenção, carinho e técnicas específicas para os pequenos pacientes.',
        icon: '/icons/icon1.webp',
    },
    {
        id: 2,
        title: 'Ortodontia e Ortopedia / Aparelhos',
        description: 'Alinhamos seus dentes e maxilar com aparelhos modernos, garantindo estética e funcionalidade ao seu sorriso.',
        icon: '/icons/icon2.webp',
    },
    {
        id: 3,
        title: 'Implantes Dentários',
        description: 'Recupere seu sorriso com implantes seguros e duradouros, que substituem dentes perdidos com aparência natural.',
        icon: '/icons/icon3.webp',
    },
    {
        id: 4,
        title: 'Clareamento dentário',
        description: 'Dentes mais brancos e um sorriso renovado com técnicas de clareamento eficazes e seguras.',
        icon: '/icons/icon4.webp',
    },
    {
        id: 5,
        title: 'Próteses',
        description: 'Devolvemos a estética e a função mastigatória com próteses personalizadas e confortáveis para seu dia a dia.',
        icon: '/icons/icon5.webp',
    },
    {
        id: 6,
        title: 'Clínica Geral',
        description: 'Atendimento completo para sua saúde bucal, com diagnósticos precisos e tratamentos personalizados para todas as idades.',
        icon: '/icons/icon6.webp',
    },

];

export default function Cards() {
    return (
        <article className='pt-10 flex flex-col flex-wrap gap-x-6 gap-y-16 items-center justify-center lg:flex-row'>
            {cardData.map((card) => (
                <div key={card.id} className='border border-GrayP hover:border-BlueS flex flex-col items-center justify-center py-10 px-10 lg:w-1/3 max-w-[380px] h-[250px] relative'>
                    <div className='absolute -top-10'>
                        <img className='bg-BlueS rounded-full border-4 border-white' src={card.icon} alt={card.title} />
                    </div>
                    <h1 className='mt-6 text-GrayS text-xl uppercase text-center'>{card.title}</h1>
                    <p className='text-center mt-4 text-GrayP font-light'>{card.description}</p>
                </div>
            ))}
        </article>
    );
}
