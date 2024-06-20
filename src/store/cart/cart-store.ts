import { CartProduct } from "@/interfaces";
import { create } from "zustand";


interface State {
    cart: CartProduct[];

    addProductCart: (product: CartProduct) => void;
    //updateQuantityCart
    //removeProductCart
}


export const useCartStore = create<State>()(

    (set, get) => ({

        cart: [],


        addProductCart: (product: CartProduct) => {
            const { cart } = get()
            //revisar si item existe en el cart
            const productInCart = cart.some(
                (item) => (item.id === product.id && item.size === product.size)
            );

            //insertar
            if (productInCart) {
                set({ cart: [...cart, product] })
                return
            }

            //Actualizar cantidad
            const updatedCart = cart.map((item) => {
                if (item.id === product.id && item.size === product.size) {
                    return { ...item, quantity: item.quantity + product.quantity }
                }
                return item
            });

            set({ cart: updatedCart });
        }

    })
)