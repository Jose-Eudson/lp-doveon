"use client";

import { memo, useState } from "react";
import { useTranslation } from "react-i18next";

function TopBarComponent() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // Idiomas disponíveis
  const languages = [
    { code: "pt", label: "Português" },
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
  ];

  const currentLanguage = languages.find(
    (lang) => lang.code === i18n.language
  )?.label;

  const changeLanguage = (langCode: string) => {
    if (typeof i18n.changeLanguage === "function") {
      i18n.changeLanguage(langCode); // Troca o idioma
      setIsOpen(false); // Fecha o menu dropdown
    } else {
      console.error("A função i18n.changeLanguage não está disponível.");
    }
  };

  return (
    <div className="py-4 px-8 flex items-center justify-between border-b border-gray-200">
      {/* Logo */}
      <div className="text-[#1D1D1D] font-bold text-lg">Doveon</div>

      {/* Navegação */}
      <nav>
        <ul className="flex items-center space-x-6">
          <li>
            <button className="font-medium text-[#6E6E6E] hover:text-[#1D1D1D] transition-colors">
              {t("Para Empresas")}
            </button>
          </li>
          <li>
            <button className="font-medium text-[#6E6E6E] hover:text-[#1D1D1D] transition-colors">
              {t("Para Profissionais")}
            </button>
          </li>
          <li>
            <button className="font-medium text-[#6E6E6E] hover:text-[#1D1D1D] transition-colors">
              {t("Blog")}
            </button>
          </li>
          <li>
            <button className="font-medium text-[#6E6E6E] hover:text-[#1D1D1D] transition-colors">
              {t("Papers")}
            </button>
          </li>
          <li>
            <button className="font-medium text-[#6E6E6E] hover:text-[#1D1D1D] transition-colors">
              {t("Entrar")}
            </button>
          </li>
        </ul>
      </nav>

      {/* Botão de troca de idioma */}
      <div className="relative">
        <button
          className="flex items-center text-sm font-medium text-[#6E6E6E] hover:text-[#1D1D1D] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {currentLanguage || "Idioma"}{" "}
          <svg
            className={`w-4 h-4 ml-2 transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        {isOpen && (
          <ul className="absolute right-0 mt-2 bg-white border border-gray-300 rounded shadow-lg w-32">
            {languages.map((lang) => (
              <li
                key={lang.code}
                className="px-4 py-2 text-sm text-[#6E6E6E] hover:bg-gray-100 hover:text-[#1D1D1D] cursor-pointer"
                onClick={() => changeLanguage(lang.code)}
              >
                {lang.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export const TopBar = memo(TopBarComponent);
