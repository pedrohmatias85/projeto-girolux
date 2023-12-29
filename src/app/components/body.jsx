import Image from "next/image"
import BgImage from '../assets/background.png'
import SeloQualidade from "../assets/Selo qualidade 1.svg"
import AtendimentoIcon from "../assets/atendimento 1.svg"
import IconeEstrela from "../assets/iconeestrela.png"
import IconeGoogle from "../assets/icone do Google.png"
import IconeEmpresas from "../assets/Logos completos mobile.png"
import BackgroundDesktop from '../assets/backgrounddesktop.png'
import IMGInfraestrutura from '../assets/infraestrutura .png'
import IMGtomadas from '../assets/tomadaseinterruptores.png'





import BotaoVoador from "./floatingbutton"
import Botao from "./contactbutton"


export default function body () {
    return (
            
        <div className="text-center">

            {/*  Início da primeira tela */}
            <div className="text-center justify-center xl:max-h-[60vh] md:max-h-[45vh]">
                <Image className='inline md:hidden' src={BgImage} alt={'background'}  ></Image>
                <Image className=' hidden md:block' src={BackgroundDesktop}></Image>
                <Botao></Botao>
            </div>
            <div className="md:flex justify-center xl:gap-60 ">
            <div className="text-center md:text-left md:text-4xl text-gray md:text-primary-orange font-extrabold text-lg md:text-2xl md:flex-col  md:mt-20 xl:mt-36 md:pl-10 ">
                <p>Está a procura de <span className="text-primary-orange font-extrabold md:bg-gray md:rounded-xl md:px-1"> materiais elétricos</span></p>
                <p>para todas as fases da sua obra?</p>
                <div className="bg-primary-orange ml-40 w-14 h-1.5 rounded-full mt-2 md:hidden "></div>
                <p className="font-extrabold text-xl mt-10 md:text-left md:text-gray md:font-normal md:text-2xl">Prazer, somos a <span className="md:font-bold">girolux!</span></p> 
                <div className="bg-gray w-14 h-1 rounded-full hidden md:block"></div>
            </div>
            <div className="text-center md:h-[50vh] bg-primary-orange md:bg-white mt-10 py-10 text-gray md:mr-10"> 
                <div className=' md:flex gap-5'>
                    <div className="bg-primary-orange flex md:flex-col justify-center text-center rounded-2xl md:h-[30vh] md:w-[34vh]">
                    <div className="md:pl-32 pr-3 pb-5"><Image className="mt-3" src={AtendimentoIcon} alt="icone-atendimento"></Image></div>
                    <div className="text-left md:text-center mt-1">
                        <p className="font-bold">Atendimento de excelência</p>
                        <p className="text-white">Profissionais capacitados com </p>
                        <p className="text-white">anos de experiência no mercado.</p>
                    </div>
                    </div>
                <div className=" bg-primary-orange flex md:flex-col justify-center text-center rounded-2xl md:h-[30vh] md:w-[34vh] mt-5 md:mt-0">     
                <div className="md:ml-36 mt-3 -ml-5 pb-5"><Image  className="mt-1" src={SeloQualidade} alt='icone-qualidade'></Image></div>
                        <div className="text-left md:text-center mt-1 pl-6">
                            <p className="font-bold"> Produtos de Qualidade</p>
                            <p className="text-white">Encontre marcas renomadas</p>
                            <p className="text-white"> e garantia de fabricação</p>
                        </div>
                </div>
            </div> 
            </div> 
            </div>
            {/*  Final da primeira tela */}

            <div className="mt-2 flex justify-center">
                <div className="bg-primary-orange w-1.5 h-14 rounded-full mt-2 md:hidden "></div>
                <div className="text-left md:text-center ml-2 ">
                    <h1 className="font-extrabold text-gray mt-2 text-xl md:font-black md:text-4xl">Está construindo ou reformando?</h1>
                    <p className=" text-primary-orange font-bold md:font-black md:text-2xl ">Nosso compromisso é com seu lar único</p>
                </div>
            </div>
            
             {/*  Início da segunda tela */}

            <div className="mt-5 bg-primary-orange h-[50vh] gap-60 flex justify-center md:justify-between">
                <div className="text-left md:ml-20">
                    <div className="pt-10 pl-5 text-white font-extrabold text-3xl xl:text-6xl">
                        <p>Tudo em</p>
                        <p>infraestrutura!</p>
                    </div>
                    <div className="ml-5 mt-10 text-gray flex font-medium xl:text-2xl md:gap-56">
                        <div>
                            <div className="mt-4">
                                <p>Tubulação</p>
                                <div className="bg-gray w-10 h-1 rounded-full mt-3"></div>
                            </div>
                            <div className="mt-5">
                                <p>Padrão</p>
                                <p>de energia</p>
                                <div className="bg-gray w-10 h-1 rounded-full mt-1"></div>
                                
                            </div>
                        </div>
                        <div className="ml-5 mt-">
                            <div>
                                <p>Eletrodutos</p>
                                <p>Corrugados</p>
                                <div className="bg-gray w-10 h-1 rounded-full mt-1"></div>
                                <div className="mt-5">
                                <p>Quadros</p>
                                <p>de distribuição</p>
                                <div className="bg-gray w-10 h-1 rounded-full mt-1"></div>
                                </div>
                            </div>       
                        </div>     
                    </div>
                </div>
                <div className="hidden md:flex">
                <Image src={IMGInfraestrutura} className="mt-4"></Image>
                </div>
            </div>

             {/*  Final da segunda tela */}

             {/* início da terceira tela */}
                <div className="bg-white h-[60vh] flex justify-between">
                    <div className="md:mt-20 md:ml-10 scale-y-50 md:scale-100 ">
                         <Image src={IMGtomadas}></Image>
                    </div>

                    <div className=" text-left md:text-right md:pr-52 md:pt-24">
                        <div className="text-primary-orange pt-20 pr-1 font-black md:text-6xl ">
                            <p> Interruptores</p>
                            <p className=""> e tomadas</p>
                        </div>
                         <div  className="text-gray text-sm md:text-2xl mr-3 mt-3">
                            <p className="font-bold">Variedade e linhas exclusivas</p>
                            <span className=" font-medium">
                            <p>Para o seu ambiente</p>
                            </span>
                            <div className="bg-gray w-5 h-0.5 rounded-full md:bg-primary-orange md:w-20 md:h-1 md:ml-96 md:mt-5"></div>
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
                <div className="hidden" ><Botao></Botao></div>
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
              <p className="text-xsm text-gray">Confira mais 90 comentários na página do Google, no termo de pesquisa:</p>
              <p className="text-xsm text-gray">Girolux Dourados.</p>
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