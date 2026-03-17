import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  dark = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative py-24 px-6 md:px-12 lg:px-20 overflow-hidden ${
        dark ? "bg-slate-900/50" : "bg-transparent"
      } ${className}`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
}
