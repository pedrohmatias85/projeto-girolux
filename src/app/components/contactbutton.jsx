import Link from "next/link"
import Image from "next/image"
import WhatsappIcon from '../assets/whatsapp-icon.svg'


export default function ContactButton () {
    return (
        <form className="relative -top-8">
            <Link href={'https://www.instagram.com/giroluxdourados/'}>
                <button className="inline-flex font-bold bg-gray text-white w-72 h-16 text-center items-center justify-center px-5 py-5 rounded-full">
                    <Image src={WhatsappIcon} alt={'icone whatsapp'} className="mr-2"></Image>
                    Entrar em contato
                </button>
            </Link>
        </form>
    )
}