import { Link } from "react-router-dom";
import { Car, Truck, Headset, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-cars.jpg";
import aboutImage from "@/assets/about-team.jpg";

const Home = () => {
  const services = [
    {
      icon: Car,
      title: "Car Sales",
      description: "Verified and reliable vehicles.",
    },
    {
      icon: Truck,
      title: "Towing",
      description: "24/7 emergency roadside service.",
    },
    {
      icon: Headset,
      title: "Support",
      description: "Instant assistance via WhatsApp.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/75 to-primary/60" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
              Reliable Car Dealer & Towing Experts in Warri
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 animate-fade-in">
              Buy, Sell, or Tow — Fast, Trusted, and Affordable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button asChild variant="hero" size="lg">
                <a href="tel:+2349079214841" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-background/10 backdrop-blur-sm border-primary-foreground/50 text-primary-foreground hover:bg-background/20">
                <Link to="/gallery">View Cars</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Key Services */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Key Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  About Emmanuel Motor
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  At Emmanuel Motor, we are committed to providing dependable car sales and towing services 
                  across Warri and Delta State. With a focus on making vehicle ownership and roadside support 
                  stress-free, we have built a reputation for honesty, reliability, and speed.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Whether you're looking to purchase your dream car or need emergency towing assistance, 
                  our dedicated team is here to serve you 24/7.
                </p>
                <Button asChild variant="default" size="lg">
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src={aboutImage}
                  alt="Emmanuel Motor Team"
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Contact us today for reliable car sales and towing services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg">
                <a href="https://wa.me/2349079214841" target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
