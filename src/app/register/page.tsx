import RegisterForm from "../components/RegisterForm"

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Créez votre compte</h2>
        </div>
        <RegisterForm />
      </div>
    </div>
  )
}

