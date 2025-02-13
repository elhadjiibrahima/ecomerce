import ProductList from "../components/ProductList"
import { getProducts } from "../lib/products"

export default async function CatalogPage() {
  const products = await getProducts()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Catalogue</h1>
      <ProductList products={products} />
    </div>
  )
}

