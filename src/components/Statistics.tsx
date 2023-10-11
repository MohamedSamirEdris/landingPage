const Statistics = () => {
  return (
    <section className="px-4 py-16 md:px-28 services">
      <div className="text-center mb-8 md:mb-12 relative">
        <h1 className="text-4xl font-bold text-black"> الإحصائيات</h1>
        <hr className="absolute w-32 h-1 bg-purple-600 mt-2 left-1/2 transform -translate-x-1/2" />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-center">
          نحن لا نقدم خدمات فقط بل نطور أيضا منتجات برمجية متطورة لتلبية
          إحتياجات عملك،يقوم فريقنا من المُطورين <br />
          والمهندسين الأكفاء بإنشاء حلول برمجية قوية وسهلة الإستخدام تُعزز
          الكفاءة وتبسط العمليات وتحفز الابتكار.
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-12 mt-10 ">
          <div className="flex flex-col items-center max-w-md">
            <span className="text-de4490 text-4xl md:text-5xl">+50 ألف</span>
            <p className="text-center">
              ساعة عمل من اجل
              <br /> الجودة و المنتجات
            </p>
          </div>
          <div className="flex flex-col items-center max-w-md">
            <span className="text-de4490 text-4xl md:text-5xl">80% </span>
            <p className="text-center">
              ساعة عمل من اجل
              <br /> الجودة و المنتجات
            </p>
          </div>
          <div className="flex flex-col items-center max-w-md">
            <span className="text-de4490 text-4xl md:text-5xl">+100 </span>
            <p className="text-center">
              ساعة عمل من اجل
              <br /> الجودة و المنتجات
            </p>
          </div>
          <div className="flex flex-col items-center max-w-md">
            <span className="text-de4490 text-4xl md:text-5xl">+6 </span>
            <p className="text-center">
              ساعة عمل من اجل
              <br /> الجودة و المنتجات
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
