import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Sample gallery images - in a real app, these would come from a database or CMS
  const galleryItems = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
      caption: "Toyota Camry - Available for Sale",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
      caption: "Honda Accord - Premium Condition",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
      caption: "Mercedes-Benz C-Class - Luxury Model",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
      caption: "Towing Service in Progress",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
      caption: "BMW 5 Series - For Sale",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
      caption: "Ford Explorer - SUV Available",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
      caption: "Professional Roadside Assistance",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80",
      caption: "Lexus ES - Premium Sedan",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
      caption: "Customer Delivery - Satisfied Client",
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
              Our Gallery
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Explore our collection of quality vehicles and professional services
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-[4/3]"
                  onClick={() => setSelectedImage(item.url)}
                >
                  <img
                    src={item.url}
                    alt={item.caption}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-primary-foreground font-semibold p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Interested in Any of Our Vehicles?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to schedule a viewing or get more information about our available cars
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/2349079214841"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 text-base font-semibold bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg hover:shadow-xl hover:scale-105 rounded-md transition-all duration-300"
              >
                Chat on WhatsApp
              </a>
              <a
                href="tel:+2349079214841"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg rounded-md transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Gallery image"
              className="w-full h-auto"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
