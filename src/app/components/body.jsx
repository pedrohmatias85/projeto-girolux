import Image from "next/image"
import BgImage from '../assets/background.png'
import SeloQualidade from "../assets/SeloQualidade.png"
import AtendimentoIcon from "../assets/atendimento.png"
import IconeEstrela from "../assets/iconeestrela.png"
import IconeGoogle from "../assets/icone do Google.png"
import IconeEmpresas from "../assets/Logos completos mobile.png"
import BackgroundDesktop from '../assets/backgrounddesktop.png'
import IMGInfraestrutura from '../assets/infraestrutura .png'
import IMGtomadas from '../assets/tomadaseinterruptores.png'
import IMGLampadas from '../assets/Imagemdeiluminacao.png'
import IMGCondutores from '../assets/Imagemdecondutoreseletricos .png'
import IMGestrutura from '../assets/Imagemdainfraestrutura.png'
import IMGCaixa from '../assets/Caixadefornecedores.png'
import LogosDesktop from '../assets/LOGOS DESKTOP.png'
import Google from '../assets/google.png'
import InfraestruturaMobile from '../assets/infraestruturamobile.png'




import BotaoVoador from "./floatingbutton"
import Botao from "./contactbutton"


export default function body () {
    return (
            
        <div className="text-center">

            {/*  Início da primeira tela */}
            <div className="text-center justify-center xl:max-h-[60vh]">
                <Image className='inline md:hidden' src={BgImage} alt={'background'}  ></Image>
                <Image className=' hidden md:block w-full' src={BackgroundDesktop}></Image>
                <Botao></Botao>
            </div>
            <div className="md:flex justify-between items-center 2xl:mt-10 lg:pl-16 gap-5 ">
            <div className="text-center text-gray font-extrabold text-lg md:flex-col  md:text-left md:text-2xl xl:text-4xl md:text-primary-orange pb-10 flex flex-col items-center lg:items-start ">
                    <div>
                        <p>Está a procura de <span className="text-primary-orange font-extrabold md:bg-gray md:rounded-xl md:px-1"> materiais elétricos</span></p>
                        <p>para todas as fases da sua obra?</p>
                    </div>

                <div className="bg-primary-orange  w-14 h-1.5 rounded-full my-2 md:hidden "></div>

                    <div className="lg:mt-5">
                        <p className="font-bold md:text-left md:text-gray md:font-normal xl:text-3xl">Prazer, somos a <span className="md:font-bold">Girolux!</span></p>
                        <div className="bg-gray w-16 h-1 rounded-full hidden md:block"></div>
                    </div>

            </div>

            <div className="text-center bg-primary-orange md:bg-white text-gray md:mt-10 md:mr-16 py-5 md:text-xl"> 
                <div className=' md:flex gap-5'>
                        <div className="bg-primary-orange flex md:flex-col text-center rounded-3xl max-h-[10%] ">
                            <div className="scale-50 md:scale-90 flex justify-center lg:mt-3 "><Image className=" py-5 md:py-0"  src={AtendimentoIcon} alt="icone-atendimento"></Image></div>
                            <div className="text-left md:text-center lg:py-5 lg:px-5 flex flex-col justify-center">
                                <p className="font-bold lg:text-2xl">Atendimento de excelência</p>
                                <p className="text-white">Profissionais capacitados com </p>
                                <p className="text-white font-semibold">anos de experiência no mercado.</p>
                            </div>
                        </div>
                        <div className=" bg-primary-orange flex md:flex-col text-center rounded-3xl">
                            <div className="scale-50 md:scale-90 lg:mt-3 flex justify-center lg:mt-1"><Image className="pr-5 md:pr-0"  src={SeloQualidade} alt='icone-qualidade'></Image></div>
                            <div className="text-left md:text-center py-5 lg:px-12">
                                <p className="font-bold lg:text-2xl"> Produtos de qualidade</p>
                                <p className="text-white">Encontre <span className="font-semibold">marcas renomadas</span></p>
                                <p className="text-white font-semibold"> e garantia de fabricação</p>
                            </div>
                        </div>
                </div> 
            </div> 
            </div>
            {/*  Final da primeira tela */}

            <div className="mt-2 flex justify-center items-end md:mt-10">
                <div className="bg-primary-orange w-1.5 h-14 rounded-full mt-2 md:hidden "></div>
                <div className="text-left md:text-center ml-2 ">
                    <h1 className="font-extrabold text-gray mt-6 text-xl md:font-black md:text-4xl">Está construindo ou reformando?</h1>
                    <p className=" text-primary-orange font-bold md:font-bold md:text-2xl ">Nosso compromisso é com seu lar único!</p>
                </div>
            </div>
            
             {/*  Início da infraestrutura */}

            <div className="mt-5 bg-primary-orange gap-6 lg:pl-16 pl-3 md:pl-0">
                    <div className="pt-10  text-white font-extrabold text-2xl xl:text-6xl text-left max-w-sm">
                        <p>Tudo em infraestrutura</p>   
                    </div>
                    <div className="flex justify-between">
                <div className="text-left pb-10">
                   
                    <div className=" text-gray flex font-medium text-sm lg:text-4xl gap-14 lg:mt-10">
                        <div className=" flex flex-col lg:gap-20 pt-5 md:flex-row gap-3 lg:gap-5 xl:gap-36">
                                <div className="flex flex-col gap-3 lg:gap-20 max-w-[100px] md:max-w-full justify-between">
                                    <div className="lg:pt-5 xl:pt-0">
                                        <p>Tubulação</p>
                                        <div className="bg-gray w-10 h-0.5 rounded-full mt-1 lg:mt-5 xl:mt-1 lg:w-20 lg:h-1"></div>
                                    </div>
                                    <div className="">
                                        <p>Padrão de energia</p>
                                        <div className="bg-gray w-10 h-0.5 rounded-full mt-1 lg:w-20 lg:h-1"></div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 lg:gap-20">
                                    <div className="">
                                        <p>Eletrodutos Corrugados</p>
                                        <div className="bg-gray w-10 h-0.5 rounded-full mt-1 lg:w-20 lg:h-1"></div>
                                    </div>
                                    <div className="">
                                        <p>Quadros de distribuição</p>
                                        <div className="bg-gray w-10 h-0.5 rounded-full mt-1 lg:w-20 lg:h-1"></div>
                                    </div> 
                                </div>                          
                        </div>   
                    </div>
                </div>
                <div className="flex items-end lg:max-w-[40%]">
                <Image src={IMGInfraestrutura} className="mt-4 hidden lg:block"></Image>
                <Image src={InfraestruturaMobile} className="lg:hidden"></Image>
                </div>
                </div>
            </div>

             {/*  Final da infraestrutura */}

             {/* início da tela de tomadas */}
                <div className="bg-white flex justify-between">
                    <div className="xl:mt- xl:ml-20 mt-10  ">
                         <Image src={IMGtomadas}></Image>
                    </div>

                    <div className=" text-left md:text-right pr-3 md:pr-14 xl:pr-16 md:pt-12 xl:pt-10 flex flex-col justify-center">
                        <div className="text-primary-orange font-black md:text-6xl ">
                            <p> Interruptores</p>
                            <p className=""> e tomadas</p>
                        </div>
                         <div  className="text-gray text-sm md:text-2xl mt-3">
                            <p className="font-bold">Variedade e linhas exclusivas</p>
                            <span className=" font-medium">
                            <p>Para o seu ambiente</p>
                            </span>
                            <div className="bg-gray w-5 h-0.5 rounded-full md:bg-primary-orange md:w-20 md:h-1 md:ml-96 md:mt-1"></div>
                         </div>
                    </div>
                </div>
            {/* final da tela de tomadas */}

            {/* início da tela de iluminação */}
                <div className="bg-notsowhite flex justify-between">
                    <div className="ml-3 md:ml-16 md:mt-10">
                        <p className="text-primary-orange font-black text-2xl md:text-6xl pt-12 text-left ">Iluminação</p>
                        <div className="text-gray flex text-left text-sm md:text-4xl gap-5 pt-5 md:pt-10 md:gap-10">
                            <div>
                                <p>Lâmpadas</p>
                                <div className="bg-primary-orange w-10 h-0.5 rounded-full md:w-20 md:h-1"></div>
                                <p className="pt-4 md:pt-10">Luminárias</p>
                                <div className="bg-primary-orange w-10 h-0.5 rounded-full md:w-20 md:h-1"></div>
                                <p className="pt-4 md:pt-10">Painel de Led</p>
                                <div className="bg-primary-orange w-10 h-0.5 rounded-full md:w-20 md:h-1"></div>
                            </div>
                            <div>
                                <p>Plafon</p>
                                <div className="bg-primary-orange w-10 h-0.5 rounded-full md:w-20 md:h-1"></div>
                                <p className="pt-4 md:pt-10 ">Spots</p>
                                <div className="bg-primary-orange w-10 h-0.5 rounded-full md:w-20 md:h-1"></div>
                            </div>
                        </div>    
                    </div>
                    <div className="md:mr-16 flex"><Image src={IMGLampadas} className=""></Image></div>
                </div>
            {/* final da tela de iluminação */}

            {/* incio da tela de condutores */}
                <div className="bg-primary-orange flex justify-between ">
                <div className="hidden" ><Botao></Botao></div>

                
                    <div className="flex items-end pt-10">
                    <Image src={IMGCondutores}></Image>
                    </div>

                    <div className="mr-3 lg:pr-16 flex justify-center items-center">
                        <div className="text-white text-2xl font-black text-left md:text-6xl text-right">
                            <div>
                                <p>Condutores</p>
                                <p>Elétricos</p>
                            </div>
                            <div className="text-gray text-sm font-medium text-left md:text-2xl text-right xl:text-3xl xl:mt-5 max-w-md">
                                <p>Com as <span className="font-bold"> marcas preferidas </span> pelos profissionais da área  </p>
     
                                <div className="bg-gray w-8 h-0.5 rounded-full mt-1 ml-32 md:w-16 md:h-1.5 md:ml-96 md:mt-1"></div>
                            </div>
                        </div>      
                 </div>
                 
                 </div>
            {/* final da tela de condutores */}
        
            {/* começo da tela industrial */}
                <div className="bg-white  flex justify-between ">
                    
                    <div className="text-left ml-3 xl:ml-16 pt-10 lg:ml-16">
                    <h1 className="text-2xl md:text-6xl font-black text-primary-orange">Industrial</h1>
                        <div className="text-gray text-sm mt-3 md:mt-10 md:text-4xl font-normal md:flex md:gap-20 gap-3">

                        <div className=" flex flex-col lg:flex-row lg:gap-10 gap-3">
                            <div className="flex flex-col gap-3 lg:gap-20">
                                <div>
                                    <p>Painéis de comando</p>
                                    <div className="bg-primary-orange w-10 h-0.5 rounded-full md:w-20 md:h-1"></div>
                                </div>
                                <div>
                                    <p className="" >Acionamentos</p>
                                    <div className="bg-primary-orange w-10 h-0.5 rounded-full md:w-20 md:h-1"></div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 lg:gap-20 justify-center lg:mt-7 xl:mt-0">
                                <div>
                                    <p className="md:" >Eletrocalhas</p>
                                    <div className="bg-primary-orange w-10 h-0.5 rounded-full md:w-20 md:h-1"></div>
                                </div>
                                <div>
                                    <p className="md:" >Automação</p>
                                    <div className="bg-primary-orange w-10 h-0.5 rounded-full md:w-20 md:h-1"></div>
                                </div>
                            </div>
                            </div>
                        </div>
                    
                    </div>

                    <div className="mt-5">
                        <Image className="" src={IMGestrutura}></Image>
                    </div>
                </div>

            {/* final da tela industrial*/}

             {/* início da tela do video] */}

            <div className="bg-primary-orange flex pb-10 h-full justify-center md:justify-between pt-5 lg:pt-24">
                <div className="font-bold text-gray lg:text-3xl xl:text-4xl lg:ml-16 lg:pt-2 flex justify-center items-center flex-col">
                    <div className=" ">Desde 2019 <span className="font-semibold">atendendo</span><p>Dourados-MS e região!</p> </div>
                    <div className="border-2 md:border-4  mx-8 mt-2 rounded-md text-2xl md:mt-8 md:h-16 md:rounded-3xl"><p className="md:mt-3 md:font-black md:text-4xl">+3.000</p></div>
                    <p className="font-semibold md:mt-5">Clientes cadastrados</p>
                </div>
                <div className="mt-5 xl:mr-16">
                <p className="text-white hidden lg:block">Confira o depoimento dos nossos clientes e parceiros!</p>
                <iframe className="hidden md:block" width="560" height="315" src="https://www.youtube.com/embed/VSO1BAx1xvo?si=RaaRkgFs2KgkwQKg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe className="md:hidden ml-3"width="150" height="315" src="https://www.youtube.com/embed/a5ssHQaC0qc?si=KwbGu61PEv0eNKX8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>

             {/* final da tela do vídeo */}

             {/* início da tela de comentários */}
            <div className="bg-white h-full bg-right-bottom xl:flex justify-between lg:pt-8 pb-10 xl:my-10" >
              
                 <div className=" xl:mt-26 xl:ml-16 pt-10 ">
                    <div className="flex flex-col items-center xl:items-start pb-10"> 
                        <h1 className="text-gray text-xl font-black xl:text-5xl lg:text-left">Avaliações da Girolux</h1>
                        <div className="flex  mt-3">
                            <p className="font-semibold text-gray text-3xl pt-1 pr-2 lg:text-5xl">4,9</p>
                            <Image src={IconeEstrela} className="h-10 w-10 lg:h-14 lg:w-14"></Image>
                            <Image src={IconeEstrela} className="h-10 w-10 lg:h-14 lg:w-14"></Image>
                            <Image src={IconeEstrela} className="h-10 w-10 lg:h-14 lg:w-14"></Image>
                            <Image src={IconeEstrela} className="h-10 w-10 lg:h-14 lg:w-14"></Image>
                            <Image src={IconeEstrela} className="h-10 w-10 lg:h-14 lg:w-14"></Image>
                        </div>
                    </div>
                   
                    <div className="hidden xl:flex items-center">
                    <div className=" flex justify-center align-middle items-center">
                        <Image className="" src={Google}></Image>
                    </div>
                    <div className=" text-xsm md:text-lg text-gray w-[60vh] text-left ml-5">
                        <p className=" font-bold">Todas as avaliações são oficiais do Google.</p>
                        <p className="">Confira mais 90 comentários na página do Google, no termo de pesquisa: Girolux Dourados.</p>
                    </div>
                    </div>

                </div>
                <div>    
                    <div className="flex flex-col gap-5 lg:gap-10 xl:mr-16 text-white">
                        <div className="md:flex justify-center ">
                            {/*<div className="bg-dark-orange h-16 w-16 rounded-full relative -bottom-20 left-4 md:left-16 md:mt-14"><p className="text-white pt-3.5 font-extrabold text-3xl">D</p></div>*/}
                            <div className="bg-gray max-w-xl pb-5 rounded-3xl">
                                <h1 className="pt-2 md:text-xl md:font-bold">Daniel Manica</h1>
                                <div className="text-xsm text-center md:text-lg px-3 pt-3" ><p>Tudo do gênero elétrico, melhor preço, garantia, ótimo atendimento e o melhor café da cidade</p></div>
                            </div>
                        </div>
                        <div className="md:flex justify-center">
                            {/*<div className="bg-dark-orange h-16 w-16 rounded-full relative -bottom-20 left-4 md:left-16 md:mt-14"><p className="text-white pt-3.5 font-extrabold text-3xl">S</p></div>*/}
                            <div className="bg-gray max-w-xl pb-5 rounded-3xl">
                                <div className="gap-5">
                                    <h1 className="pt-2 md:text-xl md:font-bold">Simone Lima</h1>
                                    <div className="text-xsm text-center md:text-lg px-3 pt-3">
                                        <p>
                                        Excelente estabelecimento! Possui um ótimo atendimento, todos os
                                        funcionários são muito educados. Te tratam super bem tanto quando
                                        você vai comprar ou quando precisar trocar algo. Possui preços justos.
                                        Recomendo!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:hidden my-5">
                        <div className="flex justify-center mt-2">
                            <Image className="md:scale-150" src={IconeGoogle}></Image>
                        </div>
                        <div className="mt-3 text-xsm md:text-lg text-gray">
                            <p className=" font-bold">Todas as avaliações são oficiais do Google.</p>
                            <p className="">Confira mais 90 comentários na página do Google, no termo de pesquisa:</p>
                            <p className="">Girolux Dourados.</p>
                        </div>
                    </div>
            </div>

            {/* final da tela de comentários */}
            
            <div className="bg-primary-orange md:pt-5 xl:pt-10">
                <div className="md:hidden"><Botao></Botao></div>
                <div className="flex lg:justify-between justify-center">
                    <div className="md:text-left lg:pl-16 flex flex-col justify-center">
                        <h1 className="text-gray font-black text-2xl md:text-5xl ">
                            <p>Em parceria com</p>
                            <p>renomados fornecedores!</p>
                        </h1>
                        <div className="text-white md:text-3xl md:mt-4 xl:mt-10">
                            <p>Com assistência técnica <span className="font-bold">e garantia rápida</span></p>
                            <p className="font-bold">e sem burocracia.</p>
                        </div>
                    </div>
                    <div className="hidden md:block max-w-[50%] ">
                    <Image src={IMGCaixa} className=""></Image>
                    </div>
                </div>

                <div className=" pt-10pb-5 flex justify-center">
                    <Image src={IconeEmpresas} className="md:hidden" alt='ícone empresas'></Image>
                    <Image src={LogosDesktop} className="hidden md:block" alt='ícone empresas'></Image>

                </div>
            </div>
             
            <BotaoVoador></BotaoVoador>
        </div>
    )
}