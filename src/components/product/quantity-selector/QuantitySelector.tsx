'use client'
import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5"


interface Props {
    inStock: number;
    cantidad: number
}

export const QuantitySelector = ({ inStock, cantidad }: Props) => {

    const [count, setCount] = useState(cantidad)

    const onQuantityChange = (value: number) => {
        if ((count + value < 1) || (count + value > inStock)) return

        setCount(count + value)

    }

    return (
        <div className=" flex">
            {/* <h3 className="font-bold mb-4">Cantidad {inStock}</h3> */}
            <button onClick={() => onQuantityChange(-1)}>
                <IoRemoveCircleOutline size={30} />
            </button>
            <span className="w-20 h-7 mx-2 px-3 bg-gray-300 text-center  font-semibold rounded-sm">
                {count}
            </span>
            <button onClick={() => onQuantityChange(1)}>
                <IoAddCircleOutline size={30} />
            </button>
        </div>
    )
}
