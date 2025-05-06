import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-4xl font-bold">404</h1>
      <h2 className="text-xl mt-2">Restaurant Not Found</h2>
      <p className="text-gray-600 mt-4">We couldn't find the restaurant you're looking for.</p>
      <Link href="/" className="mt-6 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">
        Return to Home
      </Link>
    </div>
  )
}
