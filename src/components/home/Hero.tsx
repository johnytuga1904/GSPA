import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import Logo from "../layout/Logo";
import { useLanguage } from "../../context/LanguageContext";
import LanguageSelector from "../layout/LanguageSelector";
import { Menu } from "lucide-react";

interface HeroProps {
  title?: string;
  description?: string;
  backgroundImage?: string;
}

const Hero = ({
  title = "ROCHELA",
  description = "Genießen Sie erstklassige Schönheitsbehandlungen, die auf Sie zugeschnitten sind",
  backgroundImage = "/spa-candles.jpg",
}: HeroProps) => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="relative w-full h-screen bg-rochela-bg">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Spa background with candles, towel and stones"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start">
        <div className="max-w-2xl">
          <div className="mb-8">
            <Logo
              className="scale-125 sm:scale-150 origin-left"
              textColor="text-white"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 sm:mb-6 font-serif">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 whitespace-pre-line">
            {description}
          </p>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="absolute top-4 right-4 md:hidden z-20">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-10 bg-black/70 md:hidden flex flex-col items-center justify-center">
          <div className="flex flex-col items-center space-y-6 p-8 rounded-lg bg-white/10 backdrop-blur-md">
            <a
              href="/services"
              className="px-6 py-3 text-white hover:bg-white/20 rounded-md font-medium text-lg w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.services")}
            </a>
            <a
              href="/booking"
              className="px-6 py-3 text-white hover:bg-white/20 rounded-md font-medium text-lg w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.booking")}
            </a>
            <a
              href="/gift-certificates"
              className="px-6 py-3 text-white hover:bg-white/20 rounded-md font-medium text-lg w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.gift")}
            </a>
            <a
              href="/about"
              className="px-6 py-3 text-white hover:bg-white/20 rounded-md font-medium text-lg w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.about")}
            </a>
            <div className="mt-4">
              <LanguageSelector />
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="mt-6 px-6 py-2 border border-white/50 text-white rounded-full hover:bg-white/20"
            >
              {t("common.close")}
            </button>
          </div>
        </div>
      )}

      {/* Desktop Navigation and Language Selector at bottom */}
      <div className="absolute bottom-8 left-0 right-0 hidden md:flex justify-center space-x-6">
        <a
          href="/services"
          className="px-4 py-2 text-white bg-transparent hover:bg-white/20 rounded-md font-medium"
        >
          {t("nav.services")}
        </a>
        <a
          href="/booking"
          className="px-4 py-2 text-white bg-transparent hover:bg-white/20 rounded-md font-medium"
        >
          {t("nav.booking")}
        </a>
        <a
          href="/gift-certificates"
          className="px-4 py-2 text-white bg-transparent hover:bg-white/20 rounded-md font-medium"
        >
          {t("nav.gift")}
        </a>
        <a
          href="/about"
          className="px-4 py-2 text-white bg-transparent hover:bg-white/20 rounded-md font-medium"
        >
          {t("nav.about")}
        </a>
        <div className="ml-2">
          <LanguageSelector />
        </div>
      </div>

      {/* Mobile bottom navigation indicator */}
      <div className="absolute bottom-6 left-0 right-0 flex md:hidden justify-center">
        <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm">
          {t("common.swipeUp") || "Nach oben wischen für Menü"}
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-rochela-bg to-transparent"></div>
    </div>
  );
};

export default Hero;
