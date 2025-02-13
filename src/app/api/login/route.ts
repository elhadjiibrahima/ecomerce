import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const { email, password } = await request.json()

  // Ici, vous devriez vérifier les identifiants par rapport à votre base de données
  // Ceci est un exemple simplifié
  if (email === "user@example.com" && password === "password") {
    // Créer une session ou un token JWT ici
    return NextResponse.json({ message: "Connexion réussie" }, { status: 200 })
  } else {
    return NextResponse.json({ message: "Identifiants invalides" }, { status: 401 })
  }
}

