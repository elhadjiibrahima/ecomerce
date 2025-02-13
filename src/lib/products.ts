import type { Product } from "./types"

// Cette fonction simule la récupération des produits depuis une API ou une base de données
export async function getProducts(): Promise<Product[]> {
  // Dans une vraie application, vous feriez un appel API ici
  return [
    {
      id: "1",
      name: "Smartphone XYZ",
      description: "Le dernier smartphone avec des fonctionnalités avancées.",
      price: 699.99,
      image: "/images/smartphone.jpg",
      category: "Smartphones",
    },
    {
      id: "2",
      name: "Laptop ABC",
      description: "Un ordinateur portable puissant pour tous vos besoins.",
      price: 1299.99,
      image: "/images/laptop.jpg",
      category: "Ordinateurs",
    },
    // Ajoutez d'autres produits ici
  ]
}

