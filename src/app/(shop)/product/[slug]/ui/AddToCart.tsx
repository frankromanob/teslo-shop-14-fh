'use client'
import { SizeSelector, QuantitySelector } from '@/components'
import { CartProduct, Product, Size } from '@/interfaces'
import { useCartStore } from '@/store';
import React, { useState } from 'react'


interface Props {
    product: Product;
}

export const AddToCart = ({ product }: Props) => {

    const addProductCart = useCartStore(state => state.addProductCart)

    const [size, setSize] = useState<Size | undefined>()
    const [quantity, setQuantity] = useState<number>(1)
    const [posted, setPosted] = useState(false)



    const addToCart = () => {
        setPosted(true)
        if (!size) {
            return
        }

        const cartProduct: CartProduct = {
            id: product.id,
            slug: product.slug,
            title: product.slug,
            price: product.price,
            quantity,
            size,
            image: product.images[0]
        }
        addProductCart(cartProduct)
        setPosted(false)
        setQuantity(1)
        setSize(undefined)

    }

    return (
        <>
            {posted && !size && (
                <span className='mt-2  text-red-500 font-bold fade-in'>
                    Por favor seleccione la talla*
                </span>

            )}

            <SizeSelector
                selectedSize={size}
                availableSizes={product.sizes}
                onSizeSelected={setSize}
            />

            <QuantitySelector
                inStock={product.inStock}
                cantidad={quantity}
                onQuantityChange={setQuantity}
            />

            <button
                onClick={addToCart}
                className="btn-primary my-5">
                Agregar al carrito
            </button>
        </>
    )
}
