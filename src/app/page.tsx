import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Banner */}
      <div className="w-full flex flex-col items-center gap-12 pt-[5.5rem] px-4 bg-[#211c24] text-white">
        {/* Banner Content */}
        <div className="flex flex-col items-center gap-8 w-full h-[21.5rem]">
          {/* Banner Text */}
          <div className="flex flex-col text-center gap-4">
            <p className="font-semibold text-[25px] leading-8 text-white/40">Pro.Beyond.</p>
            <p className="text-7xl tracking-[-0.01em] font-thin">IPhone 14
              <span className="font-semibold"> Pro</span>
            </p>
            <p className="text-[19px] font-medium leading-6 text-[#909090]">Created to change everything for the better. For everyone</p>
          </div>
          {/* Banner Button */}
          <Link href={"/product"}>
            <button className="border border-white rounded-md px-14 py-4 text-base">Shop Now</button>
          </Link>
        </div>
        {/* Banner Image */}
        <Image src="/banner/iphone.png" alt="iphone" width={686} height={1608}
          className="w-full h-[289px] object-cover object-top" />
      </div>
      {/* Other Banners */}
      <div className="flex flex-col items-center gap-6 px-10 py-4 text-black bg-[#ededed]">
        <Image src="/banner/airpods.png" alt="airpods" width={192} height={200} />
        <div className="flex flex-col text-center gap-2">
          <p className="text-[34px] leading-10 font-light">Apple AirPods <span className="font-medium">Max</span></p>
          <p className="text-base text-[#909090]">Computational audio. Listen, it&apos;s powerful</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 px-10 py-4 text-white bg-[#353535]">
        <Image src="/banner/vision.png" alt="vision" width={325.87} height={192.44} />
        <div className="flex flex-col text-center gap-2">
          <p className="text-[34px] leading-10 font-light">Apple Vision <span className="font-bold">Pro</span></p>
          <p className="text-base text-[#909090]">An immersive way to experience entertainment</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 px-10 py-4 text-black bg-white">
        <Image src="/banner/ps5.png" alt="ps5" width={200} height={200} />
        <div className="flex flex-col text-center gap-2">
          <p className="text-[34px] leading-10 font-light">Playstation <span className="font-medium">5</span></p>
          <p className="text-base text-[#909090]">Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 px-10 py-4 text-black bg-[#ededed]">
        <Image src="/banner/macbook.png" alt="macbook" width={330.48} height={200} />
        <div className="flex flex-col w-full text-center gap-4">
          <p className="text-[34px] leading-10 font-light"><span className="font-medium">Macbook</span> Air</p>
          <p className="text-base text-[#909090]">The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
          <Link href={"/product"}>
            <button className="text-center py-4 border border-black rounded-md">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
