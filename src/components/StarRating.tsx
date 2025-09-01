import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const StarRating: React.FC<StarRatingProps> = ({ 
  rating, 
  size = 'sm', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  };

  const starSize = sizeClasses[size];

  const renderStar = (index: number) => {
    const starNumber = index + 1;
    const filled = rating >= starNumber;
    const halfFilled = rating >= starNumber - 0.5 && rating < starNumber;

    if (filled) {
      return (
        <Star 
          key={index} 
          className={`${starSize} fill-yellow-400 text-yellow-400`}
        />
      );
    } else if (halfFilled) {
      return (
        <div key={index} className="relative">
          <Star className={`${starSize} text-gray-300`} />
          <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
            <Star className={`${starSize} fill-yellow-400 text-yellow-400`} />
          </div>
        </div>
      );
    } else {
      return (
        <Star 
          key={index} 
          className={`${starSize} text-gray-300`}
        />
      );
    }
  };

  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      {[0, 1, 2, 3, 4].map(renderStar)}
    </div>
  );
};