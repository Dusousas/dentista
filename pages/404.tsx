import React, { JSX } from 'react';
import Image from 'next/image';

const NotFound: React.FC = (): JSX.Element => {
    return (
        <div className='h-[calc(100vh-153px)] flex flex-col items-center justify-center maxW'>
            <Image src="/404.png" alt="404 Not Found" width={300} height={500} quality={80} />
            <h1 className='text-6xl font-bold text-GrayS mb-4'>Oops..</h1>
            <p className='text-center'>Parece que a página que você está procurando não existe. Não se preocupe, vamos te ajudar a encontrar o que precisa!</p>
            <div className='mt-14'>
                <a className='bg-BlueP py-4 px-6 uppercase text-white font-bold' href="/">Voltar para início</a>
            </div>
        </div>
    );
};

export default NotFound;