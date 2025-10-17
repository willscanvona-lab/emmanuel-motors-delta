import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import landCruiserBlack from "@/assets/car-land-cruiser-black.png";
import hondaAccord from "@/assets/car-honda-accord.png";
import landCruiserWhite from "@/assets/car-land-cruiser-white.png";
import camrySilver from "@/assets/car-camry-silver.png";
import camryGrey from "@/assets/car-camry-grey.png";
import rushWhite from "@/assets/car-rush-white.png";
import camryWhite from "@/assets/car-camry-white.png";
import camryBlack from "@/assets/car-camry-black.png";
import landCruiserSilver from "@/assets/car-land-cruiser-silver.png";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      id: 1,
      url: landCruiserBlack,
      caption: "Toyota Land Cruiser",
      price: "₦85,000,000",
    },
    {
      id: 2,
      url: hondaAccord,
      caption: "Honda Accord",
      price: "₦18,500,000",
    },
    {
      id: 3,
      url: landCruiserWhite,
      caption: "Toyota Land Cruiser",
      price: "₦82,000,000",
    },
    {
      id: 4,
      url: camrySilver,
      caption: "Toyota Camry",
      price: "₦22,500,000",
    },
    {
      id: 5,
      url: camryGrey,
      caption: "Toyota Camry",
      price: "₦21,000,000",
    },
    {
      id: 6,
      url: rushWhite,
      caption: "Toyota Rush",
      price: "₦28,000,000",
    },
    {
      id: 7,
      url: camryWhite,
      caption: "Toyota Camry",
      price: "₦20,500,000",
    },
    {
      id: 8,
      url: camryBlack,
      caption: "Toyota Camry",
      price: "₦24,500,000",
    },
    {
      id: 9,
      url: landCruiserSilver,
      caption: "Toyota Land Cruiser",
      price: "₦78,000,000",
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
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="text-primary-foreground p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="font-bold text-lg">{item.caption}</p>
                      <p className="text-logo-gold font-semibold text-xl">{item.price}</p>
                    </div>
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
