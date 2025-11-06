import { ShoppingBag, Instagram, Facebook, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Shawls", href: "#products" },
    { label: "Resin Art", href: "#products" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/60 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <ShoppingBag className="h-6 w-6 text-rose-600" />
            <span className="font-semibold tracking-tight text-gray-900">Shawl & Resin Studio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-gray-700 hover:text-rose-600 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center rounded-full bg-rose-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-rose-700 transition-colors">
              Enquire
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-gray-100">
              <Instagram className="h-5 w-5 text-gray-700" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-gray-100">
              <Facebook className="h-5 w-5 text-gray-700" />
            </a>
          </div>

          <button onClick={() => setOpen((v) => !v)} className="md:hidden p-2 rounded-md hover:bg-gray-100">
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="text-gray-700 hover:text-rose-600">
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-md bg-rose-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-rose-700">
                Enquire
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
