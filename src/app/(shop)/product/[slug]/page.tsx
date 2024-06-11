import { ProductMobileSlideshow, ProductSlideshow, QuantitySelector, SizeSelector } from "@/components";
import { inter, titleFont } from "@/config/font";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import { notFound } from "next/navigation";



interface Props {
  params: {
    slug: string
  }
}


export default function ProductPage({ params }: Props) {

  const { slug } = params
  const product = initialData.products.find(product => product.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className=" mt-5 mb-20 grid md:grid-cols-3 gap-3">
      <div className="col-span-1 md:col-span-2">

          {/* Mobile */}

          <ProductMobileSlideshow productImages={product.images} title={product.title} className="block md:hidden"/>

          {/* Desktop */}
          <ProductSlideshow productImages={product.images} title={product.title} className="hidden md:block"/>



      </div>

      <div className="col-span-1 px-5">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>

        <p className="text-lg mb-5">${product.price}</p>

        <SizeSelector selectedSize={product.sizes[0]} availableSizes={product.sizes} />

        <QuantitySelector inStock={product.inStock} cantidad={3}/>

        <button className="btn-primary my-5">
          Agregar al carrito
        </button>
        <h3 className="font-bold text-sm">Descripción</h3>
        <p className={`${inter.className} antialiased font-light mt-3`}>
          {product.description}
        </p>
      </div>


    </div>
  );
}