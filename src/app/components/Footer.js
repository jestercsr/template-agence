'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-black text-white px-6 py-16 mt-32"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <h2 className="text-2xl font-bold">StudioNova</h2>
          <p className="text-sm text-gray-400 mt-2">Design. Branding. Expérience.</p>
        </div>
        <div className="space-y-1 text-gray-400 text-sm">
          <p>hello@studionova.com</p>
          <p>+33 6 01 23 45 67</p>
          <p>Paris – Montréal – Tokyo</p>
        </div>
      </div>
      <div className="mt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} StudioNova. Tous droits réservés.
      </div>
    </motion.footer>
  );
}
