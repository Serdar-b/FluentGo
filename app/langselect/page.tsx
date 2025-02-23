import BackButton from "@/components/BackButton";
import Link from "next/link";

export default function LangSelect() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-950 text-white text-center">
      <div className="absolute top-5 left-5">
        <BackButton />
      </div>
      {/* Page Title */}
      <h1 className="text-5xl text-gray-300 font-extrabold tracking-wide mb-6">
        Choose Your Language
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-gray-400 mb-10">
        Start your journey by selecting a language to learn.
      </p>

      {/* Language Options */}
      <div className="grid grid-cols-2 gap-6">
        <Link href="/stages">
          <button className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-700 to-indigo-600 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
            🇹🇷 Turkish
          </button>
        </Link>

        <Link href="/stages">
          <button className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-700 to-indigo-600 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
            🇰🇷 Korean
          </button>
        </Link>

        <Link href="/stages">
          <button className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-green-700 to-teal-600 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
            🇪🇸 Spanish
          </button>
        </Link>

        <Link href="/stages">
          <button className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-red-700 to-orange-600 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
            🇫🇷 French
          </button>
        </Link>
      </div>
    </div>
  );
}
