import Image from "next/image"
import BgImage from '../assets/background.png'
import WhatsappIcon from '../assets/whatsapp-icon.svg'
import Link from "next/link"


export default function Header () {
   return (
    <div className="text-center justify-center relative">
           <div>
               <Image className='inline' src={BgImage} alt={'background'}></Image>
               <form className="absolute inset-x-0 -bottom-6">
                   <Link href={'https://www.instagram.com/giroluxdourados/'}>
                       <button className="inline-flex font-bold bg-gray text-white w-72 h-16 text-center items-center justify-center px-5 py-5 rounded-full">
                           <Image src={WhatsappIcon} alt={'icone whatsapp'} className="mr-2"></Image>
                           Entrar em contato
                       </button>
                   </Link>
               </form>           
           </div>
    </div>
   )
};