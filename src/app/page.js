'use client';
import Skeleton from "./components/Skeleton";

export default function Home() {
  return (
    <main className="pt-24 px-6 max-w-6xl mx-auto text-center">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">Nous concevons des marques audacieuses</h1>
      <p className="text-gray-600 mb-10">Du branding à l’expérience utilisateur, notre équipe vous accompagne.</p>

      <div className="grid md:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} />
        ))}
      </div>
    </main>
  );
}
