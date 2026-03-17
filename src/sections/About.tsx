import { motion } from "framer-motion";
import { CheckCircle, Award, Clock } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import { aboutContent } from "../data/content";

const statIcons = [Award, Clock, CheckCircle];

export default function About() {
  return (
    <SectionWrapper id="apropos" dark>
      <SectionHeading
        title={aboutContent.sectionTitle}
        subtitle={aboutContent.sectionSubtitle}
      />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring", stiffness: 60 }}
          className="relative"
        >
          <div className="relative rounded-xl overflow-hidden">
            <img
              src={aboutContent.image}
              alt="Électricien professionnel au travail"
              className="w-full h-[400px] lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
          </div>
          {/* Decorative border */}
          <div className="absolute -inset-1 rounded-xl border border-electric/10 -z-10" />
          <div className="absolute -bottom-3 -right-3 w-24 h-24 border-r-2 border-b-2 border-electric/20 rounded-br-xl" />
          <div className="absolute -top-3 -left-3 w-24 h-24 border-l-2 border-t-2 border-electric/20 rounded-tl-xl" />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring", stiffness: 60 }}
        >
          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            {aboutContent.text}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {aboutContent.stats.map((stat, i) => {
              const Icon = statIcons[i];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 100 }}
                  className="group text-center p-4 rounded-xl bg-slate-800/50 border border-white/5 hover:border-electric/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon className="w-5 h-5 text-electric mx-auto mb-2 transition-transform group-hover:scale-110" />
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
