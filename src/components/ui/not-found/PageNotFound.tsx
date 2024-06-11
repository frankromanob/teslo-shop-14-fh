import { titleFont } from "@/config/font"
import Image from "next/image"
import Link from "next/link"


export const PageNotFound = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">
            <div className="text-center px-5 mx-5">
                <h2 className={`${titleFont.className} text-gray-500 antialiased text-9xl `}>404</h2>
                <p>Lo sentimos mucho...</p>
                <Link className="font-bold hover:underline transition-all cursor-pointer" href="/" >Regresar</Link>
            </div>

            <div className="px-5 mx-5">
                <Image
                    src="/imgs/starman_750x750.png"
                    alt="Starman"
                    width={450}
                    height={450}
                    className="p-2 sm:p-0"
                />
            </div>

        </div>
    )
}
