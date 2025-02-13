import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">À propos de TechTrove</h3>
            <p>Votre destination de confiance pour l'électronique de pointe.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-blue-600 hover:underline">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-600 hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-blue-600 hover:underline">
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-blue-600 hover:underline">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Facebook
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Twitter
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600">© 2024 TechTrove. Tous droits réservés.</div>
      </div>
    </footer>
  )
}

