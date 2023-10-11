import hero from '../assets/images/Group 1000001429.png';
import rightVector from '../assets/icons/right-victor-hero.svg';
import downVector from '../assets/icons/down-vector-icon.svg';
import scrollIcon from '../assets/icons/scroll-icon.svg';
import scrollDown from '../utils/heplers';
const Hero = () => {
  const handleScrollDown = () => {
    scrollDown(1000);
  };
  return (
    <section className="bg-white px-4 py-8 md:px-28 md:py-16 services flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 md:order-2">
        <div className="md:relative md:right-0 md:bottom-0 md:mb-4 md:mr-8">
          <img src={hero} alt="" className="w-full md:w-auto h-auto" />
        </div>
      </div>
      <div className="md:w-1/2 md:pl-4 md:order-1">
        <div className="flex flex-col md:flex-row md:items-center">
          <img src={rightVector} alt="right-vector" className="md:mr-3" />
          <h1 className="text-2xl md:text-4xl text-black text-center md:text-start mb-4 md:mb-8">
            مرحبا بك في Details Digital
          </h1>
        </div>

        <p className="text-sm md:text-base text-center md:text-start mb-4 md:mb-6">
          شريكك الموثوق لجميع حلول تكنولوجيا المعلومات و خدمات التحول الرقمي ،
          <br />
          شركتنا رائدة في كل الخدمات التكنولوجيه المصممة خصيصاً لتطوير أعمالك
          ومساعدتك على
          <br />
          الازدهار في العصر الرقمي. يتكون فريق خبرائنا من المحترفين القادرين علي
          تقديم كل
          <br />
          الخبرات والخدمات المخصصة لتلبية احتياجاتك مما يضمن أن التكنولوجيا
          الخاصة بك تعمل بقوة وفعالية.
        </p>

        <div className="flex justify-center mt-3 md:justify-center md:mt-5">
          <img src={downVector} alt="down-vector" className="h-6 md:h-8" />
        </div>
        <div className="flex justify-center mt-20" onClick={handleScrollDown}>
          <img src={scrollIcon} alt="scroll" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
