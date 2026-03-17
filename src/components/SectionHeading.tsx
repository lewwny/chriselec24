import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      >
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase text-electric border border-electric/30 rounded-lg bg-electric/5">
          {title}
        </span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 100 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
      >
        {subtitle}
      </motion.h2>
    </div>
  );
}
