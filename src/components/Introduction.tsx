import introduction from '../assets/icons/introduction-section.svg';

const Introduction = () => {
  return (
    <section className="bg-gray-100 px-4 py-16 md:px-28 services flex  flex-col justify-between md:flex-row">
      <div className="mr-4">
        <img src={introduction} alt="" />
      </div>
      <div>
        <div className="text-start mb-8 md:mb-12 relative">
          <h1 className="text-4xl font-bold text-black">
            {' '}
            صناعة مستقبلك الرقمي
          </h1>
          <hr className="absolute w-32 h-1 bg-purple-600 mt-2 left-1/1 transform -translate-x-1/1" />
        </div>
        <p className="text-sm md:text-base">
          شغفنا و إلتزامنا تجاه الشركات لتمكينهم من إستخدام قوة التكنولوجيا و
          تحقيق الازدهار في العصر الرقمي من خلال
          <br /> تقديم حلول تكنولوجيا المعلومات المبتكرة وتوجيهات خبرائنا التي
          تساعدهم علي الظهور بشكل إستثنائي في المشهد الرقمي المتقدم.
        </p>
        <p className="text-sm md:text-base">
          نحن نؤمن بأننا عبر خدماتنا الشاملة ونهجنا في التفكير المستقبلي سنساعد
          المؤسسات علي الاستفادة من كل فرص النمو <br />و تحقيق الإمكانيات
          الشاملة في رحلة التحول الرقمي والقيادة نحو النجاح في المستقبل الرقمي.
        </p>
      </div>
    </section>
  );
};

export default Introduction;
