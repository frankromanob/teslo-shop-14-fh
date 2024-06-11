import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";



const productsInCart = [
  initialData.products[0],
  initialData.products[10],
  initialData.products[20],
  initialData.products[30],
]


export default function CartPage() {

  //redirect('/empty')

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">

      <div className="flex flex-col w-[1000px]">
        <Title title={"Carrito"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span>Agregar mas artículos</span>
            <Link href={"/"} className="underline mb-5">
              Continuar comprando
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
                    <p>{prod.price}</p>
                    <QuantitySelector inStock={prod.inStock} cantidad={0} />
                    <button className="underline mt-3">
                      Remover
                    </button>
                  </div>
                </div>
              ))
            }
          </div>

          {/* Summary */}
          <div className="bg-white rounded-xl shadow-xl p-7 h-fit">
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
              <Link className="underline flex btn-primary justify-center"
                href={"/checkout/address"}
              >
                Checkout
              </Link>
            </div>

          </div>

        </div>

      </div>


    </div>
  );
}