import { motion } from "framer-motion";
import { Phone, ChevronDown, Star } from "lucide-react";
import { heroContent, siteConfig } from "../data/content";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroContent.backgroundImage}
          alt="Installation électrique moderne et professionnelle"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-slate-950/60" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Animated glow orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-electric/10 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-300 backdrop-blur-sm">
            <span className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 fill-copper-light text-copper-light"
                />
              ))}
            </span>
            <span className="w-px h-4 bg-white/20" />
            {siteConfig.ratingCount}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            type: "spring",
            stiffness: 80,
          }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
        >
          L'Expertise{" "}
          <span className="text-gradient">Électrique</span>
          <br />
          à Saint-Geniès
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {heroContent.subtitle}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={siteConfig.phoneTel}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-electric hover:bg-electric-dark text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-electric/30 hover:-translate-y-1 active:translate-y-0 text-lg"
          >
            <Phone className="w-5 h-5 transition-transform group-hover:rotate-12" />
            {heroContent.cta}
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-6 py-4 text-slate-400 hover:text-white font-medium transition-colors duration-200 text-base"
          >
            Découvrir nos services
            <ChevronDown className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Disponible maintenant
          </div>
          <div className="w-px h-4 bg-slate-700" />
          <span>Devis gratuit</span>
          <div className="w-px h-4 bg-slate-700" />
          <span>Intervention rapide</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-slate-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
