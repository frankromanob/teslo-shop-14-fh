export const revalidate = 600
import { getProductBySlug } from "@/actions";
import { ProductMobileSlideshow, ProductSlideshow, QuantitySelector, SizeSelector, StockLabel } from "@/components";
import { inter, titleFont } from "@/config/font";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { AddToCart } from "./ui/AddToCart";




interface Props {
  params: {
    slug: string
  }
}


export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug

  // fetch data
  const product = await getProductBySlug(slug)

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  return {
    title: product?.title,
    description: product?.description,
    openGraph: {
      title: product?.title,
      description: product?.description,
      images: [`/products/${product?.images[1]}`],
    },
  }
}


export default async function ProductBySlugPage({ params }: Props) {

  const { slug } = params
  //const product = initialData.products.find(product => product.slug === slug);
  const product = await getProductBySlug(slug)

  if (!product) {
    notFound();
  }

  return (
    <div className=" mt-5 mb-20 grid md:grid-cols-3 gap-3">
      <div className="col-span-1 md:col-span-2">

        {/* Mobile */}

        <ProductMobileSlideshow productImages={product.images} title={product.title} className="block md:hidden" />

        {/* Desktop */}
        <ProductSlideshow productImages={product.images} title={product.title} className="hidden md:block" />



      </div>

      <div className="col-span-1 px-5">

        <StockLabel slug={product.slug} />

        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>

        <p className="text-lg mb-5">${product.price}</p>
{/*  */}
        <AddToCart product={product}/>
{/*  */}
        <h3 className="font-bold text-sm">Descripción</h3>
        <p className={`${inter.className} antialiased font-light mt-3`}>
          {product.description}
        </p>
      </div>


    </div>
  );
}