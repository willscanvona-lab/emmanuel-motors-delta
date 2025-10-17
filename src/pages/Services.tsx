import { Car, RefreshCcw, Truck, Wrench } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Car Sales",
      description: "We offer a wide range of local and imported vehicles for sale. Each car is thoroughly inspected and verified to ensure quality and reliability. Whether you're looking for a sedan, SUV, or truck, we have options that fit your budget and lifestyle.",
    },
    {
      icon: RefreshCcw,
      title: "Car Swap & Purchase",
      description: "Trade in your old vehicle for a newer model with our hassle-free car swap program. We offer fair valuations and make the exchange process simple and transparent. Get the upgrade you deserve without the stress.",
    },
    {
      icon: Truck,
      title: "24/7 Towing Service",
      description: "Stuck on the road? Our professional towing service is available around the clock to assist you. We provide fast, reliable towing for all vehicle types across Warri and Delta State. Your safety is our priority.",
    },
    {
      icon: Wrench,
      title: "Roadside Assistance",
      description: "From battery boosts and tire changes to fuel delivery and lockout services, our roadside assistance team is ready to help. We understand emergencies happen, and we're here to get you back on the road quickly.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Our Services
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Comprehensive automotive solutions tailored to your needs
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose Emmanuel Motor?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4 text-secondary-foreground font-bold text-2xl">
                  ✓
                </div>
                <h3 className="text-xl font-semibold mb-3">Verified Vehicles</h3>
                <p className="text-muted-foreground">
                  Every car we sell is thoroughly inspected and comes with complete documentation.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4 text-secondary-foreground font-bold text-2xl">
                  ⚡
                </div>
                <h3 className="text-xl font-semibold mb-3">Fast Response</h3>
                <p className="text-muted-foreground">
                  Our towing and roadside assistance teams respond quickly to get you moving again.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4 text-secondary-foreground font-bold text-2xl">
                  💰
                </div>
                <h3 className="text-xl font-semibold mb-3">Fair Pricing</h3>
                <p className="text-muted-foreground">
                  Transparent, competitive pricing with no hidden fees or surprises.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
