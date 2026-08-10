import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDown, Cpu, Code2, Cloud, Database,
  Instagram, TrendingUp, Rocket, MapPin, Menu as MenuIcon, X,
  Linkedin, Facebook, Twitter, MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTACT } from '@/data/contact';

interface NavbarProps {
  onJoinClick: () => void;
}

const C = {
  black: '#2a2a2e',
  red: '#E53935',
};

const PROGRAM_ITEMS = [
  { to: '/programs', icon: Cpu, title: 'AI & LLM Mastery', desc: 'Prompt Eng, LangChain & Agents' },
  { to: '/programs', icon: Code2, title: 'Full Stack Web Dev', desc: 'React, Node & Deploy' },
  { to: '/programs', icon: Cloud, title: 'Data & Cloud', desc: 'AWS, GCP & Vector DB' },
  { to: '/programs', icon: Database, title: 'CRM Sales Automation', desc: 'HubSpot, Zoho & Pipelines' },
] as const;

const WORKSHOP_ITEMS = [
  { to: '/workshops', icon: Instagram, title: 'Instagram Workshops', desc: 'Reels, Growth & Monetization' },
  { to: '/workshops', icon: TrendingUp, title: 'Digital Marketing', desc: 'SEO, Ads & Analytics' },
  { to: '/workshops', icon: Rocket, title: 'Entrepreneurship', desc: 'Startup & Pitching' },
  { to: '/workshops', icon: MapPin, title: 'Google My Business', desc: 'Local Search & Reviews' },
] as const;

type DropdownId = 'courses' | 'workshops';

interface NavDropdownProps {
  id: DropdownId;
  label: string;
  open: boolean;
  activePath: boolean;
  items: typeof PROGRAM_ITEMS | typeof WORKSHOP_ITEMS;
  panelWidth: string;
  linkClass: (active: boolean) => string;
  onOpen: (id: DropdownId) => void;
  onClose: () => void;
}

/** Stable module-level dropdown — must NOT be declared inside Navbar (remount kills hover) */
const NavDropdown: React.FC<NavDropdownProps> = ({
  id,
  label,
  open,
  activePath,
  items,
  panelWidth,
  linkClass,
  onOpen,
  onClose,
}) => (
  <div
    className="relative"
    onMouseEnter={() => onOpen(id)}
    onMouseLeave={onClose}
  >
    <button
      type="button"
      aria-expanded={open}
      aria-haspopup="true"
      className={`flex items-center gap-0.5 xl:gap-1 ${linkClass(open || activePath)}`}
    >
      {label}
      <ChevronDown
        className={`w-3 h-3 xl:w-3.5 xl:h-3.5 transition-transform ${open ? 'rotate-180' : ''}`}
      />
    </button>
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.15 }}
          className={`absolute top-full left-0 pt-2 ${panelWidth} z-[200]`}
        >
          <div className="bg-white text-black rounded-xl shadow-2xl border border-black/5 p-2 space-y-0.5">
            {items.map((item) => (
              <Link
                key={item.title}
                to={item.to}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F5F5F5] transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-[#2a2a2e] text-white flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-sm text-black">{item.title}</p>
                  <p className="text-xs text-[#666666]">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

/** Half-nav: single “Z” mark */
const LogoZ: React.FC<{ className?: string; onNavigateHome?: (e: React.MouseEvent) => void }> = ({
  className = '',
  onNavigateHome,
}) => (
  <Link
    to="/"
    onClick={onNavigateHome}
    className={`inline-flex items-center flex-shrink-0 ${className}`}
    aria-label="Zylearn home"
  >
    <span
      className="text-white font-black leading-none select-none"
      style={{
        fontFamily: 'Georgia, "Times New Roman", serif',
        fontSize: '1.85rem',
        letterSpacing: '-0.06em',
        width: '2.25rem',
        display: 'inline-flex',
        justifyContent: 'center',
      }}
    >
      Z
    </span>
  </Link>
);

/** Full-nav: ZYLEARN + AI FOR ALL */
const LogoWordmark: React.FC<{ className?: string; onNavigateHome?: (e: React.MouseEvent) => void }> = ({
  className = '',
  onNavigateHome,
}) => (
  <Link
    to="/"
    onClick={onNavigateHome}
    className={`inline-flex flex-col justify-center flex-shrink-0 leading-none ${className}`}
    aria-label="Zylearn home — AI For All"
  >
    <span className="text-white font-black uppercase tracking-[-0.04em] text-[1.15rem] xl:text-[1.35rem]">
      ZYLEARN
    </span>
    <span
      className="mt-0.5 font-bold uppercase tracking-[0.22em] text-[9px] xl:text-[10px]"
      style={{ color: '#F5C518' }}
    >
      AI FOR ALL
    </span>
  </Link>
);

export const Navbar: React.FC<NavbarProps> = ({ onJoinClick }) => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownId | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = React.useRef<number | null>(null);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const halfNav = isHome && !scrolled;

  useEffect(() => {
    setSideMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Hysteresis avoids flicker at the threshold when scrolling back to the hero
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled((prev) => {
        if (!prev && y > 72) return true;
        if (prev && y < 20) return false;
        return prev;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    };
  }, []);

  const goHome = (e: React.MouseEvent) => {
    setSideMenuOpen(false);
    setActiveDropdown(null);
    if (location.pathname === '/') {
      e.preventDefault();
      // Do NOT force half-nav while still mid-page — wait until scroll reaches top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openDropdown = (id: DropdownId) => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setActiveDropdown(id);
  };

  const closeDropdown = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    // Tiny delay so the pointer can move into the panel without closing
    closeTimer.current = window.setTimeout(() => {
      setActiveDropdown(null);
      closeTimer.current = null;
    }, 120);
  };

  const linkClass = (active: boolean) =>
    `px-2 lg:px-2.5 xl:px-3.5 2xl:px-4 py-2 text-[13px] lg:text-[13.5px] xl:text-[14px] 2xl:text-[15px] font-semibold tracking-wide transition-colors whitespace-nowrap ${
      active ? 'text-white' : 'text-white/80 hover:text-white'
    }`;

  /** Fresh JSX per call — laptop + desktop bars both mount (one is CSS-hidden) */
  const renderNavLinks = () => (
    <>
      <Link to="/" onClick={goHome} className={linkClass(location.pathname === '/')}>
        Home
      </Link>
      <Link to="/about" className={linkClass(location.pathname === '/about')}>About</Link>
      <NavDropdown
        id="courses"
        label="Programs"
        open={activeDropdown === 'courses'}
        activePath={location.pathname.includes('/programs')}
        items={PROGRAM_ITEMS}
        panelWidth="w-80"
        linkClass={linkClass}
        onOpen={openDropdown}
        onClose={closeDropdown}
      />
      <NavDropdown
        id="workshops"
        label="Workshops"
        open={activeDropdown === 'workshops'}
        activePath={location.pathname.includes('/workshops')}
        items={WORKSHOP_ITEMS}
        panelWidth="w-96"
        linkClass={linkClass}
        onOpen={openDropdown}
        onClose={closeDropdown}
      />
      <Link to="/projects" className={linkClass(location.pathname === '/projects')}>Projects</Link>
      <Link to="/contact" className={linkClass(location.pathname === '/contact')}>Contact</Link>
    </>
  );

  const CtaButton = ({
    stretch,
    compact,
  }: {
    stretch?: boolean;
    compact?: boolean;
  }) => (
    <button
      type="button"
      onClick={onJoinClick}
      className={
        stretch
          ? 'flex-shrink-0 self-stretch px-3 xl:px-5 2xl:px-7 text-[10px] xl:text-[11px] 2xl:text-xs font-bold uppercase tracking-wider text-white'
          : 'inline-flex items-center justify-center px-3.5 xl:px-5 py-2.5 text-[10px] xl:text-xs font-bold uppercase tracking-wider text-white flex-shrink-0'
      }
      style={{ backgroundColor: C.red }}
    >
      {compact ? 'Book Now' : 'Book Spot Now'}
    </button>
  );

  const Socials = ({ dark }: { dark?: boolean }) => (
    <div className="flex items-center gap-0.5">
      <a href="https://facebook.com" target="_blank" rel="noreferrer" className={`w-9 h-9 flex items-center justify-center transition-colors ${dark ? 'text-black/70 hover:text-black' : 'text-white/80 hover:text-white'}`} aria-label="Facebook">
        <Facebook className="w-4 h-4" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer" className={`w-9 h-9 flex items-center justify-center transition-colors ${dark ? 'text-black/70 hover:text-black' : 'text-white/80 hover:text-white'}`} aria-label="Twitter">
        <Twitter className="w-4 h-4" />
      </a>
      <a href={CONTACT.instagramUrl} target="_blank" rel="noreferrer" className={`w-9 h-9 flex items-center justify-center transition-colors ${dark ? 'text-black/70 hover:text-black' : 'text-white/80 hover:text-white'}`} aria-label="Instagram">
        <Instagram className="w-4 h-4" />
      </a>
      <a
        href={CONTACT.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="w-9 h-9 rounded-full flex items-center justify-center text-white ml-1.5 shadow-md"
        style={{ backgroundColor: C.red }}
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-4 h-4" />
      </a>
    </div>
  );

  const FullWidthBar = ({ showSocials }: { showSocials?: boolean }) => (
    <div className="bg-[#2a2a2e] text-white shadow-lg overflow-visible">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-2 xl:gap-3 px-4 lg:px-6 xl:px-8 h-[64px] xl:h-[72px] overflow-visible">
        <LogoWordmark onNavigateHome={goHome} />
        <div className="flex items-center flex-1 justify-center min-w-0 gap-0 overflow-visible">
          {renderNavLinks()}
        </div>
        <div className="flex items-center gap-2 xl:gap-3 flex-shrink-0">
          <CtaButton compact />
          {showSocials && (
            <div className="hidden 2xl:flex items-center border-l border-white/20 pl-3">
              <Socials />
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 overflow-visible">
      {/* Desktop / laptop */}
      <div className="hidden lg:block overflow-visible">
        {/* Laptop: stable full-width bar — no half/full remount (prevents hero flash on scroll-up) */}
        <div className="xl:hidden overflow-visible">
          <FullWidthBar showSocials={scrolled} />
        </div>

        {/* Wide desktop: keep both layouts mounted — CSS toggle avoids remount flash */}
        <div className="hidden xl:block overflow-visible">
          <div
            className={`grid grid-cols-[minmax(0,1.65fr)_minmax(0,0.85fr)] 2xl:grid-cols-[minmax(0,1.55fr)_minmax(0,0.95fr)] h-[90px] mt-16 overflow-visible ${
              halfNav ? '' : 'invisible pointer-events-none absolute inset-x-0 top-0'
            }`}
            aria-hidden={!halfNav}
          >
            <div className="bg-[#2a2a2e] text-white flex items-center h-full min-w-0 pl-4 2xl:pl-10 overflow-visible relative z-[60]">
              <LogoZ className="mr-2 2xl:mr-5" onNavigateHome={goHome} />
              <div className="flex items-center flex-1 justify-center min-w-0 gap-0 overflow-visible">
                {renderNavLinks()}
              </div>
              <CtaButton stretch compact={false} />
            </div>
            <div className="bg-transparent flex items-center justify-end h-full pr-8 2xl:pr-12">
              <Socials dark />
            </div>
          </div>
          <div className={halfNav ? 'hidden' : 'block'}>
            <FullWidthBar showSocials />
          </div>
        </div>
      </div>

      {/* Mobile — solid bar */}
      <nav className="lg:hidden bg-[#2a2a2e] text-white">
        <div className="flex items-center justify-between gap-3 px-4 sm:px-6 h-[64px]">
          <LogoWordmark onNavigateHome={goHome} />
          <div className="flex items-center gap-2">
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center text-white"
              style={{ backgroundColor: C.red }}
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setSideMenuOpen(!sideMenuOpen)}
              className="w-10 h-10 flex items-center justify-center text-white"
              aria-label="Menu"
            >
              {sideMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {sideMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#2a2a2e] text-white border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              <Link to="/" onClick={goHome} className="block font-semibold">Home</Link>
              <Link to="/about" onClick={() => setSideMenuOpen(false)} className="block font-semibold">About</Link>
              <Link to="/programs" onClick={() => setSideMenuOpen(false)} className="block font-semibold">Programs</Link>
              <Link to="/workshops" onClick={() => setSideMenuOpen(false)} className="block font-semibold">Workshops</Link>
              <Link to="/projects" onClick={() => setSideMenuOpen(false)} className="block font-semibold">Projects</Link>
              <Link to="/contact" onClick={() => setSideMenuOpen(false)} className="block font-semibold">Contact</Link>
              <button
                type="button"
                onClick={() => { setSideMenuOpen(false); onJoinClick(); }}
                className="w-full py-3 font-bold uppercase text-xs tracking-wider text-white"
                style={{ backgroundColor: C.red }}
              >
                Book Spot Now
              </button>
              <div className="flex items-center gap-3 pt-2">
                <Linkedin className="w-5 h-5" />
                <Instagram className="w-5 h-5" />
                <Facebook className="w-5 h-5" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
