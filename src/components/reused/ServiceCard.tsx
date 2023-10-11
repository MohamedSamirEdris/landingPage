interface CardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard = ({ title, icon, description }: CardProps) => {
  return (
    <div
      className={`bg-gray-100 shadow-lg flex flex-col items-start justify-center space-y-2 p-4 sm:p-12 md:p-8 lg:p-12 xl:p-16`}
      style={{ width: '383px', height: '335px' }} // Set card dimensions
    >
      <img
        src={icon}
        alt={title}
        className="w-3 h-3 sm:w-8 sm:h-8 md:w-10 md:h-10"
      />
      <h2 className="text-md sm:text-md md:text-md lg:text-xl font-bold text-center">
        {title}
      </h2>
      <p className="text-sm sm:text-base md:text-sm lg:text-sm text-start">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
