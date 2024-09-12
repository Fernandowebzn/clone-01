'use client'
import { useState } from 'react';
import MediaComponent from './media';
import PostComponent from './post';
import Imagem01 from '@/app/Images/Modelo Teste/Slide 16_9 - 1.png'
import Imagem02 from '@/app/Images/Modelo Teste/Slide 16_9 - 2.png'
import Imagem03 from '@/app/Images/Modelo Teste/Slide 16_9 - 3.png'

const TabComponent = () => {
    const [activeTab, setActiveTab] = useState('POSTS');

    return (
        <div>
            {/* Container das abas */}
            <div className="w-full h-12 flex">
                <div
                    className={`w-full flex items-center justify-center text-zinc-900 p-4 cursor-pointer ${activeTab === 'POSTS'
                        ? 'bg-white border-b-2 border-zinc-600'
                        : 'bg-white border-b border-zinc-300'
                        }`}
                    onClick={() => setActiveTab('POSTS')}
                >
                    370 FOTOS
                </div>
                <div
                    className={`w-full flex items-center justify-center text-zinc-900 p-4 cursor-pointer ${activeTab === 'MEDIAS'
                        ? 'bg-white border-b-2 border-zinc-600'
                        : 'bg-white border-b border-zinc-300'
                        }`}
                    onClick={() => setActiveTab('MEDIAS')}
                >
                    417 VIDEOS
                </div>
            </div>

            {/* Renderização condicional do conteúdo com base na aba ativa */}
            <div className="">
                {activeTab === 'POSTS' && 
                <div>
                    <PostComponent imageSrc={Imagem01.src} />
                    <PostComponent imageSrc={Imagem02.src} />
                    <PostComponent imageSrc={Imagem03.src} />
                </div>
                }
                {activeTab === 'MEDIAS' && <MediaComponent />}
            </div>
        </div>
    );
};

export default TabComponent;
