import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface GiftCertificatePromoProps {
  title?: string;
  description?: string;
  ctaText?: string;
  imageUrl?: string;
  backgroundColor?: string;
}

const GiftCertificatePromo = ({
  title = "Give the Gift of Relaxation",
  description = "Surprise someone special with a Rochela Spa gift certificate. Perfect for birthdays, anniversaries, or just because. Available in digital or physical format with customizable amounts.",
  ctaText = "Purchase a Gift Certificate",
  imageUrl = "https://images.unsplash.com/photo-1607006483224-75ee0df7c3e3?w=800&q=80",
  backgroundColor = "bg-amber-50",
}: GiftCertificatePromoProps) => {
  return (
    <section className={`w-full py-16 ${backgroundColor}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-light text-amber-900 mb-4">
              {title}
            </h2>
            <p className="text-lg text-amber-800 mb-8 max-w-md">
              {description}
            </p>
            <Button
              className="group bg-amber-800 hover:bg-amber-900 text-white"
              size="lg"
            >
              {ctaText}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src={imageUrl}
                alt="Gift Certificate"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-transparent mix-blend-overlay"></div>
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-amber-900/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftCertificatePromo;
