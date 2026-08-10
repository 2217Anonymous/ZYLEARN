import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from './Badge';

interface SectionHeadingProps {
  badgeText?: string;
  badgeVariant?: 'cyan' | 'purple' | 'yellow' | 'green' | 'blue';
  title: string;
  highlightText?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badgeText,
  badgeVariant = 'cyan',
  title,
  highlightText,
  subtitle,
  align = 'center',
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 sm:mb-16 ${align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}
    >
      {badgeText && (
        <div className="mb-4 inline-block">
          <Badge variant={badgeVariant}>{badgeText}</Badge>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#021433] tracking-tight leading-tight">
        {title}{' '}
        {highlightText && (
          <span className="bg-[#14519E] from-cyan-400 via-electric-400 to-purple-400 bg-clip-text text-transparent glow-text-cyan">
            {highlightText}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#021433]/55 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
