import { ReactNode } from 'react';

interface JobCardProps {
  icon: string;
  title: string;
  description: string;
  knowMore: string;
  location: string;
  date: ReactNode;
}

const JobCard = ({
  icon,
  title,
  location,
  description,
  date,
  knowMore,
}: JobCardProps) => {
  return (
    <div className="bg-white shadow-lg p-4 sm:p-8 md:p-12 flex flex-col">
      <div className="flex flex-row">
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 sm:w-16 sm:h-16"
        />
        <div className="flex flex-col mr-4">
          <span>{location}</span>
          <h2 className="text-lg sm:text-xl font-medium text-start">{title}</h2>
          <span>{date}</span>
        </div>
      </div>
      <p className="text-sm sm:text-base font-medium text-start">{description}</p>
      <p className="text-sm sm:text-base text-start text-red-400">{knowMore}</p>
    </div>
  );
};

export default JobCard;
