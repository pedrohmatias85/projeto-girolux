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




import BotaoVoador from "./floatingbutton"
import Botao from "./contactbutton"


export default function body () {
    return (
            
        <div className="text-center">

            {/*  Início da primeira tela */}
            <div className="text-center justify-center xl:max-h-[60vh] md:max-h-[30vh]">
                <Image className='inline md:hidden' src={BgImage} alt={'background'}  ></Image>
                <Image className=' hidden md:block w-full' src={BackgroundDesktop}></Image>
                <Botao></Botao>
            </div>
            <div className="md:flex justify-between 2xl:mt-10 ">
            <div className="text-center md:text-left md:text-2xl xl:text-4xl text-gray md:text-primary-orange font-extrabold text-lg md:flex-col md:pl-10 xl:mt-24">
                <p>Está a procura de <span className="text-primary-orange font-extrabold md:bg-gray md:rounded-xl md:px-1"> materiais elétricos</span></p>
                <p>para todas as fases da sua obra?</p>
                <div className="bg-primary-orange ml-40 w-14 h-1.5 rounded-full mt-2 md:hidden "></div>
                <p className="font-extrabold text-xl mt-1 md:text-left md:text-gray md:font-normal xl:text-3xl">Prazer, somos a <span className="md:font-bold">Girolux!</span></p> 
                <div className="bg-gray w-16 h-1 rounded-full hidden md:block"></div>
            </div>

            <div className="text-center bg-primary-orange md:bg-white text-gray md:mr-10 pt-5 md:text-xl"> 
                <div className=' md:flex gap-5'>
                        <div className="bg-primary-orange flex md:flex-col text-center rounded-3xl  ">
                            <div className="scale-50 md:scale-90 flex justify-center"><Image className="mt-3" src={AtendimentoIcon} alt="icone-atendimento"></Image></div>
                            <div className="text-left md:text-center py-5 lg:px-5">
                                <p className="font-bold lg:text-2xl">Atendimento de excelência</p>
                                <p className="text-white">Profissionais capacitados com </p>
                                <p className="text-white font-semibold">anos de experiência no mercado.</p>
                            </div>
                        </div>
                        <div className=" bg-primary-orange flex md:flex-col text-center rounded-3xl">
                            <div className="scale-50 md:scale-90 flex justify-center pt-4"><Image className="mt-1" src={SeloQualidade} alt='icone-qualidade'></Image></div>
                            <div className="text-left md:text-center mt-5 lg:px-12">
                                <p className="font-bold lg:text-2xl"> Produtos de qualidade</p>
                                <p className="text-white">Encontre <span className="font-semibold">marcas renomadas</span></p>
                                <p className="text-white font-semibold"> e garantia de fabricação</p>
                            </div>
                        </div>
                </div> 
            </div> 
            </div>
            {/*  Final da primeira tela */}

            <div className="mt-2 flex justify-center md:mt-10">
                <div className="bg-primary-orange w-1.5 h-14 rounded-full mt-2 md:hidden "></div>
                <div className="text-left md:text-center ml-2 ">
                    <h1 className="font-extrabold text-gray mt-6 text-xl md:font-black md:text-4xl">Está construindo ou reformando?</h1>
                    <p className=" text-primary-orange font-bold md:font-bold md:text-2xl ">Nosso compromisso é com seu lar único!</p>
                </div>
            </div>
            
             {/*  Início da infraestrutura */}

            <div className="mt-5 bg-primary-orange md:h-[45] xl:h-[50vh] gap-6 flex justify-center md:justify-between">
                <div className="text-left md:ml-20">
                    <div className="pt-10 pl-5 text-white font-extrabold text-3xl xl:text-6xl text-left">
                        <p>Tudo em</p>
                        <p>infraestrutura!</p>
                    </div>
                    <div className="ml-5 mt-10 text-gray flex font-medium xl:text-4xl gap-14 ">
                        <div>
                            <div className="mt-6 lg:mt-6  xl:mt-10">
                                <p>Tubulação</p>
                                <div className="bg-gray w-20 h-1 rounded-full mt-3"></div>
                            </div>
                            <div className="mt-5">
                                <p>Padrão</p>
                                <p>de energia</p>
                                <div className="bg-gray w-20 h-1 rounded-full mt-3"></div>
                                
                            </div>
                        </div>
                        <div className="ml-5 pb-10">
                            <div>
                                <p>Eletrodutos</p>
                                <p>Corrugados</p>
                                <div className="bg-gray w-20 h-1 rounded-full mt-3"></div>
                                <div className="mt-5">
                                <p>Quadros</p>
                                <p>de distribuição</p>
                                <div className="bg-gray w-20 h-1 rounded-full mt-3"></div>
                                </div>
                            </div>       
                        </div>     
                    </div>
                </div>
                <div className="hidden md:flex md:max-w-lg xl:max-w-full">
                <Image src={IMGInfraestrutura} className="mt-4"></Image>
                </div>
            </div>

             {/*  Final da segunda tela */}

             {/* início da tela de tomadas */}
                <div className="bg-white h-[45vh] md:h-[50vh] flex justify-between">
                    <div className="xl:mt- xl:ml-20 mt-10  ">
                         <Image src={IMGtomadas}></Image>
                    </div>

                    <div className=" text-left md:text-right md:pr-14 xl:pr-16 md:pt-12 xl:pt-10">
                        <div className="text-primary-orange pt-20 pr-1 font-black md:text-6xl ">
                            <p> Interruptores</p>
                            <p className=""> e tomadas</p>
                        </div>
                         <div  className="text-gray text-sm md:text-2xl mr-3 mt-3">
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
                <div className="bg-notsowhite h-[60vh] flex justify-between">
                    <div className="md:ml-16 md:mt-10">
                        <p className="text-primary-orange font-black text-2xl md:text-6xl pt-12 text-left pl-3">Iluminação</p>
                        <div className="text-gray flex text-left text-sm md:text-4xl pl-3 gap-5  pt-2 md:pt-10 md:gap-10">
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
                    <div className="md:mr-32 flex scale-y-75 md:scale-y-100"><Image src={IMGLampadas} className=""></Image></div>
                </div>
            {/* final da tela de iluminação */}

            {/* incio da tela de condutores */}
                <div className="bg-primary-orange h-[35vh] md:h-[55vh] flex items-end md:block ">
                <div className="hidden" ><Botao></Botao></div>

                <div className="flex justify-between">
                    <div className="flex items-end">
                    <Image src={IMGCondutores} className="h-[] w-[]"></Image>
                    </div>

                    <div className="xl:pr-16 pb-10">
                        <div className="text-white text-2xl font-black text-left pr-5  md:text-6xl md:mt-20 text-right">
                            <div>
                                <p>Condutores</p>
                                <p>Elétricos</p>
                            </div>
                            <div className="text-gray text-sm font-medium text-left md:text-2xl text-right xl:text-3xl xl:mt-5">
                                <p>Com as <span className="font-bold"> marcas preferidas </span>  </p>
                                <p>pelos profissionais da área</p>
                                <div className="bg-gray w-8 h-0.5 rounded-full mt-1 ml-32 md:w-16 md:h-1.5 md:ml-96 md:mt-1"></div>
                            </div>
                        </div>      
                 </div>
                 </div>
                 </div>
            {/* final da tela de condutores */}
        
            {/* começo da tela industrial */}
                <div className="bg-white h-[42vh] md:h-[50vh] flex justify-between">
                    
                    <div className="text-left pt-14 xl:pt-20 ml-3 xl:ml-16">
                    <h1 className="text-2xl md:text-6xl font-black text-primary-orange">Industrial</h1>
                        <div className="text-gray text-sm mt-3 md:mt-10 md:text-4xl font-normal md:flex md:gap-20">
                        <div className=" flex gap-6">
                            <div className="flex flex-col gap-6">
                                <div>
                                    <p>Painéis de comando</p>
                                    <div className="bg-primary-orange w-10 h-0.5 rounded-full md:w-20 md:h-1"></div>
                                </div>
                                <div>
                                    <p className="" >Acionamentos</p>
                                    <div className="bg-primary-orange w-10 h-0.5 rounded-full md:w-20 md:h-1"></div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-6">
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

                    <div className="mt-10 md:mt-0  ">
                        <Image className="" src={IMGestrutura}></Image>
                    </div>
                </div>

            {/* final da tela industrial*/}

             {/* início da tela do video] */}

            <div className="bg-primary-orange h-80 flex pb-5 md:h-[50vh] justify-center md:justify-between pt-10 lg:pt-10">
                <div className="font-bold text-gray  xl:mt-16 lg:text-4xl lg:ml-16">
                    <div className="mt-10 ">Desde 2019 <span className="font-semibold">atendendo</span><p>Dourados-MS e região!</p> </div>
                    <div className="border-2 md:border-4  mx-8 mt-2 rounded-md text-2xl md:mt-8 md:h-16 md:rounded-3xl"><p className="md:mt-3 md:font-black md:text-4xl">+3.000</p></div>
                    <p className="font-semibold md:mt-5">Clientes cadastrados</p>
                </div>
                <div className="mt-10 lg:mr-40">
                <p className="text-white hidden lg:block">Confira o depoimento dos nossos clientes e parceiros!</p>
                <iframe  className="hidden lg:block " width="560" height="315" src="https://www.youtube.com/embed/0tOXxuLcaog?si=8fax3OgsGMsYPYbj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe  className="px-3 w-32 md:w-auto xl:w-auto md:hidden"src="https://www.youtube.com/embed/_EgU_7rzkEo?si=42zhpNmclXlGxeyM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>

             {/* final da tela do vídeo */}

             {/* início da tela de comentários */}
            <div className="bg-[url('/imgs/background7.png')] bg-cover bg-no-repeat h-full lg:h-[70vh] bg-right-bottom pb-10  lg:flex justify-between" >
              
                 <div className=" lg:mt-36 xl:mt-26 lg:ml-10 xl:ml-7 pt-10">
                    <div className=""> 
                        <h1 className="text-gray text-xl font-black lg:text-5xl lg:text-left">Avaliações da Girolux</h1>
                        <div className="flex justify-left mt-3">
                            <p className="font-semibold text-gray text-3xl pt-1 pr-2">4,9</p>
                            <Image src={IconeEstrela} className="h-10 w-10"></Image>
                            <Image src={IconeEstrela} className="h-10 w-10"></Image>
                            <Image src={IconeEstrela} className="h-10 w-10"></Image>
                            <Image src={IconeEstrela} className="h-10 w-10"></Image>
                            <Image src={IconeEstrela} className="h-10 w-10"></Image>
                        </div>
                    </div>
                   
                    <div className="hidden lg:flex items-center mt-20">
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
                    <div className="pb-6">
                        <div className="md:flex justify-center">
                            <div className="bg-dark-orange h-16 w-16 rounded-full relative -bottom-20 left-4 md:left-16 md:mt-14"><p className="text-white pt-3.5 font-extrabold text-3xl">D</p></div>
                            <div className="bg-gray h-24 mx-10 rounded-xl text-white xl:w-[80vh] md:h-[15vh] lg:w-[55vh] md:mt-20 md:mr-20">
                                <h1 className="pt-2 md:text-xl md:font-bold">Daniel Manica</h1>
                                <div className="text-xsm  text-left pl-12 md:mt-4 md:text-lg" ><p>Tudo do gênero elétrico, melhor preço, garantia, ótimo atendimento e o melhor café da cidade</p></div>
                            </div>
                        </div>
                        <div className="md:flex justify-center">
                            <div className="bg-dark-orange h-16 w-16 rounded-full relative -bottom-20 left-4 md:left-16 md:mt-14"><p className="text-white pt-3.5 font-extrabold text-3xl">S</p></div>
                            <div className="bg-gray h-36 mx-10 rounded-xl text-white xl:w-[80vh] lg:w-[55vh] lg:h-[26vh] md:mt-20 md:mr-20">
                                <div className="md:py-5">
                                    <h1 className="pt-2 md:text-xl md:font-bold">Simone Lima</h1>
                                    <div className="text-xsm text-left pl-12 md:mt-4 md:text-lg" ><p>Excelente estabelecimento! Possui um ótimo atendimento, todos os </p>
                                        <p>funcionários são muito educados. Te tratam super bem tanto quando</p>
                                        <p>você vai comprar ou quando precisar trocar algo. Possui preços justos.</p>
                                        <p>Recomendo!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:hidden">
                        <div className="flex justify-center mt-2">
                            <Image className="md:scale-150" src={IconeGoogle}></Image>
                        </div>
                        <div className="md:mt-10 text-xsm md:text-lg text-gray">
                            <p className=" font-bold">Todas as avaliações são oficiais do Google.</p>
                            <p className="">Confira mais 90 comentários na página do Google, no termo de pesquisa:</p>
                            <p className="">Girolux Dourados.</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* final da tela de comentários */}
            
            <div className="bg-primary-orange md:pt-5 xl:pt-10">
                <div className="md:hidden"><Botao></Botao></div>
                <div className=" md:h-[32vh] flex lg:justify-between justify-center">
                    <div className=" xl:pt-32 md:text-left md:mt-5 lg:pl-16">
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

                <div className="pt-10 pb-5 flex justify-center md:mt-14 xl:mt-40">
                    <Image src={IconeEmpresas} className="md:hidden"></Image> {/* ícones Novos */}
                    <Image src={LogosDesktop} className="hidden md:block"></Image>

                </div>
            </div>
             
            <BotaoVoador></BotaoVoador>
        </div>
    )
}



