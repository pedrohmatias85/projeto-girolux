import Image from "next/image"
import SeloQualidade from "../assets/Selo qualidade 1.svg"
import AtendimentoIcon from "../assets/atendimento 1.svg"

export default function body () {
    return (
        <div className="text-center">
            <div className="text-center mt-10 text-gray font-extrabold">
                <p>Está a procura de <span className="text-primary-orange font-extrabold"> materiais elétricos</span></p>
                <p>para todas as fases da sua obra?</p>
            </div>
            <div className="text-center h-full bg-[url('/imgs/backgroundlaranja.png')]  mt-10 py-10 text-gray flex-col bg-cover bg-right-bottom">
                <p className="font-extrabold mb-10 text-xl">Prazer, somos a girolux!</p>
                <div className=" ml-1 flex justify-center">
                    <Image className="mr-1" src={AtendimentoIcon}></Image>
                    <div>
                        <p className="font-bold">Atendimento de excelência</p>
                        <p className="text-white">Profissionais capacitados com </p>
                        <p className="text-white">anos de experiência no mercado.</p>
                    </div>
                </div>
                <div className="mt-5 flex justify-center">
                    <Image  className="mr-2"  src={SeloQualidade}></Image>
                    <div>
                        <p className="font-bold mr-10 "> Produtos de Qualidade</p>
                        <p className="text-white mr-10 ">Encontre marcas renomadas</p>
                        <p className="text-white mr-10 "> e garantia de fabricação</p>
                    </div>
                </div>
            </div>
        </div>
    )
}