import Image from "next/image";

export default function CartItem() {
    return (
        <div className="flex items-center h-[9.5rem] gap-[0.9375rem]">
            <Image src="/product/iphone_14_pro_gold.png" alt="iphone_14_pro_gold" width={90} height={90} />
            <div className="flex flex-col gap-2">
                <p className="text-base font-medium">Apple iPhone 14 Pro 512GB Gold (MQ233)</p>
                <p className="text-sm leading-6">#25139526913984</p>
                <div className="flex items-center gap-6 ">
                    <div className="flex items-center gap-2">
                        <Image src="/icon/24/minus.png" alt="" width={24} height={24} />
                        <input type="text" className="border-[0.5px] border-[#d9d9d9] rounded-[4px] text-black font-medium text-base leading-none px-4 py-2 w-10" />
                        <Image src="/icon/24/plus.png" alt="" width={24} height={24} />
                    </div>
                    <p className="text-[20px] leading-8 font-medium tracking-[3%]">$1437</p>
                    <Image src="/icon/24/cross.png" alt="" width={24} height={24} />
                </div>
            </div>
        </div>
    )
}