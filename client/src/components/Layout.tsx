import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

function LogoSvg() {
  return (
    <svg fill="none" height="28" viewBox="0 0 28 28" width="28" xmlns="http://www.w3.org/2000/svg">
      <rect className="fill-[#000000] dark:fill-[#F5F4F0]" height="28" width="28" />
      <rect fill="#ff3a52" height="4" width="12" x="4" y="4" />
      <rect className="fill-[#ffffff] dark:fill-[#0F0F10]" height="2" width="20" x="4" y="12" />
      <rect className="fill-[#ffffff] dark:fill-[#0F0F10]" height="2" width="14" x="4" y="18" />
      <rect className="fill-[#ffffff] dark:fill-[#0F0F10]" height="2" width="8" x="4" y="22" />
    </svg>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  if (!toggleTheme) return null;

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-8 h-8 border border-[#E5E2DC] dark:border-[#444] hover:border-[#0F0F10] dark:hover:border-[#888] transition-colors duration-150"
      title={theme === "light" ? "Mode sombre" : "Mode clair"}
    >
      {theme === "light" ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      )}

    </button>
  );
}

interface HeaderProps {
  activePage?: "home" | "archives" | "about" | "timeline";
}

export function Header({ activePage = "home" }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = (page: string) =>
    activePage === page
      ? "text-xs tracking-[0.15em] uppercase text-[#0F0F10] dark:text-[#F5F4F0] border-b border-[#0F0F10] dark:border-[#F5F4F0] pb-0.5"
      : "text-xs tracking-[0.15em] uppercase text-[#8A8A8A] hover:text-[#0F0F10] dark:hover:text-[#F5F4F0] transition-colors duration-150";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5F4F0] dark:bg-[#1A1A1D] border-b border-[#E5E2DC] dark:border-[#333]">
        <div className="container flex items-center justify-between h-14">
          <a href="/" className="flex items-center gap-2 text-sm tracking-[0.15em] uppercase text-[#0F0F10] dark:text-[#F5F4F0]">
            <LogoSvg />
            <span className="hidden sm:inline">VEILLE STRATÉGIQUE IA & WEB</span>
            <span className="sm:hidden">VEILLE IA</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className={navLinkClass("home")}>VEILLE ACTUELLE</a>
            <a href="/archives" className={navLinkClass("archives")}>ARCHIVES</a>
            <a href="/timeline" className={navLinkClass("timeline")}>TIMELINE</a>
            <a href="/about" className={navLinkClass("about")}>À PROPOS</a>
            <ThemeToggle />
          </nav>
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen(true)}
              className="text-xs tracking-[0.15em] uppercase text-[#0F0F10] dark:text-[#F5F4F0]"
            >
              MENU
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#2C2E33] flex flex-col items-center justify-center transition-opacity duration-200">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-6 text-white text-sm tracking-[0.15em] uppercase"
          >
            FERMER
          </button>
          <nav className="flex flex-col items-center gap-8">
            <a href="/" className={`text-3xl tracking-[0.1em] uppercase ${activePage === "home" ? "text-[#FF4757]" : "text-white hover:text-[#FF4757]"} transition-colors duration-150`}>VEILLE ACTUELLE</a>
            <div className="w-16 h-px bg-[#555]" />
            <a href="/archives" className={`text-3xl tracking-[0.1em] uppercase ${activePage === "archives" ? "text-[#FF4757]" : "text-white hover:text-[#FF4757]"} transition-colors duration-150`}>ARCHIVES</a>
            <div className="w-16 h-px bg-[#555]" />
            <a href="/timeline" className={`text-3xl tracking-[0.1em] uppercase ${activePage === "timeline" ? "text-[#FF4757]" : "text-white hover:text-[#FF4757]"} transition-colors duration-150`}>TIMELINE</a>
            <div className="w-16 h-px bg-[#555]" />
            <a href="/about" className={`text-3xl tracking-[0.1em] uppercase ${activePage === "about" ? "text-[#FF4757]" : "text-white hover:text-[#FF4757]"} transition-colors duration-150`}>À PROPOS</a>
          </nav>
        </div>
      )}
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0F0F10] text-[#F5F4F0] py-12 border-t border-[#333]">
      <div className="container flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <nav className="flex flex-wrap gap-6">
          <a href="/" className="text-xs tracking-[0.15em] uppercase text-[#F5F4F0] hover:text-[#FF4757] transition-colors duration-150">VEILLE ACTUELLE</a>
          <a href="/archives" className="text-xs tracking-[0.15em] uppercase text-[#8A8A8A] hover:text-[#FF4757] transition-colors duration-150">ARCHIVES</a>
          <a href="/about" className="text-xs tracking-[0.15em] uppercase text-[#8A8A8A] hover:text-[#FF4757] transition-colors duration-150">À PROPOS</a>
        </nav>
      </div>
    </footer>
  );
}
