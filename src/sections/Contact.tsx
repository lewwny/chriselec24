import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Navigation } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import { contactContent, siteConfig } from "../data/content";

export default function Contact() {
  return (
    <SectionWrapper id="contact" dark>
      <SectionHeading
        title={contactContent.sectionTitle}
        subtitle={contactContent.sectionSubtitle}
      />

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
          className="space-y-6"
        >
          {/* Phone CTA - Prominent */}
          <a
            href={siteConfig.phoneTel}
            className="group flex items-center gap-5 p-6 rounded-xl bg-electric/5 border border-electric/20 hover:bg-electric/10 hover:border-electric/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-electric/10"
          >
            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-electric/10 border border-electric/20 flex items-center justify-center transition-all duration-300 group-hover:bg-electric group-hover:border-electric">
              <Phone className="w-6 h-6 text-electric transition-colors group-hover:text-white" />
            </div>
            <div>
              <div className="text-sm font-medium text-electric mb-1">
                {contactContent.callCta}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                {contactContent.phone}
              </div>
            </div>
          </a>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex items-start gap-4 p-5 rounded-xl bg-slate-800/30 border border-white/5"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-electric" />
            </div>
            <div>
              <div className="text-sm font-medium text-slate-400 mb-1">
                Adresse
              </div>
              <div className="text-base text-white font-medium">
                {contactContent.address}
              </div>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-start gap-4 p-5 rounded-xl bg-slate-800/30 border border-white/5"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center">
              <Clock className="w-5 h-5 text-electric" />
            </div>
            <div>
              <div className="text-sm font-medium text-slate-400 mb-2">
                Horaires d'ouverture
              </div>
              {contactContent.hours.map((h) => (
                <div
                  key={h.day}
                  className="flex items-center justify-between gap-8 text-sm py-1"
                >
                  <span className="text-white font-medium">{h.day}</span>
                  <span
                    className={
                      h.time === "Fermé"
                        ? "text-red-400 font-medium"
                        : "text-slate-400"
                    }
                  >
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
          className="relative rounded-xl overflow-hidden border border-white/5 min-h-[400px] bg-slate-800/30"
        >
          <iframe
            title="Localisation Chris Elec 24 – Saint-Geniès"
            src={`https://www.google.com/maps?q=${encodeURIComponent("160 Rte de la Blogeonnie, 24590 Saint-Geniès, France")}&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "400px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full grayscale-[30%] contrast-[1.1]"
          />
          {/* Overlay link to open in full Google Maps */}
          <a
            href={`https://www.google.com/maps/search/?api=1&query=$0{encodeURIComponent("Chris Elec 24, 160 Rte de la Blogeonnie, 24590 Saint-Geniès, France")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-4 py-2 bg-slate-950/80 backdrop-blur-sm border border-white/10 text-white text-xs font-medium rounded-lg hover:bg-slate-950/90 transition-all duration-200 z-10"
          >
            <Navigation className="w-3.5 h-3.5" />
            Ouvrir dans Google Maps
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
