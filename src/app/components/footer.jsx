import Image from "next/image"
import iconezap from '../assets/Icone do Wpp.png'
import iconefb from '../assets/facebook.png'
import iconeinstagram from '../assets/Instagram.png'
import Logogirolux from '../assets/girolux.PNG'

export default function Footer(){
   return(
    <div className="bg-gray pt-3 px-4">
     
     <div className="lg:flex gap-32">
            <div>
               <h1 className="text-primary-orange text-lg font-bold pt-3">Girolux Materiais Elétricos</h1>
               <p className="text-white">Av. Weimar Gonçalves Torres, 2692 - Centro,Dourados - MS, 79800-024 </p>
               <p className="text-white"></p>
            </div>
            <div>
               <h1 className="text-primary-orange text-lg font-bold pt-3">Contato</h1>
               <div className=" flex pl-1">
                  <Image src={iconezap}></Image>
                  <p className="text-white pl-2">(67) 3038-6433</p>
               </div>
            </div>
            <div>
               <div>
                  <h1 className="text-primary-orange text-lg font-bold pt-3" >Nossas Redes Sociais:</h1>
                  <div className="flex pl-1 gap-2">
                     <Image src={iconefb}></Image>
                     <Image src={iconeinstagram}></Image>
                     <p className="text-white">@giroluxdourados</p>
                  </div>
               </div>
            </div>
      </div>

      <div>
         <div className="flex justify-center py-5">
            <Image src={Logogirolux} height={80}></Image>
         </div>
            <p className="text-white text-xsm text-center">
               ©2023 Girolux. Todos os direitos reservados.
               Girolux Materiais Eletricos LTDA. CNPJ 32.316.461/0001-64
            </p>
      </div>
    </div>
   )
}