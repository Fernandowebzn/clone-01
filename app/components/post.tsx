import Image from 'next/image'; // Supondo que você está usando Next.js
import Closed from '../Assets/padlock';


interface PostComponentProps {
    imageSrc: string;
}

export default function PostComponent({ imageSrc }: PostComponentProps) {
    return (
        <div className="w-screen relative">
            <div className="relative">
            </div>
            <div className="flex items-center justify-center mb-5">

                {/* IMAGE PERFIL */}
                <div className="w-full">
                </div>

                {/* BG */}
                <div className=" mb-3 absolute">
                    <div className='opacity-10 flex items-center justify-center'>
                        <Closed />

                    </div>
                    <a href="#" className="flex opacity-100 justify-center items-center bg-[#00AEEF] w-full px-4 text-base font-bold py-1 mt-2 text-white rounded-full hover:scale-110 hover:transition-all">
                        INSCREVA-SE PARA VER O CONTEÚDO
                    </a>
                </div>

                {/* Renderizando a imagem recebida via props */}
                <Image src={imageSrc} width={700} height={300} alt="Background do post de gastronomia" />
            </div>

            {/* BOTÃO */}
            
        </div>
    );
}
