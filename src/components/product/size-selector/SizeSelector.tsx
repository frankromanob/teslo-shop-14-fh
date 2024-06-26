import type { Size } from "@/interfaces"
import clsx from "clsx";



interface Props {
    selectedSize?: Size;
    availableSizes: Size[];

    onSizeSelected: (size: Size) => void;
}

export const SizeSelector = ({ selectedSize, availableSizes, onSizeSelected }: Props) => {
    return (
        <div className="my-5">
            <h3 className="font-bold mb-4">Tallas disponibles</h3>
            <div className="flex">
                {
                    availableSizes.map(size => (
                        <button
                            key={size}
                            onClick={() => onSizeSelected(size)}
                            className={
                                clsx("hover:underline mx-2 text-lg",
                                    {
                                        "underline font-bold": size === selectedSize
                                    }
                                )}>
                            {size}
                        </button>
                    ))
                }

            </div>
        </div>
    )
}
