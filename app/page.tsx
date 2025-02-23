import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-5xl font-bold mb-8">Select a Language</h1>
      <div>
        <Link href="/stages">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Turkish
          </button>
        </Link>
      </div>
    </div>
  );
}
