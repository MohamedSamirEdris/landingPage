import whoWeAre from '../assets/icons/whoWeAre-icon.svg';
import Partners from '../components/Partners';
import Banner from '../components/reused/Banner';
import quality from '../assets/icons/whoWeAre/quality.svg';
import distinguish from '../assets/icons/whoWeAre/distinguish.svg';
import experience from '../assets/icons/whoWeAre/experince.svg';
import solution from '../assets/icons/whoWeAre/solutions.svg';
import ServiceCard from '../components/reused/ServiceCard';

const WhoWeAre = () => {
  return (
    <div className="mt-10">
      <Banner header="الوظائف" title="الوظائف" />
      <div className="mt-5 px-4 md:px-6 lg:px-8">
        <p className="text-sm md:text-base lg:text-lg">
          شغفنا و إلتزامنا تجاه الشركات لتمكينهم من إستخدام قوة التكنولوجيا و
          تحقيق الازدهار في العصر الرقمي من خلال تقديم حلول
          <br /> تكنولوجيا المعلومات المبتكرة وتوجيهات خبرائنا التي تساعدهم علي
          الظهور بشكل إستثنائي في المشهد الرقمي المتقدم.
        </p>
      </div>
      <div className="mt-4 md:flex md:justify-between items-center">
      <div className="mb-4 md:mb-0">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black text-start md:text-start  mr-2">
            الرؤية و الخطط المستقبلية
          </h1>
          <p className="mt-2 md:text-start mr-3 ">
            يُمكن القول أن كُل شيء يَتغير مع مرور الوقت، حيث أصبحت معظم الأمور
            الآن <br />
            تَسير في طُرق مُختلفة عمَّا كانت عليه في العقود الماضيَة، حيث أن
            أصبح مُعظم
            <br /> اعتماد الأشخاص حاليّاً على التكنولوجيا، ويُمكن تلخيص أهم
            الجوانب التي اختلفت
            <br /> من حيث التكنولوجيا ما بين الماضي والحاضر هي:[٣] الاتصالات
            (بالإنجليزية: <br /> Communication): لقد كانت عمليات الاتصالات
            سابِقاً مُعتمِدة على البريد <br />
            الكسول (بالإنجليزية: Snail mail)، حيث قد كان شائِعاً بين
          </p>
        </div>
        <img src={whoWeAre} alt="whoWeAre" className="w-full md:w-auto" />
      </div>
      <div className="flex flex-col justify-center items-center ">
      <h1 className="text-2xl font-bold text-black ">لماذا نحن ؟</h1>
      <hr className="absolute w-24 h-1 bg-purple-600 mt-12 left-1/2 transform -translate-x-1/2 " />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center ">
        <ServiceCard
          icon={experience}
          title={'الخبرة'}
          description={
            'أول تطبيق سعودي يتبنى نموذج تقديم الخدمات عند الطلب بين أصحاب المهارات الراغبين بالعمل وطالبي الخدمات من أفراد أو شركات .'
          }
        />
        <ServiceCard
          icon={solution}
          title={'حلول مخصصة'}
          description={
            'أول تطبيق سعودي يتبنى نموذج تقديم الخدمات عند الطلب بين أصحاب المهارات الراغبين بالعمل وطالبي الخدمات من أفراد أو شركات .'
          }
        />
        <ServiceCard
          icon={quality}
          title={'الإلتزام بالجودة'}
          description={
            'أول تطبيق سعودي يتبنى نموذج تقديم الخدمات عند الطلب بين أصحاب المهارات الراغبين بالعمل وطالبي الخدمات من أفراد أو شركات .'
          }
        />
        <ServiceCard
          icon={distinguish}
          title={'التميز التقني'}
          description={
            'أول تطبيق سعودي يتبنى نموذج تقديم الخدمات عند الطلب بين أصحاب المهارات الراغبين بالعمل وطالبي الخدمات من أفراد أو شركات .'
          }
        />
      </div>

      <Partners />
    </div>
  );
};

export default WhoWeAre;
