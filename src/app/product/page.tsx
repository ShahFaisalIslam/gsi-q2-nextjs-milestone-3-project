import ProductCard from "@/components/product_card";

export default function Product() {
    return(
        <div className="px-[0.96875rem] py-[2.8125rem] bg-white text-black">
            <div className="w-full grid grid-cols-2 gap-4">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
    )
}