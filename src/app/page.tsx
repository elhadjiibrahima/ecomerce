import Link from "next/link"
import ProductList from "./components/ProductList"
import { getProducts } from "./lib/products"

export default async function Home() {
  const products = await getProducts()

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">TechTrove</h1>
      <p className="text-xl mb-8 text-center">Votre destination pour l'électronique de pointe</p>
      <ProductList products={products.slice(0, 4)} /> {/* Afficher seulement 4 produits sur la page d'accueil */}
      <div className="mt-12 text-center">
        <Link href="/catalog" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Voir tout le catalogue
        </Link>
      </div>
    </main>
  )
}

