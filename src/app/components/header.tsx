
const navs = [
  { id: 1, name: "Home", href: "Homepage" },
  { id: 2, name: "About", href: "about" },
  { id: 3, name: "Contact", href: "contact" },
];

export default function Header() {
  return (
    <header className="bg-[#302E80] text-white py-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/assets/img/header/logo.webp" alt="Logo" className="w-12 h-12" />
          <h1 className="text-2xl font-bold">Astrology Insights</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6">
          {navs.map((nav) => (
            <a key={nav.id} href={nav.href} className="hover:text-yellow-400 transition">
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