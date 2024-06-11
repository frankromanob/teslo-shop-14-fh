export const revalidate = 60

import { getPaginatedProductsWithImages } from "@/actions";
import { Title, ProductGrid, Pagination } from "@/components";
import { Category } from "@/interfaces";
import { Gender } from "@prisma/client";
import { notFound, redirect } from "next/navigation";



interface Props {
  params:{
    gender:Gender
  },
  searchParams: {
    page?: string;
    take?: string;
  }
}

const categories: Record<Category, string> = {
  'men': 'hombres',
  'women': 'mujeres',
  'kid': 'niños',
  'unisex': 'todos'
}

const subTitulo: Record<Category, string> = {
  'men': 'Productos para ellos',
  'women': 'Productos para ellas',
  'kid': 'Productos para niños',
  'unisex': 'Productos para todos'
}

//const products = initialData.products

export default async function CategoryPage({ searchParams, params }: Props) {

  const {gender} = params;

  //console.log(searchParams)

  if (!(gender)) {
    redirect('/')
  }

  if (!(gender in categories)) {
    notFound()
  }

  const page = searchParams.page ? parseInt(searchParams.page) : 1
  const take = searchParams.take ? parseInt(searchParams.take) : 12
  const { products, currentPage, totalPages } = await getPaginatedProductsWithImages({ gender, page, take })

  if (products.length === 0) {
    redirect('/')
  }



  // let filteredProducts = products;
  // if (id) {
  //   filteredProducts = products.filter((prod) => prod.gender === id)

  // }



  return (
    <div >
      <Title title={`Articulos para ${categories[gender]}`}
        subtitle={subTitulo[gender]}
      />

      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </div>
  );
}