'use client'
import { titleFont } from "@/config/font"
import { useUIStore } from "@/store";
import Link from "next/link"
import { IoCartOutline, IoSearchCircleOutline } from "react-icons/io5"


export const TopMenu = () => {

    const openSideMenu = useUIStore(state => state.openSideMenu);

    return (
        <nav className="flex px-5 mt-2 justify-between items-center w-full">
            <div>
                <Link
                    href="/">
                    <span className={`${titleFont.className} antialiased font-bold`}>Teslo</span>
                    <span className={`${titleFont.className} antialiased `}> | Shop</span>
                </Link>
            </div>

            <div className="hidden sm:block">
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/gender/men">Hombres</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/gender/women">Mujeres</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/gender/kid">Niños</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/gender/unisex">Unisex</Link>
            </div>

            <div className="flex items-center">
                <Link href="/search">
                    <IoSearchCircleOutline className="w-5 h-5 mx-1" />
                </Link>
                <Link href="/cart">
                    <div className="relative">
                        <span className="absolute text-xs px-1 font-bold -top-2 -right-2 rounded-full bg-blue-400 text-white">3</span>
                        <IoCartOutline className="w-5 h-5" />
                    </div>
                </Link>
                <button
                    onClick={() => openSideMenu()}
                    className="m-1 p-2 rounded-md transition-all hover:bg-gray-100">
                    Menú
                </button>
            </div>
        </nav>
    )
}
