import React, { useState } from 'react';
import { User } from 'lucide-react';

interface AvatarImageProps {
  src?: string;
  alt: string;
  name: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const AvatarImage: React.FC<AvatarImageProps> = ({
  src,
  alt,
  name,
  className = '',
  size = 'md'
}) => {
  const [hasError, setHasError] = useState(false);

  const getInitials = (n: string) => {
    return n
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0].toUpperCase())
      .join('');
  };

  const sizeClasses = {
    sm: 'w-10 h-10 text-xs',
    md: 'w-14 h-14 text-sm',
    lg: 'w-18 h-18 text-base',
    xl: 'w-24 h-24 text-xl'
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full overflow-hidden shrink-0 border-2 border-neutral-700 bg-neutral-800 text-white font-bold select-none ${sizeClasses[size]} ${className}`}
    >
      {src && !hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-900 text-[#FFD600]">
          {name ? (
            <span className="font-extrabold tracking-wider">{getInitials(name)}</span>
          ) : (
            <User className="w-1/2 h-1/2 text-neutral-400" />
          )}
        </div>
      )}
    </div>
  );
};
