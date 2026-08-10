import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, ArrowRight, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; path: string }[];
  onJoinClick?: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navLinks,
  onJoinClick,
}) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-navy-950/95 backdrop-blur-2xl flex flex-col justify-between p-6 md:hidden overflow-y-auto"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between">
            <Link to="/" onClick={onClose} className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-[#14519E] p-[1.5px]">
                <div className="w-full h-full bg-navy-950 rounded-[10.5px] flex items-center justify-center">
                  <Zap className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <span className="text-xl font-extrabold text-[#021433]">ZYLEARN</span>
            </Link>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#F7FAFB] border border-[#F7FAFB] text-[#021433]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav Items */}
          <div className="my-8 flex flex-col gap-3">
            {navLinks.map((link, idx) => {
              const isActive = location.pathname === link.path;
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={onClose}
                    className={`flex items-center justify-between text-lg font-bold p-4 rounded-xl border transition-all ${
                      isActive
                        ? 'bg-[#14519E] border-cyan-500/50 text-cyan-400'
                        : 'bg-white/[0.02] border-white/5 text-[#021433] hover:bg-[#F7FAFB]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 opacity-60" />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col gap-3 pt-4 border-t border-[#F7FAFB]">
            <Link to="/programs" onClick={onClose} className="w-full">
              <Button variant="outline" className="w-full justify-center">
                Explore Programs
              </Button>
            </Link>
            <Button
              variant="primary"
              className="w-full justify-center"
              icon={<Sparkles className="w-4 h-4" />}
              onClick={() => {
                onClose();
                if (onJoinClick) onJoinClick();
              }}
            >
              Join Zylearn Now
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
