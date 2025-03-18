import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language = "de" | "fr" | "it";

type Translations = {
  [key: string]: {
    [key in Language]?: string;
  };
};

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  isLoading: boolean;
}

const defaultTranslations: Translations = {
  // Navigation
  "nav.services": {
    de: "Dienstleistungen",
    fr: "Services",
    it: "Servizi",
  },
  "nav.booking": {
    de: "Termin buchen",
    fr: "Prendre rendez-vous",
    it: "Prenota appuntamento",
  },
  "nav.gift": {
    de: "Geschenkgutscheine",
    fr: "Chèques-cadeaux",
    it: "Buoni regalo",
  },
  "nav.about": {
    de: "Über uns/Kontakt",
    fr: "À propos/Contact",
    it: "Chi siamo/Contatti",
  },

  // Hero Section
  "hero.title": {
    de: "Luxuriöses Spa Erlebnis",
    fr: "Expérience Spa de Luxe",
    it: "Esperienza Spa di Lusso",
  },
  "hero.subtitle": {
    de: "Genießen Sie erstklassige Schönheitsbehandlungen, die auf Sie zugeschnitten sind",
    fr: "Profitez de services de beauté haut de gamme adaptés à vos besoins",
    it: "Goditi servizi di bellezza premium su misura per te",
  },
  "hero.cta": {
    de: "Jetzt buchen",
    fr: "Réserver maintenant",
    it: "Prenota ora",
  },

  // Services
  "services.title": {
    de: "Unsere Premium-Dienstleistungen",
    fr: "Nos services premium",
    it: "I nostri servizi premium",
  },
  "services.japanese.title": {
    de: "Japanisches Kopf-Spa",
    fr: "Spa japonais pour la tête",
    it: "Spa giapponese per la testa",
  },
  "services.shellac.title": {
    de: "BIAB & Shellac",
    fr: "BIAB & Shellac",
    it: "BIAB & Shellac",
  },
  "services.sugaring.title": {
    de: "Sugaring",
    fr: "Épilation au sucre",
    it: "Sugaring",
  },
  "services.pmu.title": {
    de: "PMU - Permanent Make-up",
    fr: "PMU - Maquillage permanent",
    it: "PMU - Trucco permanente",
  },

  // Gift Certificates
  "gift.title": {
    de: "Verschenken Sie das Erlebnis",
    fr: "Offrez l'expérience",
    it: "Regala l'esperienza",
  },
  "gift.subtitle": {
    de: "Perfekt für jeden Anlass",
    fr: "Parfait pour toute occasion",
    it: "Perfetto per ogni occasione",
  },
  "gift.cta": {
    de: "Jetzt kaufen",
    fr: "Acheter maintenant",
    it: "Acquista ora",
  },

  // Footer
  "footer.contactUs": {
    de: "Kontakt",
    fr: "Contactez-nous",
    it: "Contattaci",
  },
  "footer.quickLinks": {
    de: "Angebot",
    fr: "Liens rapides",
    it: "Link rapidi",
  },
  "footer.about": {
    de: "Genießen Sie erstklassige Schönheitsbehandlungen, die auf Sie zugeschnitten sind",
    fr: "Profitez de notre expérience spa premium au cœur de Zurich.",
    it: "Goditi la nostra esperienza spa premium nel cuore di Zurigo.",
  },
  "footer.newsletter": {
    de: "Newsletter",
    fr: "Bulletin",
    it: "Newsletter",
  },
  "footer.subscribeText": {
    de: "Abonnieren Sie für Sonderangebote und Updates",
    fr: "Abonnez-vous pour des offres spéciales et des mises à jour",
    it: "Iscriviti per offerte speciali e aggiornamenti",
  },
  "footer.emailPlaceholder": {
    de: "Ihre E-Mail",
    fr: "Votre e-mail",
    it: "La tua email",
  },
  "footer.subscribe": {
    de: "Abonnieren",
    fr: "S'abonner",
    it: "Iscriviti",
  },
  "footer.allRightsReserved": {
    de: "Alle Rechte vorbehalten.",
    fr: "Tous droits réservés.",
    it: "Tutti i diritti riservati.",
  },

  // Common
  "common.loading": {
    de: "Wird geladen...",
    fr: "Chargement...",
    it: "Caricamento...",
  },
  "common.error": {
    de: "Ein Fehler ist aufgetreten",
    fr: "Une erreur est survenue",
    it: "Si è verificato un errore",
  },
};

const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: "de",
  setLanguage: () => {},
  t: () => "",
  isLoading: true,
});

export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("de");
  const [translations, setTranslations] =
    useState<Translations>(defaultTranslations);
  const [isLoading, setIsLoading] = useState(true);

  // Load translations immediately without delay
  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      try {
        // In a real app, you might fetch translations from an API
        // const response = await fetch(`/api/translations/${language}`);
        // const data = await response.json();
        // setTranslations({ ...translations, ...data });

        // For now, we'll just use our default translations
        // No timeout to avoid unnecessary delay
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to load translations:", error);
        setIsLoading(false);
      }
    };

    loadTranslations();
  }, [currentLanguage]);

  // Load user's preferred language from localStorage on initial render
  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferredLanguage") as Language;
    if (savedLanguage && ["de", "fr", "it"].includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const setLanguage = (language: Language) => {
    console.log("Setting language to:", language);
    setCurrentLanguage(language);
    localStorage.setItem("preferredLanguage", language);
  };

  const t = (key: string): string => {
    if (isLoading)
      return (
        translations["common.loading"]?.[currentLanguage] || "Wird geladen..."
      );

    const translation = translations[key]?.[currentLanguage];
    if (!translation) {
      console.warn(
        `Translation missing for key: ${key} in language: ${currentLanguage}`,
      );
      return translations[key]?.["de"] || key;
    }
    return translation;
  };

  return (
    <LanguageContext.Provider
      value={{ currentLanguage, setLanguage, t, isLoading }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
