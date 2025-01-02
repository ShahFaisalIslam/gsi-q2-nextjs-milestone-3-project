import Image from "next/image";

export default function Footer() {
    return (
        <div className="px-8 py-12 flex flex-col items-center gap-8 bg-[#181313]">
            <div className="flex flex-col items-center gap-8">
                {/* Logo and small desc */}
                <div className="flex flex-col items-center gap-4">
                    <Image src="/logo/white.png" width={96} height={32} alt="cyber"/>
                    <p className="text-center text-[13px] leading-6 text-[#cfcfcf]">We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
                </div>
                {/* Menus */}
                <div className="flex flex-col items-center text-center gap-8">
                    {/* Services */}
                    <ul className="text-sm leading-8 font-light text-[#cfcfcf]">
                        <li className="leading-none text-base font-semibold mb-2">Services</li>
                        <li>Bonus program</li>
                        <li>Gift cards</li>
                        <li>Credit and payment</li>
                        <li>Service contracts</li>
                        <li>Non-cash account</li>
                        <li>Payment</li>
                    </ul>
                    {/* Assistance to the buyer */}
                    <ul className="text-sm leading-8 font-light text-[#cfcfcf]">
                        <li className="leading-none text-base font-semibold mb-2">Assistance to the buyer</li>
                        <li>Find an order</li>
                        <li>Terms of delivery</li>
                        <li>Exchange and return of goods</li>
                        <li>Guarantee</li>
                        <li>Frequently Asked Questions</li>
                        <li>Terms of use of the site</li>
                    </ul>
                </div>
            </div>
            {/* Social media links */}
            <div className="w-full max-w-[10.8125rem]">
                <ul className="flex justify-between items-center">
                    <li><Image src="/icon/24/twitter.png" alt="twitter" width={24} height={24}/></li>
                    <li><Image src="/icon/24/fb.png" alt="fb" width={24} height={24}/></li>
                    <li><Image src="/icon/24/tiktok.png" alt="tiktok" width={24} height={24}/></li>
                    <li><Image src="/icon/24/insta.png" alt="insta" width={24} height={24}/></li>
                </ul>
            </div>
        </div>
    )
}