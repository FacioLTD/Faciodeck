import Image from "next/image";

import Background3D from "@/components/Background3D";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-white relative">
      <Background3D />

      <div className="z-10 text-center space-y-8 backdrop-blur-sm bg-black/30 p-12 rounded-2xl border border-white/10">
        <h1 className="text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Faciodeck
        </h1>
        <p className="text-xl text-gray-300 max-w-lg mx-auto">
          The Frequency Architect
        </p>
      </div>
    </main>
  );
}
