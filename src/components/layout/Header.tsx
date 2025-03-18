import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "../ui/sheet";
import LanguageSelector from "./LanguageSelector";
import Logo from "./Logo";
import { useLanguage } from "../../context/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface HeaderProps {
  transparent?: boolean;
}

const Header = ({ transparent = false }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Only show header on pages other than home
  const isHomePage = window.location.pathname === "/";
  if (isHomePage) {
    return null;
  }

  const headerClass = `fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || !transparent ? "bg-[#fae8d8] shadow-md" : "bg-transparent"}`;

  const navItems = [
    { name: t("nav.services", "Dienstleistungen"), path: "/services" },
    { name: t("nav.booking", "Termin buchen"), path: "/booking" },
    { name: t("nav.gift", "Geschenkgutscheine"), path: "/gift-certificates" },
    { name: t("nav.about", "Über uns/Kontakt"), path: "/about" },
  ];

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Logo
            textColor={
              isScrolled || !transparent ? "text-[#3c2a21]" : "text-white"
            }
          />
        </Link>

        {/* Navigation Button and Language Selector */}
        <div className="flex items-center space-x-2">
          {/* Navigation Button - Simple 3 lines */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="p-1 hover:bg-[#e6d5c5] rounded-full"
              >
                <Menu className="h-5 w-5 text-[#3c2a21]" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-[#fae8d8] p-0 overflow-hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-[#e6d5c5]">
                  <Logo />
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full hover:bg-[#e6d5c5]"
                    >
                      <X className="h-5 w-5 text-[#3c2a21]" />
                    </Button>
                  </SheetClose>
                </div>

                <div className="flex-1 overflow-y-auto py-2">
                  <nav className="flex flex-col">
                    {navItems.map((item) => (
                      <div
                        key={item.name}
                        className="border-b border-[#e6d5c5] last:border-b-0"
                      >
                        <Link
                          to={item.path}
                          className="flex items-center justify-between p-4 text-base font-medium text-[#3c2a21] hover:bg-[#e6d5c5] transition-colors"
                        >
                          <span className="text-[#3c2a21]">{item.name}</span>
                          {item.path === "/services" && (
                            <ChevronRight className="h-4 w-4 text-[#a67c52]" />
                          )}
                        </Link>
                        {item.path === "/services" && (
                          <div className="bg-[#f5e1d1]">
                            <Link
                              to="/services#japanese-head-spa"
                              className="block p-3 pl-6 text-sm text-[#5c4434] hover:bg-[#e6d5c5]"
                            >
                              {t(
                                "services.japanese.title",
                                "Japanisches Kopf-Spa",
                              )}
                            </Link>
                            <Link
                              to="/services#biab-shellac"
                              className="block p-3 pl-6 text-sm text-[#5c4434] hover:bg-[#e6d5c5]"
                            >
                              {t("services.shellac.title", "BIAB & Shellac")}
                            </Link>
                            <Link
                              to="/services#sugaring"
                              className="block p-3 pl-6 text-sm text-[#5c4434] hover:bg-[#e6d5c5]"
                            >
                              {t("services.sugaring.title", "Sugaring")}
                            </Link>
                            <Link
                              to="/services#pmu"
                              className="block p-3 pl-6 text-sm text-[#5c4434] hover:bg-[#e6d5c5]"
                            >
                              {t(
                                "services.pmu.title",
                                "PMU - Permanent Make-up",
                              )}
                            </Link>
                          </div>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>

                <div className="p-4 border-t border-[#e6d5c5] flex justify-center">
                  <LanguageSelector
                    onLanguageChange={(lang) => {
                      setLanguage(lang as any);
                    }}
                    className="rounded-md px-2 py-1"
                  />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
