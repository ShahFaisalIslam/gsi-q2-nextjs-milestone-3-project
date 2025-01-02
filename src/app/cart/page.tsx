import CartItem from "@/components/cart_item";
import CartSummary from "@/components/cart_summary";

export default function Cart() {
    return(
        <div className="flex flex-col px-[1.0625rem] py-10 gap-10">
            <h1 className="text-2xl leading-none font-semibold">Shopping Cart</h1>
            <div className="flex flex-col w-full gap-40">
                <CartItem/>
                <hr className="border-[0.5px] text-[#a3a3a3]" />
                <CartItem/>
            </div>
            <CartSummary/>
        </div>
    )
}