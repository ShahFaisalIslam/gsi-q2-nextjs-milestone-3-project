import Image from "next/image";

export default function ProductDetail({params}:{params:{id:number}}) {
    const id = params.id;
    console.log(id);
    return (
        <div className="flex flex-col items-center gap-[2.3125rem] px-4 py-[2.3125rem]">
            <Image src="/product/iphone_14_pro_gold.png" width={263.59} height={329.24} alt="iphone_14_pro_gold"/>
            <div className="flex flex-col gap-6">
                <h2 className="text-[40px] leading-none font-bold">Apple iPhone 14 Pro 512GB Gold (MQ233)</h2>
                <p className="text-[32px] leading-[48px] tracking-[3%] font-medium">$1437</p>
                <p className="text-sm leading-6 tracking-[3%] text-[#6c6C6C] h-[7.5rem] overflow-hidden">Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras</p>
                <button className="bg-black text-white w-full py-4 text-center text-base rounded-md">Add to Cart</button>
            </div>
        </div>
    )
}