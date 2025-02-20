
'use client' 

const navs = [
  { id: 1, name: "Home", href: "about" },
  { id: 2, name: "Signs", href: "zodiac" },
  { id: 3, name: "Contact", href: "contact" },
];

const handleScroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: elementPosition, behavior: "smooth" });
  }
};

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white py-4 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/assets/img/header/logo.webp" alt="Logo" className="w-12 h-12" />
          <h1 className="text-2xl font-bold">Astrology Insights</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6">
          {navs.map((nav) => (
            <a key={nav.id} onClick={() => handleScroll(nav.href)} className="hover:text-gray-400 hover:cursor-pointer transition">
              {nav.name}
            </a>
          ))}
        </nav>

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