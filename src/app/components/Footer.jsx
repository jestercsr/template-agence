"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="border-t border-gray-800 py-12 px-4 bg-gray-900/50"
    >
      <div className="md:flex justify-around">
        <div>
            <div className="font-bold text-lg mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Agency
            </div>
            <p className="text-gray-400 text-sm">
              Votre partenaire digital de confiance
            </p>
          </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {["Services", "Projets", "À propos", "Contact"].map((title, i) => (
            <div key={i}>
              <h4 className="font-semibold mb-4">{title}</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Lien 1
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Lien 2
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Lien 3
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Agency. Tous droits réservés.</p>
        </div>
    </motion.footer>
  );
}
