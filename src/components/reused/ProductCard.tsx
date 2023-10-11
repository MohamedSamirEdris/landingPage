import { ReactNode } from 'react';

interface ProductCardProps {
  icon: string;
  title: string;
  subtitle: ReactNode;
  description: string;
}

const ProductCard = ({
  icon,
  title,
  subtitle,
  description,
}: ProductCardProps) => {
  return (
    <div className={`bg-white shadow-lg p-4 sm:p-6 md:p-8 flex flex-col items-start justify-center space-y-2 sm:space-y-4 md:space-y-6 sm:rounded-lg`}>
      <img
        src={icon}
        alt={title}
        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
      />
      <h2 className="text-lg sm:text-xl md:text-2xl font-medium">{title}</h2>
      <p className="text-sm sm:text-base md:text-lg font-medium">{subtitle}</p>
      <p className="text-xs sm:text-sm md:text-base text-red-400">
        {description}
      </p>
    </div>
  );
};

export default ProductCard;
