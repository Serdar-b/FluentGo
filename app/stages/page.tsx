import Link from 'next/link';

export default function Stages() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold mb-8">Choose a Stage</h1>
      <div className="flex space-x-4">
        <Link href="/alphabet">
          <button className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600">
            Stage 1: Alphabet
          </button>
        </Link>
        <Link href="/flashcards">
          <button className="px-6 py-3 bg-purple-500 text-white rounded-md hover:bg-purple-600">
            Stage 2: Flashcards
          </button>
        </Link>
      </div>
    </div>
  );
}
