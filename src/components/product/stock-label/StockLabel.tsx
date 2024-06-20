'use client'

import { getStockBySlug } from "@/actions/product/get-stock-by-slug"
import { titleFont } from "@/config/font"
import { useEffect, useState } from "react"

interface Props {
    slug: string
}

export const StockLabel = ({ slug }: Props) => {



    const [stock, setStock] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getStock()
    }, [])


    const getStock = async () => {

        let inStock = 0

        const stock = await getStockBySlug(slug)

        // console.log(inStock)
        setStock(stock)
        setIsLoading(false)

    }


    return (
        <>
            {isLoading ?
                (

                    <h1 className={`${titleFont.className} antialiased font-bold text-lg bg-gray-300 animate-pulse`}>
                        &nbsp;
                    </h1>
                )

                :

                (

                    <h1 className={`${titleFont.className} antialiased font-bold text-lg`}>
                        Stock: {stock}
                    </h1>
                )
            }

        </>
    )
}
