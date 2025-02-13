import type { Product } from "./types"

export async function getProducts(): Promise<Product[]> {
  return [
    {
      id: "1",
      name: "iPhone 13 Pro",
      description: "Le dernier smartphone Apple avec un appareil photo pro et un écran Super Retina XDR.",
      price: 999.99,
      image:
        "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Smartphones",
    },
    {
      id: "2",
      name: "Samsung Galaxy S21",
      description: "Un smartphone Android puissant avec un écran dynamique AMOLED et un appareil photo de 64MP.",
      price: 799.99,
      image:
        "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Smartphones",
    },
    {
      id: "3",
      name: 'MacBook Pro 16"',
      description: "Ordinateur portable Apple avec puce M1 Pro, idéal pour les professionnels et les créatifs.",
      price: 2399.99,
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Ordinateurs portables",
    },
    {
      id: "4",
      name: "Dell XPS 15",
      description: "Ordinateur portable Windows haut de gamme avec écran InfinityEdge et processeur Intel Core i7.",
      price: 1799.99,
      image:
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Ordinateurs portables",
    },
    {
      id: "5",
      name: "iPad Air",
      description: "Tablette polyvalente avec puce A14 Bionic et compatibilité Apple Pencil.",
      price: 599.99,
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Tablettes",
    },
    {
      id: "6",
      name: "Sony WH-1000XM4",
      description: "Casque sans fil avec réduction de bruit leader de l'industrie et son de haute qualité.",
      price: 349.99,
      image:
        "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Audio",
    },
    {
      id: "7",
      name: "Canon EOS R5",
      description: "Appareil photo mirrorless plein format avec capacité vidéo 8K et stabilisation d'image.",
      price: 3899.99,
      image:
        "https://images.unsplash.com/photo-1621985499238-698dfd45b017?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Appareils photo",
    },
    {
      id: "8",
      name: "Nintendo Switch",
      description: "Console de jeu hybride pour jouer à la maison ou en déplacement.",
      price: 299.99,
      image:
        "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Jeux vidéo",
    },
    {
      id: "9",
      name: "Bose QuietComfort Earbuds",
      description: "Écouteurs sans fil avec réduction de bruit et son exceptionnel.",
      price: 279.99,
      image:
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Audio",
    },
    {
      id: "10",
      name: "DJI Mavic Air 2",
      description: "Drone compact avec caméra 4K et temps de vol prolongé.",
      price: 799.99,
      image:
        "https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Drones",
    },
    {
      id: "11",
      name: "Fitbit Versa 3",
      description: "Montre connectée avec GPS intégré et suivi avancé de la santé.",
      price: 229.99,
      image:
        "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Wearables",
    },
    {
      id: "12",
      name: 'LG OLED C1 55"',
      description: "Téléviseur OLED 4K avec des noirs parfaits et un taux de rafraîchissement de 120Hz.",
      price: 1499.99,
      image:
        "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "TV",
    },
    {
      id: "13",
      name: "Sonos Arc",
      description: "Barre de son premium avec Dolby Atmos pour une expérience cinéma immersive.",
      price: 799.99,
      image:
        "https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Audio",
    },
    {
      id: "14",
      name: "Logitech MX Master 3",
      description: "Souris sans fil ergonomique avec défilement ultra-rapide et personnalisation avancée.",
      price: 99.99,
      image:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Accessoires",
    },
    {
      id: "15",
      name: "Philips Hue Starter Kit",
      description: "Kit d'éclairage intelligent avec ampoules LED multicolores et pont de connexion.",
      price: 199.99,
      image:
        "https://images.unsplash.com/photo-1557005762-8ac68b75bbe4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Maison intelligente",
    },
  ]
}

