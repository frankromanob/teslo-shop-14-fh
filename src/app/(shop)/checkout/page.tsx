import {  Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";



const productsInCart = [
  initialData.products[0],
  initialData.products[10],
  initialData.products[20],
  initialData.products[30],
]


export default function CheckoutPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">

      <div className="flex flex-col w-[1000px]">
        <Title title={"Verificar orden"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span>Ajustar articulos</span>
            <Link href={"/cart"} className="underline mb-5">
              Editar carrito
            </Link>


            {/* items */}
            {
              productsInCart.map(prod => (
                <div key={prod.slug} className="flex mb-5">
                  <Image
                    src={`/products/${prod.images[0]}`}
                    width={100}
                    height={100}
                    style={{
                      width: '100px',
                      height: '100px'
                    }}
                    alt={prod.title}
                    className="mr-5 rounded"
                  />
                  <div>
                    <p>{prod.title}</p>
                    <p>{prod.price} x3</p>
                    <p className="font-bold">Subtotal: ${prod.price * 3}</p>
                    {/* <QuantitySelector inStock={prod.inStock} cantidad={0} /> */}
                    {/* <button className="underline mt-3">
                      Remover
                    </button> */}
                  </div>
                </div>
              ))
            }
          </div>

          {/* Summary */}
          <div className="bg-white rounded-xl shadow-xl p-7">

            <h2 className="text-2xl mb-2 font-bold">Direccion de entrega</h2>
            <div className="mb-10">
              <p className="text-xl">Francisco Romano</p>
              <p>Av. Esa # 1</p>
              <p>Santo Domingo Este</p>
              <p>Republica Dominicana</p>
              <p>Código postal 12345</p>
            </div>

            {/* Divider */}
            <div className="w-full h-0.5 rounded bg-gray-200 mb-10"
            />

            <h2 className="text-2xl mb-2">Resumen de la orden</h2>
            <div className="grid grid-cols-2">
              <span>No. articulos</span>
              <span className="text-right"> 3</span>

              <span>Subtotal</span>
              <span className="text-right">$ 100</span>

              <span>Impuestos (15%)</span>
              <span className="text-right">$ 15</span>

              <span className="mt-5 text-2xl">Total</span>
              <span className="mt-5 text-2xl text-right">$ 115</span>


            </div>
            <div className="mt-5 mb-2 w-full">

              <p className="mb-5">
                {/* Disclaimer */}
                <span className="text-xs">
                  Al hacer clic en &quot;Colocar Orden&quot;, aceptas nuestros <a href="#" className="underline" >términos y condiciones</a> de uso
                  y <a href="#" className="underline">políticas de privacidad</a>
                </span>

              </p>


              <Link className="underline flex btn-primary justify-center"
                href={"/orders/123"}
              >
                Colocar Orden
              </Link>
            </div>

          </div>

        </div>

      </div>


    </div>
  );
}