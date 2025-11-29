"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { RiMenu5Line } from "react-icons/ri";
import { HiXMark } from "react-icons/hi2";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="border-b border-gray-800 sticky top-0 z-50 backdrop-blur-md bg-black/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="font-bold text-2xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Agency
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <a href="/" className="hover:text-blue-400 transition">
              Accueil
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              Services
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              Projets
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              Contact
            </a>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition">
              Devis
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? <HiXMark size={24} /> : <RiMenu5Line size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-800 pt-4">
            <a href="/" className="block py-2 hover:text-blue-400">
              Accueil
            </a>
            <a href="#" className="block py-2 hover:text-blue-400">
              Services
            </a>
            <a href="#" className="block py-2 hover:text-blue-400">
              Projets
            </a>
            <a href="#" className="block py-2 hover:text-blue-400">
              Contact
            </a>
            <button className="w-full mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
              Devis
            </button>
          </div>
        )}
      </div>
    </motion.nav>
  );
}
