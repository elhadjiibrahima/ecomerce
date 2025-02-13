import Image from "next/image"
import Link from "next/link"
import type { Product } from "../lib/types"

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link
          href={`/product/${product.id}`}
          key={product.id}
          className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
        >
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={500}
              height={500}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <h2 className="mt-4 text-lg font-semibold text-gray-700">{product.name}</h2>
          <p className="mt-1 text-sm text-gray-500">{product.category}</p>
          <p className="mt-1 text-lg font-medium text-gray-900">{product.price.toFixed(2)} €</p>
        </Link>
      ))}
    </div>
  )
}

