export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
}

export interface User {
  id: string
  name: string
  email: string
  role: "user" | "admin"
}

export interface Order {
  id: string
  userId: string
  products: { productId: string; quantity: number }[]
  totalAmount: number
  status: "pending" | "processing" | "shipped" | "delivered"
  createdAt: Date
}

