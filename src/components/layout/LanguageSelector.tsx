import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useLanguage } from "../../context/LanguageContext";

type Language = {
  code: string;
  name: string;
  flag: string;
};

type LanguageSelectorProps = {
  onLanguageChange?: (languageCode: string) => void;
  currentLanguage?: string;
  className?: string;
};

const languages: Language[] = [
  { code: "de", name: "DE", flag: "🇩🇪" },
  { code: "fr", name: "FR", flag: "🇫🇷" },
  { code: "it", name: "IT", flag: "🇮🇹" },
];

const LanguageSelector = ({
  onLanguageChange = () => {},
  currentLanguage,
  className = "",
}: LanguageSelectorProps) => {
  const { currentLanguage: contextLanguage, setLanguage } = useLanguage();
  const activeLanguage = currentLanguage || contextLanguage;

  const [selected, setSelected] = useState<Language>(
    languages.find((lang) => lang.code === activeLanguage) || languages[0],
  );

  useEffect(() => {
    const language = languages.find((lang) => lang.code === activeLanguage);
    if (language) {
      setSelected(language);
    }
  }, [activeLanguage]);

  const handleLanguageSelect = (language: Language) => {
    setSelected(language);
    onLanguageChange(language.code);
    setLanguage(language.code as any);
  };

  return (
    <div className={`relative rounded-md ${className}`}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className="flex items-center justify-between px-2 py-1 text-sm font-medium text-[#3c2a21] bg-transparent hover:bg-[#e6d5c5]/50 focus:outline-none rounded-sm"
            aria-haspopup="true"
          >
            <span className="flex items-center">
              <span>
                {selected.flag} {selected.name}
              </span>
            </span>
            <ChevronDown className="w-3 h-3 ml-1" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="min-w-[60px] bg-white shadow-sm p-0"
        >
          {languages.map((language) => (
            <DropdownMenuItem
              key={language.code}
              className={`flex items-center justify-center px-2 py-1 text-sm text-[#3c2a21] hover:bg-[#fae8d8] cursor-pointer ${selected.code === language.code ? "bg-[#fae8d8] font-medium" : ""}`}
              onClick={() => handleLanguageSelect(language)}
            >
              {language.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSelector;
