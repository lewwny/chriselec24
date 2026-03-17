import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Phone, Menu, X } from "lucide-react";
import { navigation, siteConfig } from "../data/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#accueil" className="flex items-center gap-2.5 group">
          <div className="relative">
            <Zap className="w-8 h-8 text-electric transition-all duration-300 group-hover:text-electric-light group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">
            Chris<span className="text-electric">Elec</span>
            <span className="text-slate-500 font-normal ml-1">24</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-electric after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href={siteConfig.phoneTel}
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-electric hover:bg-electric-dark text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-electric/25 hover:-translate-y-0.5 active:translate-y-0"
        >
          <Phone className="w-4 h-4" />
          Appeler maintenant
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navigation.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-base font-medium text-slate-300 hover:text-white transition-colors py-2 border-b border-white/5"
                >
                  {item.label}
                </motion.a>
              ))}
              <a
                href={siteConfig.phoneTel}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-electric text-white text-sm font-semibold rounded-lg mt-2"
              >
                <Phone className="w-4 h-4" />
                Appeler maintenant
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
