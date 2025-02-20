
'use client'
import { Button } from "./ui/button/button";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const navs = [
  { id: 1, name: "About Maria", href: "about" },
  { id: 2, name: "Course", href: "product" },
  { id: 3, name: "Signs", href: "zodiac" },
  { id: 4, name: "Contact", href: "contact" },
];

const languages = [
  { code: 'en', label: 'English'},
  { code: 'rs', label: 'Russian'}
]

const handleScroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: elementPosition, behavior: "smooth" });
  }
};

export default function Header() {

  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white py-4 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/assets/img/header/logo.webp" alt="Logo" className="w-12 h-12" />
        </div>

        {/* Navigation */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex gap-6">
          {navs.map((nav) => (
            <a key={nav.id} onClick={() => handleScroll(nav.href)} className="hover:text-gray-400 hover:cursor-pointer transition">
              {nav.name}
            </a>
          ))}
        </nav>

        {/* Langauge Selection */}
        <div className="relative">

        {/* Language Button */}
        <button
          className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {languages.find((lang) => lang.code === selectedLanguage)?.label}
          <ChevronDown className="w-5 h-5" />
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-gray-700 rounded-lg shadow-lg">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setSelectedLanguage(lang.code);
                  setDropdownOpen(false);
                }}
                className="block w-full px-4 py-2 text-left hover:bg-gray-600"
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