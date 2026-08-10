import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx } from 'clsx';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'yellow' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  glow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  className = '',
  glow = true,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 relative overflow-hidden select-none active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-2.5 font-bold',
  };

  const variantStyles = {
    primary: clsx(
      'bg-[#E53935] text-white shadow-lg shadow-red-500/25 hover:bg-[#c62828] hover:shadow-red-500/40',
      glow && 'after:absolute after:inset-0 after:rounded-xl after:bg-white/20 after:opacity-0 hover:after:opacity-100 after:transition-opacity'
    ),
    secondary: 'bg-[#E53935] text-white border border-[#E53935] hover:bg-[#c62828]',
    yellow: 'bg-[#E53935] text-white font-bold shadow-lg shadow-red-500/25 hover:bg-[#c62828] hover:scale-[1.02]',
    outline: 'bg-transparent text-[#E53935] border-2 border-[#E53935] hover:bg-[#E53935] hover:text-white',
    ghost: 'text-[#E53935] hover:bg-[#E53935]/10',
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={clsx(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0 transition-transform group-hover:translate-x-1">{icon}</span>}
    </motion.button>
  );
};
