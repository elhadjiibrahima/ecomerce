import { getProducts } from "../lib/products"
import Link from "next/link"

export default async function AdminPage() {
  const products = await getProducts()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Panneau d'administration</h1>
      <h2 className="text-2xl font-semibold mb-4">Liste des produits</h2>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="border p-4 rounded-lg">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-bold mt-2">{product.price.toFixed(2)} €</p>
            <Link href={`/admin/product/${product.id}`} className="text-blue-600 hover:underline mt-2 inline-block">
              Modifier
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

