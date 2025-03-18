import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { useLanguage } from "../../context/LanguageContext";

interface ServiceProps {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const FeaturedServices = ({
  services = defaultServices,
}: {
  services?: ServiceProps[];
}) => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-4">
            {t("featuredServices.title", "Our Premium Services")}
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            {t(
              "featuredServices.subtitle",
              "Experience luxury and rejuvenation with our signature treatments",
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="overflow-hidden border border-stone-200 hover:shadow-md transition-shadow duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-medium text-stone-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-stone-600">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full border-stone-300 text-stone-700 hover:bg-stone-100 hover:text-stone-900"
                  onClick={() => navigate(service.link)}
                >
                  {t("featuredServices.learnMore", "Learn More")}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="default"
            className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-2"
            onClick={() => navigate("/services")}
          >
            {t("featuredServices.viewAll", "View All Services")}
          </Button>
        </div>
      </div>
    </section>
  );
};

// Default services with placeholder data
const defaultServices: ServiceProps[] = [
  {
    id: "1",
    title: "Japanese Head Spa",
    description:
      "A luxurious scalp and hair treatment that promotes relaxation and hair health using traditional Japanese techniques.",
    image:
      "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80",
    link: "/services#japanese-head-spa",
  },
  {
    id: "2",
    title: "BIAB & Shellac",
    description:
      "Premium nail treatments that provide long-lasting, chip-resistant color with a high-gloss finish.",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80",
    link: "/services#biab-shellac",
  },
  {
    id: "3",
    title: "Sugaring",
    description:
      "A gentle, all-natural hair removal technique that leaves skin smooth and exfoliated.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
    link: "/services#sugaring",
  },
  {
    id: "4",
    title: "PMU - Permanent Makeup",
    description:
      "Enhance your natural beauty with subtle, long-lasting makeup applications by our skilled technicians.",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
    link: "/services#pmu",
  },
];

export default FeaturedServices;
