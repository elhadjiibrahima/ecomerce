export interface User {
  id: string
  email: string
  password: string // Note: Dans une vraie application, ne stockez jamais les mots de passe en clair
  role: "user" | "admin"
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
}

export interface Order {
  id: string
  userId: string
  products: { productId: string; quantity: number }[]
  totalAmount: number
  status: "pending" | "processing" | "shipped" | "delivered"
  createdAt: Date
}

