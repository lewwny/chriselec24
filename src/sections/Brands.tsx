import { motion } from "framer-motion";
import { CircuitBoard } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import { brandsContent } from "../data/content";

export default function Brands() {
  return (
    <SectionWrapper id="partenaires" dark>
      <SectionHeading
        title={brandsContent.sectionTitle}
        subtitle="Matériel de qualité professionnelle"
      />

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {brandsContent.brands.map((brand, i) => (
          <motion.div
            key={brand.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.12,
              duration: 0.5,
              type: "spring",
              stiffness: 100,
            }}
            className="group relative flex flex-col items-center text-center p-8 rounded-xl bg-slate-800/30 border border-white/5 hover:border-electric/20 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Brand icon placeholder */}
            <div className="w-16 h-16 rounded-xl bg-electric/5 border border-electric/10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-electric/10 group-hover:border-electric/30 group-hover:shadow-lg group-hover:shadow-electric/10">
              <CircuitBoard className="w-7 h-7 text-electric transition-transform duration-300 group-hover:scale-110" />
            </div>

            <h3 className="text-lg font-bold text-white tracking-wide mb-2">
              {brand.name}
            </h3>
            <p className="text-sm text-slate-500">{brand.description}</p>

            {/* Decorative line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-electric transition-all duration-500 group-hover:w-1/2 rounded-full" />
          </motion.div>
        ))}
      </div>

      {/* Bottom tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center text-sm text-slate-500 mt-10"
      >
        {brandsContent.sectionSubtitle}
      </motion.p>
    </SectionWrapper>
  );
}
