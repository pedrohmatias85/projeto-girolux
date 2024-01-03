import Link from "next/link"
import Image from "next/image"
import WhatsappIcon from '../assets/whatsapp-icon.png'
import WhatsIconMD from '../assets/Whats.png'


export default function ContactButton () {
    return (
        <form className="relative -top-10 xl:-top-56 2xl:-top-72 xl:pl-[40vh] xl:pl-[80vh] md:-top-36 lg:-top-40 ">
            <Link href={'https://wa.me/556730386433'}>
                <button className="inline-flex font-bold bg-gray md:bg-primary-orange text-white w-72 h-16 xl:w-96 xl:h-24 text-center items-center  px-5 py-5 rounded-full hover:scale-105">
                    <Image src={WhatsappIcon} alt={'icone whatsapp'} className="mr-2 md:hidden"></Image>
                    <Image src={WhatsIconMD} className="hidden md:block" height={58} width={58}></Image>
                    <p className="ml-3 xl:ml-7 xl:text-2xl">Entrar em contato</p>
                </button>
            </Link>
        </form>
    )
}