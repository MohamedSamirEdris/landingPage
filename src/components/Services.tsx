/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from '@tanstack/react-query';
import { fetchServices } from '../services/api';
import { Loader } from './reused/Loader';
import { stripHtmlTags } from '../utils/heplers';
import ServiceCard from './reused/ServiceCard';

const Services = () => {
  const lang = 'ar';
  const {
    data: services,
    isLoading,
    isError,
  } = useQuery(['services', lang], () => fetchServices(lang));

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p>Error fetching services data</p>;
  }

  return (
    <section className="px-4 py-16 md:px-28 services">
      <div className="text-center mb-8 md:mb-12 relative">
        <h1 className="text-4xl font-bold text-black">خدمات الشركة </h1>
        <hr className="absolute w-32 h-1 bg-purple-600 mt-2 left-1/2 transform -translate-x-1/2" />
      </div>
      <div className="cards mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service: any) => (
          <ServiceCard
            key={service.id}
            title={service?.title?.rendered}
            icon={service?._embedded?.['wp:featuredmedia'][0].source_url ?? null}
            description={stripHtmlTags(service?.excerpt?.rendered)}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
