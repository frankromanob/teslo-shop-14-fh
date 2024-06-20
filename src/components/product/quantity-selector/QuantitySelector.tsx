'use client'
import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5"


interface Props {
    inStock: number;
    cantidad: number;
    onQuantityChange: (quantity: number) => void
}

export const QuantitySelector = ({ inStock, cantidad, onQuantityChange }: Props) => {

   // const [count, setCount] = useState(cantidad)

    const onQuantity = (value: number) => {
        if ((cantidad + value < 1) || (cantidad + value > inStock)) return
        onQuantityChange(cantidad + value)

    }

    return (
        <div className=" flex">
            {/* <h3 className="font-bold mb-4">Cantidad {inStock}</h3> */}
            <button onClick={() => onQuantity(-1)}>
                <IoRemoveCircleOutline size={30} />
            </button>
            <span className="w-20 h-7 mx-2 px-3 bg-gray-300 text-center  font-semibold rounded-sm">
                {cantidad}
            </span>
            <button onClick={() => onQuantity(1)}>
                <IoAddCircleOutline size={30} />
            </button>
        </div>
    )
}
