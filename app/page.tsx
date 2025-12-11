import Header from "@/components/header"
import HeroBanner from "@/components/hero-banner"
import ProductShowcase from "@/components/product-showcase"
import AboutSection from "@/components/about-section"
import FacilitiesSection from "@/components/facilities-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section id="home">
        <HeroBanner />
      </section>
      <section id="lokasi">
        <ProductShowcase />
      </section>
      <section id="tentang-kami">
        <AboutSection />
      </section>
      <section id="fasilitas">
        <FacilitiesSection />
      </section>
      <Footer />
    </main>
  )
}
