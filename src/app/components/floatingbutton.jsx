import Link from "next/link"
import Image from "next/image"
import WhatsappIcon from '../assets/Whats.png'

export default function FloatingButton () {
    return (
        <div class="fixed bottom-4 right-4">
        <Link href={'https://wa.me/556730386433'}>
                <button className="hover:scale-125">
                    <Image src={WhatsappIcon} alt={'icone whatsapp'} height={70} width={70} className=""></Image>
                </button>
            </Link>
    </div>
    )
}