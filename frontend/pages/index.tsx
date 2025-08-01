import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
      <h1 className="text-4xl font-bold mb-6">CampusGPT</h1>
      <div className="flex flex-col space-y-4">
        <Link href="/dashboard" className="text-blue-600 underline">
          Go to Dashboard
        </Link>
        <Link href="/api/auth/signin" className="text-blue-600 underline">
          Login
        </Link>
      </div>
    </div>
  );
}