import Services from '../components/Services';
import Products from '../components/Products';
import Statistics from '../components/Statistics';
import LatestNews from '../components/LatestNews';
import Partners from '../components/Partners';
import Hero from '../components/Hero';
import Introduction from '../components/Introduction';

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex-grow">
        <Hero />
        <Introduction />
        <Services />
        <Products />
        <Statistics />
        <LatestNews />
      </div>
      <Partners />
    </div>
  );
};

export default LandingPage;
