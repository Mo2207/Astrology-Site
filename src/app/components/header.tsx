
'use client'

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button/button";

// const navs = [
//   { id: 1, name: "About", href: "about" },
//   { id: 2, name: "Course", href: "course" },
//   { id: 3, name: "Contact", href: "contact" },
// ];

const languages = [
  { code: 'en', label: 'English'},
  { code: 'ru', label: 'Russian'}
]

// const handleScroll = (id: string) => {
//   const element = document.getElementById(id);
//   if (element) {
//     const offset = 80;
//     const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
//     window.scrollTo({ top: elementPosition, behavior: "smooth" });
//   }
// };

export default function Header() {
  const { t, i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
    setDropdownOpen(false);
  }

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLang);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white py-4 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/assets/img/header/logo.svg" alt="Logo" className="w-12 h-12" />
        </div>

        {/* Navigation */}
        {/* <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex gap-6">
          {navs.map((nav) => (
            <a key={nav.id} onClick={() => handleScroll(nav.href)} className="hover:text-gray-400 hover:cursor-pointer transition">
              {nav.name}
            </a>
          ))}
        </nav> */}

        <Button className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex gap-6">
          {t("buttons.buy_course")}
        </Button>

        {/* Langauge Selection */}
        <div className="relative">

        {/* Language Button */}
        <Button
          className="flex items-center"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {languages.find((lang) => lang.code === i18n.language)?.label}
          <ChevronDown className="w-5 h-5" />
        </Button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-gray-700 rounded-lg shadow-lg">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  changeLanguage(lang.code);
                  setDropdownOpen(false);
                }}
                className="block w-full px-4 py-2 text-left hover:bg-gray-600 hover:rounded-lg"
              >
                {lang.label}
              </button>
            ))}
          </div>
        )}

        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white hover:text-yellow-400">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}