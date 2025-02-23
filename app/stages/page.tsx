import Link from "next/link";
import BackButton from "../../components/BackButton"; // Import BackButton

export default function Stages() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-950 text-white text-center">
      {/* Back Button */}
      <div className="absolute top-5 left-5">
        <BackButton />
      </div>

      {/* Page Title */}
      <h1 className="text-5xl text-gray-300 font-extrabold tracking-wide mb-6">
        Choose Your Learning Stage
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-gray-400 mb-10">
        Start with the basics and advance at your own pace.
      </p>

      {/* Stage Selection Buttons */}
      <div className="flex flex-col space-y-6">
        <Link href="/alphabet">
          <button className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-green-700 to-teal-600 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
            🔠 Stage 1: Learn the Alphabet
          </button>
        </Link>

        <Link href="/flashcards">
          <button className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-700 to-indigo-600 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
            🃏 Stage 2: Flashcards (1000 Words)
          </button>
        </Link>
      </div>
    </div>
  );
}
