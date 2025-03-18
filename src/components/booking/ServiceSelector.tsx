import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Clock, Sparkles, Scissors, Droplet, Brush } from "lucide-react";

interface ServiceOption {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  image: string;
}

interface ServiceCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  services: ServiceOption[];
}

interface ServiceSelectorProps {
  onServiceSelect?: (service: ServiceOption) => void;
  selectedService?: ServiceOption | null;
}

const ServiceSelector = ({
  onServiceSelect,
  selectedService = null,
}: ServiceSelectorProps) => {
  const [activeTab, setActiveTab] = useState<string>("japanese-head-spa");

  const serviceCategories: ServiceCategory[] = [
    {
      id: "japanese-head-spa",
      name: "Japanese Head Spa",
      icon: <Sparkles className="h-5 w-5" />,
      services: [
        {
          id: "jhs-1",
          name: "Classic Head Spa Treatment",
          description:
            "Relaxing scalp massage with premium oils to promote hair health and reduce stress.",
          price: "€85",
          duration: "60 min",
          image:
            "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&q=80",
        },
        {
          id: "jhs-2",
          name: "Deluxe Head Spa Experience",
          description:
            "Extended treatment including deep conditioning, scalp exfoliation, and aromatherapy.",
          price: "€120",
          duration: "90 min",
          image:
            "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80",
        },
        {
          id: "jhs-3",
          name: "Head Spa & Hair Treatment",
          description:
            "Combines head spa with specialized hair treatment for damaged or stressed hair.",
          price: "€110",
          duration: "75 min",
          image:
            "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80",
        },
      ],
    },
    {
      id: "biab-shellac",
      name: "BIAB & Shellac",
      icon: <Brush className="h-5 w-5" />,
      services: [
        {
          id: "biab-1",
          name: "BIAB Nail Application",
          description:
            "Builder in a Bottle gel application for stronger, more durable nails.",
          price: "€65",
          duration: "60 min",
          image:
            "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
        },
        {
          id: "shellac-1",
          name: "Shellac Manicure",
          description:
            "Long-lasting, high-shine gel polish application with nail preparation.",
          price: "€45",
          duration: "45 min",
          image:
            "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=600&q=80",
        },
        {
          id: "combo-1",
          name: "BIAB & Shellac Combo",
          description:
            "Complete treatment with BIAB base for strength and Shellac color finish.",
          price: "€85",
          duration: "75 min",
          image:
            "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&q=80",
        },
      ],
    },
    {
      id: "sugaring",
      name: "Sugaring",
      icon: <Droplet className="h-5 w-5" />,
      services: [
        {
          id: "sugar-1",
          name: "Full Leg Sugaring",
          description:
            "Gentle hair removal using natural sugar paste for smooth, long-lasting results.",
          price: "€70",
          duration: "45 min",
          image:
            "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
        },
        {
          id: "sugar-2",
          name: "Brazilian Sugaring",
          description:
            "Complete intimate area hair removal with our gentle sugaring technique.",
          price: "€65",
          duration: "30 min",
          image:
            "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80",
        },
        {
          id: "sugar-3",
          name: "Face Sugaring",
          description:
            "Delicate sugaring treatment for facial hair with minimal irritation.",
          price: "€35",
          duration: "20 min",
          image:
            "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&q=80",
        },
      ],
    },
    {
      id: "pmu",
      name: "PMU - Permanent Makeup",
      icon: <Scissors className="h-5 w-5" />,
      services: [
        {
          id: "pmu-1",
          name: "Microblading Eyebrows",
          description:
            "Semi-permanent technique creating hair-like strokes for natural-looking brows.",
          price: "€250",
          duration: "120 min",
          image:
            "https://images.unsplash.com/photo-1594125674956-61a9b49c8ecc?w=600&q=80",
        },
        {
          id: "pmu-2",
          name: "Lip Blush",
          description:
            "Subtle enhancement of lip color and definition with semi-permanent makeup.",
          price: "€220",
          duration: "90 min",
          image:
            "https://images.unsplash.com/photo-1588006173527-0fd5c9070f41?w=600&q=80",
        },
        {
          id: "pmu-3",
          name: "Eyeliner Enhancement",
          description:
            "Defined eyeliner look that enhances your eyes with lasting results.",
          price: "€180",
          duration: "60 min",
          image:
            "https://images.unsplash.com/photo-1588006173529-5ccc7a945ae8?w=600&q=80",
        },
      ],
    },
  ];

  const handleServiceSelect = (service: ServiceOption) => {
    if (onServiceSelect) {
      onServiceSelect(service);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-light text-center mb-6 text-stone-800">
        Select a Service
      </h2>

      <Tabs
        defaultValue={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
          {serviceCategories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="flex items-center gap-2 py-3"
            >
              {category.icon}
              <span className="hidden md:inline">{category.name}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {serviceCategories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service) => (
                <Card
                  key={service.id}
                  className={`overflow-hidden transition-all hover:shadow-md cursor-pointer ${selectedService?.id === service.id ? "ring-2 ring-amber-400" : ""}`}
                  onClick={() => handleServiceSelect(service)}
                >
                  <div className="aspect-video w-full overflow-hidden bg-stone-100">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-medium text-stone-800">
                      {service.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <CardDescription className="text-stone-600 line-clamp-2">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center pt-0">
                    <div className="flex items-center text-stone-700">
                      <Clock className="h-4 w-4 mr-1 text-amber-600" />
                      <span className="text-sm">{service.duration}</span>
                    </div>
                    <span className="font-medium text-stone-800">
                      {service.price}
                    </span>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {selectedService && (
        <div className="mt-8 flex justify-end">
          <Button className="bg-amber-600 hover:bg-amber-700 text-white">
            Continue with {selectedService.name}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ServiceSelector;
