export const revalidate = 60
import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, Title } from "@/components";
import { ProductGrid } from "@/components";
import { redirect } from "next/navigation";

interface Props {
  searchParams: {
    page?: string;
    take?: string;
  }
}

export default async function Home({ searchParams }: Props) {

  const page = searchParams.page ? parseInt(searchParams.page) : 1
  const take = searchParams.take ? parseInt(searchParams.take) : 12

  const { products, currentPage, totalPages } = await getPaginatedProductsWithImages({ page, take })

  if (products.length === 0) {
    redirect('/')
  }

  return (
    <div>

      <Title title="Tienda"
        subtitle="Todos los productos"
      />

      <ProductGrid products={products} />

      <Pagination totalPages={totalPages} />
    </div>

  );
}
