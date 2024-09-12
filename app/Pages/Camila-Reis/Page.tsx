import TabComponent from "@/app/components/TabComponent";
import Image from "next/image";
import Capa from '@/app/Images/Modelo Teste/capa.png'
import Profile from '@/app/Images/Modelo Teste/Perfil.png'

export default function Page() {
    return (
        <div>
            {/* CAPA */}
            <div>
                    <Image src={Capa.src} width={600} height={50} alt="perfil da modelo" className="border  border-white " />

            </div>
            {/* <div className="bg-zinc-400 w-full h-44"></div> */}
            {/* PERFIL */}
            <div className="p-4 pt-0">
                <div className="w-28 h-28 overflow-hidden rounded-full -mt-12">
                    <Image src={Profile.src} width={150} height={50} alt="perfil da modelo" className="border  border-white rounded-full " />
                </div>
                <div className="bg-zinc-500  "></div>

            </div>

            {/* BTTN */}
            <div className="flex justify-end">
                <div className="p-4 pt-0 flex justify-end"><div className="bg-zinc-200 border border-black w-14 h-14 rounded-full -mt-12 justify-end flex"></div></div>
                <div className="p-4 pt-0 flex justify-end"><div className="bg-zinc-200 border border-black w-14 h-14 rounded-full -mt-12 justify-end flex"></div></div>
            </div>

            {/* ITENS EM TELA */}
            {/* NOME */}
            <div className="pr-6 pl-6 w-full h-full flex">
            </div>
            <div className="p-3">
                <h1 className="font-semibold text-2xl">Thamires Ramos</h1>
                <p className="font-thin text-sm flex items-center gap-2">@thamiresramos01 <span className="flex items-center gap-2"><div className="bg-green-600 h-1 w-1 rounded-full"></div> Disponível agora</span></p>
            </div>

            {/* DESC */}
            <div className="p-3">
                <p className="text-[12px]">Prepare-se para perder o fôlego... Sou a fantasia que você nem sabia que precisava. 😈 Aqui, eu exploro os seus desejos mais secretos e transformo cada toque virtual em pura tentação.</p>
                <div className="h-[1px] mt-2 w-full bg-gray-300"></div>
            </div>

            {/* CTA */}
            <div className="p-3 pt-0">
                <h1 className="font-semibold text-lg">ASSINE JÁ</h1>
                <a href="#" className="flex justify-between items-center bg-[#00AEEF] w-full p-4 mt-2 text-white rounded-full hover:scale-110 hover:transition-all"><span> ASSINAR</span><span className="font-bold">R$19,90</span></a>
            </div>

            {/* DIVISAO */}
            <div className="h-[0.5px] mt-2 w-full bg-gray-400"></div>
            <div className="h-[5px]  w-full bg-gray-200"></div>
            <div className="h-[0.5px]  w-full bg-gray-300"></div>


            {/* IMAGENS/POSTS */}
            <TabComponent />

        </div>
    );
}