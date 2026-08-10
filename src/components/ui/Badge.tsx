import React from 'react';
import { clsx } from 'clsx';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'purple' | 'yellow' | 'green' | 'blue' | 'glass';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  className = '',
  icon,
}) => {
  const variantStyles = {
    cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30 glow-border-cyan',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/30 glow-border-purple',
    yellow: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30 glow-box-yellow',
    green: 'bg-[#089396]/10 text-emerald-400 border-[#089396]/30',
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    glass: 'bg-[#F7FAFB] text-[#021433]/70 border-[#F7FAFB] backdrop-blur-md',
  };

  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full border transition-all duration-300',
        variantStyles[variant],
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
