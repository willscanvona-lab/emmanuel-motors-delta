import { Target, Eye } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import aboutImage from "@/assets/about-team.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Driven by Trust, Powered by Service
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Learn more about Emmanuel Motor and our commitment to excellence
            </p>
          </div>
        </section>

        {/* Company Profile */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={aboutImage}
                  alt="Emmanuel Motor Team"
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Emmanuel Motor is a leading car dealership and towing service provider based in Warri, 
                  Delta State, Nigeria. We have built our reputation on a foundation of trust, reliability, 
                  and exceptional customer service.
                </p>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Our commitment to providing dependable car sales and towing services across Warri and 
                  Delta State is unwavering. We understand that vehicle ownership and roadside emergencies 
                  can be stressful, which is why we focus on making every interaction with us as smooth and 
                  stress-free as possible.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With years of experience in the automotive industry, our team of dedicated professionals 
                  works around the clock to ensure you get the best service, whether you're purchasing a 
                  vehicle or need emergency towing assistance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Mission */}
              <div className="bg-card rounded-lg p-8 shadow-lg border border-border">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To deliver dependable automotive solutions with honesty and speed. We strive to exceed 
                  customer expectations by providing quality vehicles and prompt, professional towing services.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-card rounded-lg p-8 shadow-lg border border-border">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be Delta's most trusted name in car sales and towing. We envision a future where 
                  every customer in our community knows they can rely on Emmanuel Motor for all their 
                  automotive needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-secondary">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                <p className="text-muted-foreground">
                  We conduct our business with honesty and transparency in every transaction.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-secondary">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Reliability</h3>
                <p className="text-muted-foreground">
                  Our customers can count on us 24/7 for quality service and support.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-secondary">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We are committed to providing the highest quality in everything we do.
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

export default About;
