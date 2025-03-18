import React from "react";
import { Helmet } from "react-helmet";
import { useLanguage } from "../context/LanguageContext";
import Hero from "./home/Hero";

interface HomeProps {
  pageTitle?: string;
  metaDescription?: string;
}

const Home = ({
  pageTitle = "Rochela Spa - Luxury Beauty Services",
  metaDescription = "Experience luxury beauty services at Rochela Spa. Book appointments for Japanese Head Spa, BIAB & Shellac, Sugaring, and PMU treatments.",
}: HomeProps) => {
  const { t, isLoading } = useLanguage();

  // If translations are still loading, show a simple loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-neutral-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-amber-800 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-amber-800 text-lg">{t("common.loading")}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      {/* Hero Section */}
      <Hero
        title={t("hero.title", "Luxuriöses Spa Erlebnis")}
        description={t(
          "hero.subtitle",
          "Genießen Sie erstklassige Schönheitsbehandlungen, die auf Sie zugeschnitten sind",
        )}
      />
    </div>
  );
};

export default Home;
