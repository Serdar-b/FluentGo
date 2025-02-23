"use client";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center space-x-2 px-5 py-2 text-lg font-semibold text-white bg-gray-800 rounded-full shadow-md hover:bg-gray-700 transition-all duration-300 ease-in-out"
    >
      <span>Back</span>
    </button>
  );
}
