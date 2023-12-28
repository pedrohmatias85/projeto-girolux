import Image from "next/image"
import BgImage from '../assets/background.png'
import SeloQualidade from "../assets/Selo qualidade 1.svg"
import AtendimentoIcon from "../assets/atendimento 1.svg"
import IconeEstrela from "../assets/iconeestrela.png"
import IconeGoogle from "../assets/icone do Google.png"
import IconeEmpresas from "../assets/Logos completos mobile.png"





import BotaoVoador from "./floatingbutton"
import Botao from "./contactbutton"


export default function body () {
    return (

        <div className="text-center">
            <div className="text-center justify-center">
                <Image className='inline' src={BgImage} alt={'background'}></Image>
                <Botao></Botao>
            </div>
            <div className="text-center text-gray font-extrabold text-lg">
                <p>Está a procura de <span className="text-primary-orange font-extrabold"> materiais elétricos</span></p>
                <p>para todas as fases da sua obra?</p>
            </div>
            <div className="text-center h-full bg-[url('/imgs/backgroundlaranja.png')]  mt-10 py-10 text-gray bg-cover bg-right-bottom">
                <p className="font-extrabold mb-10 text-xl">Prazer, somos a girolux!</p>
                <div className='flex justify-center'>
                <div className=" ml-5">
                    <Image className="mt-8" src={AtendimentoIcon} alt="icone-atendimento"></Image>
                    <Image  className="mt-10" src={SeloQualidade} alt='icone-qualidade'></Image>
                </div>
                <div className="mt-5 ml-5">
                    <div className="text-left">
                        <p className="font-bold">Atendimento de excelência</p>
                        <p className="text-white">Profissionais capacitados com </p>
                        <p className="text-white">anos de experiência no mercado.</p>
                    </div>
                    <div className="text-left mt-5">
                        <p className="font-bold"> Produtos de Qualidade</p>
                        <p className="text-white">Encontre marcas renomadas</p>
                        <p className="text-white"> e garantia de fabricação</p>
                    </div>
                </div>
            </div> 
            </div> 

            <div className="mt-5 ml-5 flex">
                <div className="bg-primary-orange w-1.5 h-14 rounded-full mt-2 "></div>
                <div className=""><h1 className="font-extrabold text-gray mt-2 ml-2 text-xl text-left">Está construindo ou reformando?</h1>
                    <p className=" text-primary-orange font-bold text-left ml-2">Nosso compromisso é com seu lar único</p>
                </div>
            </div>
            
            <div className="mt-5">
                <div className="text-left h-96 bg-[url('/imgs/background2.png')] bg-cover bg-no-repeat bg-center">
                    <div className="pt-10 pl-5 text-white">
                        <p className="font-extrabold text-3xl">Tudo em</p>
                        <p className="font-extrabold text-3xl">infraestrutura!</p>
                    </div>
                    <div className="ml-5 mt-3 text-gray flex font-medium">
                        <div>
                            <div className="mt-3">
                                <p>Tubulação</p>
                                <div className="bg-gray w-10 h-1 rounded-full mt-3"></div>
                            </div>
                            <div className="mt-5">
                                <p>Padrão</p>
                                <p>de energia</p>
                                <div className="bg-gray w-10 h-1 rounded-full mt-1"></div>
                            </div>
                        </div>
                        <div className="ml-10">
                            <div>
                                <p>Eletrodutos</p>
                                <p>Corrugados</p>
                                <div className="bg-gray w-10 h-1 rounded-full mt-1"></div>
                            </div>
                            <div className="mt-5">
                                <p>Quadros</p>
                                <p>de distribuição</p>
                                <div className="bg-gray w-10 h-1 rounded-full mt-1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                <div className="bg-[url('/imgs/background3.png')] bg-cover bg-no-repeat h-96 bg-left">
                    <div className="text-right mr-1 pt-10 flex flex-col items-end">
                        <div className="text-primary-orange pt-12 pr-20 font-black text-xl">
                            <p> Interruptores</p>
                            <p className="pr-8"> e tomadas</p>
                        </div>
                         <div  className="text-gray text-sm mr-3 mt-1">
                            <p className="font-bold">Variedade e linhas exclusivas</p>
                            <span className="text-start font-medium">
                            <p>Para o seu ambiente</p>
                            </span>
                            <div className="bg-gray w-5 h-0.5 rounded-full"></div>
                         </div>
                    </div>
                </div>
                <div className="bg-[url('/imgs/background5.png')] bg-cover bg-no-repeat h-80 bg-right-bottom">
                    <div>
                        <p className="text-primary-orange font-black text-2xl pt-12 text-left pl-3">Iluminação</p>
                        <div className="text-gray flex text-left text-sm pl-3 gap-5 font-medium pt-2">
                            <div>
                                <p>Lâmpadas</p>
                                <div className="bg-primary-orange w-10 h-0.5 rounded-full"></div>
                                <p className="pt-4">Luminárias</p>
                                <div className="bg-primary-orange w-10 h-0.5 rounded-full"></div>
                                <p className="pt-4">Painel de Led</p>
                                <div className="bg-primary-orange w-10 h-0.5 rounded-full"></div>
                            </div>
                            <div>
                                <p>Plafon</p>
                                <div className="bg-primary-orange w-10 h-0.5 rounded-full"></div>
                                <p className="pt-4">Spots</p>
                                <div className="bg-primary-orange w-10 h-0.5 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[url('/imgs/background4.png')] bg-cover h-80 bg-no-repeat bg-right-bottom ">
                <Botao></Botao>
                 <div className="flex flex-col items-end">
                        <div className="text-white text-2xl font-black text-left pr-5 pt-3">
                            <div>
                                <p>Condutores</p>
                                <p>Elétricos</p>
                            </div>
                            <div className="text-gray text-xs font-medium text-left">
                                <p>Com as <span className="font-bold"> marcas preferidas </span>  </p>
                                <p>pelos profissionais da área</p>
                                <div className="bg-gray w-8 h-0.5 rounded-full mt-1"></div>
                            </div>
                        </div>
                 </div>
              </div>
        
                <div className="bg-[url('/imgs/background6.png')] bg-cover bg-no-repeat h-80 bg-right-bottom">
                    <div className="text-left pt-10 ml-3">
                    <h1 className="text-2xl font-black text-primary-orange">Industrial</h1>
                    <div className="text-sm mt-3">
                        <p>Painéis de</p>
                        <p>comando</p>
                        <div className="bg-primary-orange w-8 h-0.5 rounded-full mt-1"></div>
                        <p className="text-sm mt-3" >Acionamentos</p>
                        <div className="bg-primary-orange w-8 h-0.5 rounded-full mt-1"></div>
                        <p className="text-sm mt-3" >Eletrocalhas</p>
                        <div className="bg-primary-orange w-8 h-0.5 rounded-full mt-1"></div>
                        <p className="text-sm mt-3" >Automação</p>
                        <div className="bg-primary-orange w-8 h-0.5 rounded-full mt-1"></div>
                    </div>
                    </div>
                </div>
            <div className="bg-primary-orange h-80 flex">
                <div className="font-bold text-gray">
                    <div className=" pl-3 mt-10 ">Desde 2019 <span className="font-regular">atendendo</span> Dourados-MS e região!</div>
                    <div className="border-2 mx-8 mt-2 rounded-md text-2xl">+3.000</div>
                    <p className="font-regular ">Clientes cadastrados</p>
                </div>
                <iframe width="145" height="max" className=" pl-3"src="https://www.youtube.com/embed/_EgU_7rzkEo?si=42zhpNmclXlGxeyM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <div className="bg-[url('/imgs/background7.png')] bg-cover bg-no-repeat h-full bg-right-bottom pb-10 pt-7" >
              <h1 className="text-gray text-xl font-black">Avaliações da Girolux</h1>
              <div className="flex justify-center">
                <p className="font-semibold text-gray text-3xl pt-1 pr-2">4,9</p>
                <Image src={IconeEstrela} className="h-10 w-10"></Image>
                <Image src={IconeEstrela} className="h-10 w-10"></Image>
                <Image src={IconeEstrela} className="h-10 w-10"></Image>
                <Image src={IconeEstrela} className="h-10 w-10"></Image>
                <Image src={IconeEstrela} className="h-10 w-10"></Image> 
              </div>
              <div className="pb-6">
                    <div>
                        <div className="bg-dark-orange h-16 w-16 rounded-full relative -bottom-20 left-4"><p className="text-white pt-3.5 font-extrabold text-3xl">D</p></div>
                        <div className="bg-gray h-24 mx-10 rounded-xl text-white">
                            <h1 className="pt-2">Daniel Manica</h1>
                            <div className="text-xsm  text-left pl-12" ><p>Tudo do gênero elétrico, melhor preço, garantia, ótimo atendimentoe</p>
                                <p>o melhor café da cidade</p></div>
                        </div>
                    </div>     
                   <div>
                        <div className="bg-dark-orange h-16 w-16 rounded-full relative -bottom-20 left-4"><p className="text-white pt-3.5 font-extrabold text-3xl">S</p></div>
                        <div className="bg-gray h-full pb-3 mx-10 rounded-xl text-white">
                            <h1 className="pt-2">Simone Lima</h1>
                            <div className="text-xsm  text-left pl-12" ><p>Excelente estabelecimento! Possui um ótimo atendimento, todos os </p>
                                <p>funcionários são muito educados. Te tratam super bem tanto quando</p>
                                <p>você vai comprar ou quando precisar trocar algo. Possui preços justos.</p>
                                <p>Recomendo!</p>
                            </div>
                        </div>
                    </div>
              </div>
              <div className="pb-3">
              <div className="flex justify-center mt-2">
                   <Image src={IconeGoogle}></Image>
              </div>
              <p className="text-xsm font-bold text-gray">Todas as avaliações são oficiais do Google.</p>
              <p className="text-xsm text-gray">Confira mais 90 comentários na página do Google, no termo de pesquisa: Girolux Dourados.</p>
              </div>
            </div>
            
            <div className="bg-primary-orange">
                <Botao></Botao>
                
                <h1 className="text-gray font-black text-2xl">
                   <p>Em parceria com</p>
                    <p>renomados fornecedores!</p>
                </h1>
                <div className="text-white">
                    <p>Com assistência técnica <span className="font-bold">e garantia rápida</span></p>
                    <p className="font-bold">e sem burocracia.</p>
                </div> 

                <div className="pt-5 pb-5 flex justify-center">
                    <Image src={IconeEmpresas}></Image> {/* ícones Novos */}
                </div>
            </div>
             
            <BotaoVoador></BotaoVoador>
        </div>
    )
}