import Link from "next/link"
import { ShoppingCart, User, Package, Settings } from "lucide-react"

export default function Header() {
  // Dans une vraie application, vous vérifieriez ici si l'utilisateur est connecté et s'il est admin
  const isLoggedIn = true // À remplacer par une vérification réelle
  const isAdmin = true // À remplacer par une vérification réelle

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          TechTrove
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/catalog" className="text-gray-700 hover:text-blue-600">
            Catalogue
          </Link>
          <Link href="/cart" className="text-gray-700 hover:text-blue-600">
            <ShoppingCart className="inline-block w-6 h-6" />
          </Link>
          {isLoggedIn && (
            <>
              <Link href="/orders" className="text-gray-700 hover:text-blue-600">
                <Package className="inline-block w-6 h-6" />
              </Link>
              <Link href="/profile" className="text-gray-700 hover:text-blue-600">
                <User className="inline-block w-6 h-6" />
              </Link>
              {isAdmin && (
                <Link href="/admin" className="text-gray-700 hover:text-blue-600">
                  <Settings className="inline-block w-6 h-6" />
                </Link>
              )}
            </>
          )}
          {!isLoggedIn && (
            <>
              <Link href="/login" className="text-gray-700 hover:text-blue-600">
                Connexion
              </Link>
              <Link href="/register" className="text-gray-700 hover:text-blue-600">
                Inscription
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}

