import React from "react";
import { cn } from "@/lib/utils";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "./Logo";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#fae8d8] border-t border-[#e8d5c4] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <Logo className="mb-4" />
            <p className="text-[#5c4434] text-sm">{t("footer.about")}</p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="font-medium text-[#3c2a21]">
              {t("footer.contactUs")}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center text-[#5c4434] text-sm">
                <Phone className="h-4 w-4 mr-2 text-[#a67c52]" />
                <span>+41 123 456 789</span>
              </li>
              <li className="flex items-center text-[#5c4434] text-sm">
                <Mail className="h-4 w-4 mr-2 text-[#a67c52]" />
                <span>info@rochelaspa.com</span>
              </li>
              <li className="flex items-start text-[#5c4434] text-sm">
                <MapPin className="h-4 w-4 mr-2 mt-1 text-[#a67c52]" />
                <span>
                  123 Luxury Avenue
                  <br />
                  Zurich, Switzerland
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-medium text-[#3c2a21]">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/services"
                  className="text-[#5c4434] text-sm hover:text-[#a67c52] transition-colors"
                >
                  {t("nav.services")}
                </a>
              </li>
              <li>
                <a
                  href="/booking"
                  className="text-[#5c4434] text-sm hover:text-[#a67c52] transition-colors"
                >
                  {t("nav.booking")}
                </a>
              </li>
              <li>
                <a
                  href="/gift-certificates"
                  className="text-[#5c4434] text-sm hover:text-[#a67c52] transition-colors"
                >
                  {t("nav.gift")}
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-[#5c4434] text-sm hover:text-[#a67c52] transition-colors"
                >
                  {t("nav.about")}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-medium text-[#3c2a21]">
              {t("footer.newsletter")}
            </h4>
            <p className="text-[#5c4434] text-sm">
              {t("footer.subscribeText")}
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder={t("footer.emailPlaceholder")}
                className="bg-white border-[#e8d5c4] text-sm"
              />
              <Button
                variant="outline"
                className="border-[#a67c52] text-[#a67c52] hover:bg-[#a67c52] hover:text-white"
              >
                {t("footer.subscribe")}
              </Button>
            </div>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-[#5c4434] hover:text-[#a67c52] transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-[#5c4434] hover:text-[#a67c52] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#e8d5c4] mt-10 pt-6 text-center text-[#5c4434] text-xs">
          <p>
            &copy; {new Date().getFullYear()} Rochela Spa.{" "}
            {t("footer.allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
