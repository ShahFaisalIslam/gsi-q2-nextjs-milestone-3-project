"use client";
import Image from "next/image"
import style from "./header.module.css"
export default function Header() {
    function toggleVisibility() {
        const hamburgerHeader : HTMLDivElement = document.getElementById('hamburger-header') as HTMLDivElement;
        hamburgerHeader.className = hamburgerHeader.className == style["header-default"] ? style["header-visible"] : style["header-default"];
    }
    return (
        <>
            {/* Main Header */}
            <div className="px-4 py-6 flex items-center w-full justify-between bg-white text-black">
                <Image src="/logo/black.png" alt="cyber" width={96} height={32} />
                <button onClick={toggleVisibility}><Image src="/icon/40/hamburger.png" alt="" width={40} height={40}/></button>
            </div>
            <div id="hamburger-header" className={style["header-default"]}>
                <ul>
                    <li className={style["header-item-active"]}>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Blog</li>
                </ul>
            </div>
        </>
    )
}