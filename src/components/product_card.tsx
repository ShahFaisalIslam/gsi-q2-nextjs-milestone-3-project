import Image from "next/image";

export default function ProductCard() {
    return (
        <div className="flex flex-col items-center gap-2 px-3 py-6">
            {/* Hearty Moment */}
            <div className="w-full flex items-center justify-end">
                <Image src="/icon/32/heart.png" width={32} height={32} alt="" />
            </div>
            <Image src="/product/iphone_14_pro_gold.png" width={104} height={104} alt="" />
            <div className="flex flex-col items-center text-center gap-4 w-full">
                <p className="overflow-hidden overflow-ellipsis text-base font-medium w-full h-12">
                    Apple iPhone 14 Pro 512GB Gold (MQ233)
                </p>
                <p className="font-semibold text-2xl leading-none">
                    $1437
                </p>
                <button className="px-10 py-3 bg-black text-white rounded-lg text-sm leading-6 font-medium">Buy Now</button>
            </div>
        </div>
    )
}