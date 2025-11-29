'use client';
import { IoGlobeOutline, IoStarOutline } from "react-icons/io5";
import { BiTargetLock } from "react-icons/bi";
import { GoZap } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="pt-24 px-6 max-w-6xl mx-auto text-center">
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden pt-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-40 left-10 w-72 h-72 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-40 right-10 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Transformez votre vision en réalité digitale
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Nous créons des expériences numériques exceptionnelles qui propulsent votre marque vers de nouveaux sommets
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition flex items-center justify-center gap-2">
              Commencer <FaArrowRight size={20} />
            </button>
            <button className="px-8 py-4 border border-gray-600 rounded-lg font-semibold hover:border-blue-400 hover:bg-blue-400/10 transition">
              En savoir plus
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Nos Services
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Solutions complètes pour digitaliser et transformer votre entreprise
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: IoGlobeOutline, title: 'Web Design', desc: 'Sites modernes et responsifs' },
              { icon: BiTargetLock, title: 'Stratégie Digital', desc: 'Croissance et visibilité' },
              { icon: GoZap, title: 'Développement', desc: 'Applications haute performance' },
              { icon: IoStarOutline, title: 'Brand Design', desc: 'Identité visuelle unique' }
            ].map((service, i) => (
              <div 
                key={i}
                className="p-6 rounded-xl border border-gray-800 hover:border-blue-500 bg-gray-900/50 hover:bg-gray-900 transition group cursor-pointer"
              >
                <service.icon className="w-12 h-12 mb-4 text-blue-400 group-hover:text-purple-400 transition" />
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { num: '200+', label: 'Projets réalisés' },
              { num: '150+', label: 'Clients satisfaits' },
              { num: '8+', label: 'Années expérience' },
              { num: '50+', label: 'Équipe experts' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.num}
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Prêt à transformer votre projet ?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Contactez-nous pour une consultation gratuite et découvrez comment nous pouvons vous aider
          </p>
          <button className="px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:shadow-2xl transition">
            Nous contacter
          </button>
        </div>
      </section>
    </main>
  );
}
