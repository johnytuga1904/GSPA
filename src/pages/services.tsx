import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import { Clock, Euro, Info, Calendar } from "lucide-react";

// Import the actual Header component
import Header from "../components/layout/Header";

const Footer = () => (
  <footer className="bg-rochela-bg border-t border-rochela-light py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-serif text-rochela-darkest mb-4">
            Rochela Spa
          </h3>
          <p className="text-rochela-dark">
            Luxuriöse Schönheitsbehandlungen in einer ruhigen Umgebung.
          </p>
        </div>
        <div>
          <h4 className="text-rochela-darkest font-medium mb-4">Kontakt</h4>
          <p className="text-rochela-dark">
            123 Spa Straße
            <br />
            Zürich, Schweiz
          </p>
          <p className="text-rochela-dark mt-2">
            info@rochelaspa.com
            <br />
            +41 123 456 789
          </p>
        </div>
        <div>
          <h4 className="text-rochela-darkest font-medium mb-4">
            Öffnungszeiten
          </h4>
          <p className="text-rochela-dark">
            Montag - Freitag: 9:00 - 20:00 Uhr
            <br />
            Samstag: 10:00 - 18:00 Uhr
            <br />
            Sonntag: Geschlossen
          </p>
        </div>
        <div>
          <h4 className="text-rochela-darkest font-medium mb-4">
            Folgen Sie uns
          </h4>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-rochela-dark hover:text-rochela-medium transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-rochela-dark hover:text-rochela-medium transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-rochela-light text-center text-rochela-dark">
        <p>
          © {new Date().getFullYear()} Rochela Spa. Alle Rechte vorbehalten.
        </p>
      </div>
    </div>
  </footer>
);

interface ServiceProps {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  category: string;
  image: string;
}

const ServicesPage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  // Default services data
  const services: ServiceProps[] = [
    {
      id: "jhs-1",
      name: "Japanisches Kopf-Spa Treatment",
      description:
        "Eine luxuriöse Kopfhaut- und Haarbehandlung, die traditionelle japanische Techniken mit moderner Spa-Therapie kombiniert.",
      duration: 60,
      price: 120,
      category: "japanese-head-spa",
      image:
        "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80",
    },
    {
      id: "jhs-2",
      name: "Tiefenpflege Behandlung",
      description:
        "Intensive Haarpflege mit hochwertigen japanischen Produkten zur Wiederherstellung von Feuchtigkeit und Glanz.",
      duration: 45,
      price: 95,
      category: "japanese-head-spa",
      image:
        "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&q=80",
    },
    {
      id: "biab-1",
      name: "BIAB Komplettset",
      description:
        "Builder In A Bottle Gel-Anwendung für stärkere, haltbarere Nägel mit natürlichem Aussehen.",
      duration: 75,
      price: 85,
      category: "biab-shellac",
      image:
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80",
    },
    {
      id: "biab-2",
      name: "Shellac Maniküre",
      description:
        "Langanhaltender, hochglänzender Gel-Lack, der natürliche Nägel schützt und gleichzeitig lebendige Farbe bietet.",
      duration: 60,
      price: 65,
      category: "biab-shellac",
      image:
        "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=800&q=80",
    },
    {
      id: "sugar-1",
      name: "Ganzbein Sugaring",
      description:
        "Natürliche Haarentfernungstechnik mit einer Zuckerpaste für glattere, länger anhaltende Ergebnisse.",
      duration: 60,
      price: 90,
      category: "sugaring",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
    },
    {
      id: "sugar-2",
      name: "Brazilian Sugaring",
      description:
        "Sanfte und effektive Haarentfernung für empfindliche Bereiche mit organischer Zuckerpaste.",
      duration: 45,
      price: 75,
      category: "sugaring",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
    },
    {
      id: "pmu-1",
      name: "Microblading",
      description:
        "Semi-permanente Augenbrauen-Verbesserungstechnik für natürlich aussehende, vollere Brauen.",
      duration: 120,
      price: 350,
      category: "pmu",
      image:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80",
    },
    {
      id: "pmu-2",
      name: "Lip Blush",
      description:
        "Subtiles, semi-permanentes Make-up zur Verbesserung der Lippenfarbe und -definition.",
      duration: 90,
      price: 300,
      category: "pmu",
      image:
        "https://images.unsplash.com/photo-1588387883409-343603b2be2c?w=800&q=80",
    },
  ];

  const handleBookService = (serviceId: string) => {
    navigate(`/booking?service=${serviceId}`);
  };

  return (
    <div className="min-h-screen bg-rochela-bg">
      <Header transparent={false} />

      <main
        className="container mx-auto px-4 pt-28 pb-12 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "soft-light",
          backgroundColor: "rgba(250, 232, 216, 0.3)",
        }}
      >
        {/* Added top padding to account for fixed header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif text-rochela-darkest mb-4">
            Unsere Dienstleistungen
          </h1>
          <p className="text-lg text-rochela-dark max-w-2xl mx-auto">
            Entdecken Sie unsere Auswahl an erstklassigen
            Schönheitsbehandlungen, die darauf ausgerichtet sind, Sie zu
            verwöhnen, zu verjüngen und Ihre natürliche Schönheit zu betonen.
          </p>
        </div>

        <Tabs
          defaultValue="japanese-head-spa"
          className="w-full max-w-5xl mx-auto"
        >
          <TabsList className="grid grid-cols-4 mb-8 bg-rochela-light">
            <TabsTrigger
              value="japanese-head-spa"
              className="text-sm md:text-base data-[state=active]:bg-rochela-medium data-[state=active]:text-white"
            >
              {t("services.japanese.title")}
            </TabsTrigger>
            <TabsTrigger
              value="biab-shellac"
              className="text-sm md:text-base data-[state=active]:bg-rochela-medium data-[state=active]:text-white"
            >
              {t("services.shellac.title")}
            </TabsTrigger>
            <TabsTrigger
              value="sugaring"
              className="text-sm md:text-base data-[state=active]:bg-rochela-medium data-[state=active]:text-white"
            >
              {t("services.sugaring.title")}
            </TabsTrigger>
            <TabsTrigger
              value="pmu"
              className="text-sm md:text-base data-[state=active]:bg-rochela-medium data-[state=active]:text-white"
            >
              {t("services.pmu.title")}
            </TabsTrigger>
          </TabsList>

          {["japanese-head-spa", "biab-shellac", "sugaring", "pmu"].map(
            (category) => (
              <TabsContent
                key={category}
                value={category}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {services
                    .filter((service) => service.category === category)
                    .map((service) => (
                      <Card
                        key={service.id}
                        className="overflow-hidden border-rochela-light hover:shadow-md transition-shadow duration-300 bg-white"
                      >
                        <div className="aspect-video w-full overflow-hidden bg-rochela-light/20">
                          <img
                            src={service.image}
                            alt={service.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-xl font-serif text-rochela-darkest">
                              {service.name}
                            </CardTitle>
                            <Badge
                              variant="outline"
                              className="bg-rochela-bg text-rochela-dark border-rochela-light font-medium"
                            >
                              €{service.price}
                            </Badge>
                          </div>
                          <CardDescription className="text-rochela-dark mt-2">
                            {service.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center gap-6 text-rochela-dark">
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-rochela-medium" />
                              <span className="text-sm">
                                {service.duration} min
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Euro className="h-4 w-4 text-rochela-medium" />
                              <span className="text-sm">€{service.price}</span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-rochela-dark border-rochela-light hover:bg-rochela-light/20 hover:text-rochela-darkest"
                          >
                            <Info className="h-4 w-4 mr-2" />
                            Details
                          </Button>
                          <Button
                            onClick={() => handleBookService(service.id)}
                            className="bg-rochela-medium hover:bg-rochela-dark text-white transition-colors"
                            size="sm"
                          >
                            <Calendar className="h-4 w-4 mr-2" />
                            {t("hero.cta")}
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                  <Button
                    onClick={() => navigate("/booking")}
                    className="bg-rochela-medium hover:bg-rochela-dark text-white px-8 py-6 text-lg font-serif transition-colors"
                  >
                    {t("nav.booking")}
                  </Button>
                </div>
              </TabsContent>
            ),
          )}
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
