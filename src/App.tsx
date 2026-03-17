import { HelmetProvider, Helmet } from "react-helmet-async";
import { siteConfig, jsonLdSchema } from "./data/content";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Brands from "./sections/Brands";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <html lang="fr" />
        <title>{siteConfig.seo.title}</title>
        <meta name="description" content={siteConfig.seo.description} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={siteConfig.seo.title} />
        <meta property="og:description" content={siteConfig.seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-slate-950 text-slate-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Brands />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}
