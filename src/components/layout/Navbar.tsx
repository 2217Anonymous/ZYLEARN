import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDown, Cpu, Code2, Cloud, Database,
  Instagram, TrendingUp, Rocket, MapPin, Menu as MenuIcon, X,
  Linkedin, Facebook, Twitter, MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onJoinClick: () => void;
}

const C = {
  black: '#2a2a2e',
  red: '#E53935',
};

/** Half-nav: single “Z” mark */
const LogoZ: React.FC<{ className?: string }> = ({ className = '' }) => (
  <Link to="/" className={`inline-flex items-center flex-shrink-0 ${className}`} aria-label="Zylearn home">
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
const LogoWordmark: React.FC<{ className?: string }> = ({ className = '' }) => (
  <Link
    to="/"
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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const halfNav = isHome && !scrolled;

  useEffect(() => {
    setSideMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = (active: boolean) =>
    `px-2.5 xl:px-3.5 py-2 text-[14px] xl:text-[15px] font-semibold tracking-wide transition-colors whitespace-nowrap ${
      active ? 'text-white' : 'text-white/80 hover:text-white'
    }`;

  const ProgramsMenu = () => (
    <div
      className="relative"
      onMouseEnter={() => setActiveDropdown('courses')}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <button type="button" className={`flex items-center gap-1 ${linkClass(activeDropdown === 'courses' || location.pathname.includes('/programs'))}`}>
        Programs <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'courses' ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {activeDropdown === 'courses' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="absolute top-full left-0 pt-2 w-80 z-50"
          >
            <div className="bg-white text-black rounded-xl shadow-2xl border border-black/5 p-2 space-y-0.5">
              {[
                { to: '/programs', icon: Cpu, title: 'AI & LLM Mastery', desc: 'Prompt Eng, LangChain & Agents' },
                { to: '/programs', icon: Code2, title: 'Full Stack Web Dev', desc: 'React, Node & Deploy' },
                { to: '/programs', icon: Cloud, title: 'Data & Cloud', desc: 'AWS, GCP & Vector DB' },
                { to: '/programs', icon: Database, title: 'CRM Sales Automation', desc: 'HubSpot, Zoho & Pipelines' },
              ].map((item) => (
                <Link key={item.title} to={item.to} className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F5F5F5] transition-colors">
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

  const WorkshopsMenu = () => (
    <div
      className="relative"
      onMouseEnter={() => setActiveDropdown('workshops')}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <button type="button" className={`flex items-center gap-1 ${linkClass(activeDropdown === 'workshops' || location.pathname.includes('/workshops'))}`}>
        Workshops <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'workshops' ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {activeDropdown === 'workshops' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="absolute top-full left-0 pt-2 w-96 z-50"
          >
            <div className="bg-white text-black rounded-xl shadow-2xl border border-black/5 p-2 space-y-0.5">
              {[
                { to: '/workshops', icon: Instagram, title: 'Instagram Workshops', desc: 'Reels, Growth & Monetization' },
                { to: '/workshops', icon: TrendingUp, title: 'Digital Marketing', desc: 'SEO, Ads & Analytics' },
                { to: '/workshops', icon: Rocket, title: 'Entrepreneurship', desc: 'Startup & Pitching' },
                { to: '/workshops', icon: MapPin, title: 'Google My Business', desc: 'Local Search & Reviews' },
              ].map((item) => (
                <Link key={item.title} to={item.to} className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F5F5F5] transition-colors">
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

  const NavLinks = () => (
    <>
      <Link to="/" className={linkClass(location.pathname === '/')}>Home</Link>
      <Link to="/about" className={linkClass(location.pathname === '/about')}>About</Link>
      <ProgramsMenu />
      <WorkshopsMenu />
      <Link to="/projects" className={linkClass(location.pathname === '/projects')}>Projects</Link>
      <Link to="/contact" className={linkClass(location.pathname === '/contact')}>Contact</Link>
      <Link to="/career" className={linkClass(location.pathname === '/career')}>Career</Link>
    </>
  );

  const Socials = ({ dark }: { dark?: boolean }) => (
    <div className="flex items-center gap-0.5">
      <a href="https://facebook.com" target="_blank" rel="noreferrer" className={`w-9 h-9 flex items-center justify-center transition-colors ${dark ? 'text-black/70 hover:text-black' : 'text-white/80 hover:text-white'}`} aria-label="Facebook">
        <Facebook className="w-4 h-4" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer" className={`w-9 h-9 flex items-center justify-center transition-colors ${dark ? 'text-black/70 hover:text-black' : 'text-white/80 hover:text-white'}`} aria-label="Twitter">
        <Twitter className="w-4 h-4" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer" className={`w-9 h-9 flex items-center justify-center transition-colors ${dark ? 'text-black/70 hover:text-black' : 'text-white/80 hover:text-white'}`} aria-label="Instagram">
        <Instagram className="w-4 h-4" />
      </a>
      <a
        href="https://wa.me/919876543210"
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Desktop */}
      <div className="hidden lg:block">
        <AnimatePresence mode="wait">
          {halfNav ? (
            /* —— Half black menu (left) + socials (right) — reference layout —— */
            <motion.div
              key="half"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-2 h-[90px] mt-16"
            >
              <div className="bg-[#2a2a2e] text-white flex items-center h-full pl-6 xl:pl-10">
                <LogoZ className="mr-3 xl:mr-5" />

                <div className="flex items-center flex-1 justify-center min-w-0 gap-0 overflow-visible">
                  <NavLinks />
                </div>

                <button
                  type="button"
                  onClick={onJoinClick}
                  className="flex-shrink-0 self-stretch px-5 xl:px-7 text-[11px] xl:text-xs font-bold uppercase tracking-wider text-white"
                  style={{ backgroundColor: C.red }}
                >
                  Book Spot Now
                </button>
              </div>

              <div className="bg-transparent flex items-center justify-end h-full pr-8 xl:pr-12">
                <Socials dark />
              </div>
            </motion.div>
          ) : (
            /* —— Full black bar after scroll / other pages —— */
            <motion.nav
              key="full"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="bg-[#2a2a2e] text-white shadow-lg"
            >
              <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-3 px-6 lg:px-8 h-[72px]">
                <LogoWordmark />
                <div className="flex items-center flex-1 justify-center gap-0.5">
                  <NavLinks />
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <button
                    type="button"
                    onClick={onJoinClick}
                    className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white"
                    style={{ backgroundColor: C.red }}
                  >
                    Book Spot Now
                  </button>
                  <div className="hidden xl:flex items-center border-l border-white/20 pl-3">
                    <Socials />
                  </div>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile — solid bar */}
      <nav className="lg:hidden bg-[#2a2a2e] text-white">
        <div className="flex items-center justify-between gap-3 px-4 sm:px-6 h-[64px]">
          <LogoWordmark />
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/919876543210"
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
              <Link to="/" onClick={() => setSideMenuOpen(false)} className="block font-semibold">Home</Link>
              <Link to="/about" onClick={() => setSideMenuOpen(false)} className="block font-semibold">About</Link>
              <Link to="/programs" onClick={() => setSideMenuOpen(false)} className="block font-semibold">Programs</Link>
              <Link to="/workshops" onClick={() => setSideMenuOpen(false)} className="block font-semibold">Workshops</Link>
              <Link to="/projects" onClick={() => setSideMenuOpen(false)} className="block font-semibold">Projects</Link>
              <Link to="/contact" onClick={() => setSideMenuOpen(false)} className="block font-semibold">Contact</Link>
              <Link to="/career" onClick={() => setSideMenuOpen(false)} className="block font-semibold">Career</Link>
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
