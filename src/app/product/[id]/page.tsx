import { getProducts } from "../../lib/products"
import Image from "next/image"

export default async function ProductPage({ params }: { params: { id: string } }) {
  const products = await getProducts()
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    return <div>Produit non trouvé</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={500}
          height={500}
          className="rounded-lg"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl mb-4">{product.price.toFixed(2)} €</p>
          <p className="mb-4">{product.description}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  )
}

