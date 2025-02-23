import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-950 via-indigo-900 to-purple-950 text-white text-center">
      {/* App Title */}
      <h1 className="text-6xl text-gray-300 font-extrabold tracking-wide mb-4">
        FluentGo
      </h1>

      {/* Slogan */}
      <p className="text-xl font-light mb-8">Get fluent on the go!</p>

      {/* Language Selection */}
      <div>
        <Link href="/langselect">
          <button className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-700 to-blue-600 rounded-full shadow-md hover:shadow-xl hover:scale-105 hover:bg-opacity-80 transition-all duration-300 ease-in-out">
            🚀 Start Learning
          </button>
        </Link>
      </div>
    </div>
  );
}
