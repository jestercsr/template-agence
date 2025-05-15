'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white px-6 py-4 fixed top-0 w-full z-50 border-b"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-black"><Link href="/">StudioNova</Link></h1>
        <ul className="hidden md:flex gap-6 text-gray-600 text-sm">
          <li>Services</li>
          <li><Link href="/projets">Projets</Link></li>
          <li>Studio</li>
          <li>Contact</li>
        </ul>
      </div>
    </motion.nav>
  );
}
