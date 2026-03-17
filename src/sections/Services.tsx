import { motion } from "framer-motion";
import { Zap, Shield, Wrench, ArrowRight } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import { servicesContent, siteConfig } from "../data/content";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  Shield,
  Wrench,
};

export default function Services() {
  return (
    <SectionWrapper id="services">
      <SectionHeading
        title={servicesContent.sectionTitle}
        subtitle={servicesContent.sectionSubtitle}
      />

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {servicesContent.services.map((service, i) => {
          const Icon = iconMap[service.icon] || Zap;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.15,
                duration: 0.5,
                type: "spring",
                stiffness: 80,
              }}
              className="group relative rounded-xl overflow-hidden bg-slate-900/80 border border-white/5 hover:border-electric/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-electric/5"
            >
              {/* Card image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="p-2.5 rounded-lg bg-electric/10 border border-electric/20 backdrop-blur-sm">
                    <Icon className="w-5 h-5 text-electric" />
                  </div>
                </div>
              </div>

              {/* Card content */}
              <div className="p-6">
                <span className="text-xs font-semibold text-electric uppercase tracking-wider">
                  {service.subtitle}
                </span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-5">
                  {service.description}
                </p>
                <a
                  href={siteConfig.phoneTel}
                  className="inline-flex items-center gap-2 text-sm font-medium text-electric hover:text-electric-light transition-colors group/link"
                >
                  Demander un devis
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-electric/5 rounded-full blur-3xl" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
