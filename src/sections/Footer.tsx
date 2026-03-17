import { Zap, Phone, MapPin } from "lucide-react";
import { footerContent, siteConfig, navigation } from "../data/content";

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <a href="#accueil" className="flex items-center gap-2.5 mb-4">
              <Zap className="w-7 h-7 text-electric" />
              <span className="text-lg font-bold text-white tracking-tight">
                Chris<span className="text-electric">Elec</span>
                <span className="text-slate-500 font-normal ml-1">24</span>
              </span>
            </a>
            <p className="text-sm text-slate-500 leading-relaxed">
              {footerContent.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-slate-500 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href={siteConfig.phoneTel}
                className="flex items-center gap-2 text-sm text-slate-500 hover:text-electric transition-colors"
              >
                <Phone className="w-4 h-4" />
                {siteConfig.phone}
              </a>
              <div className="flex items-start gap-2 text-sm text-slate-500">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                {siteConfig.address}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">{footerContent.copyright}</p>
          <p className="text-xs text-slate-600">
            Électricien professionnel · Saint-Geniès · Dordogne (24)
          </p>
        </div>
      </div>
    </footer>
  );
}
