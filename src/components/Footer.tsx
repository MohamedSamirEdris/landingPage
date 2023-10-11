import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className="p-4 w-full bg-black flex flex-col lg:flex-row-reverse justify-between items-center">
      <p className="text-white mb-4 lg:mb-0 lg:order-2">
        جميع الحقوق محفوظة لشركة Digital Details للتقنيات 2023 ©
      </p>
      <div className="text-white flex ">
        <p className="mb-2 lg:mb-0 mr-4 ml-4 lg:mr-0">
          سياسة الاستخدام والخصوصية
        </p>
        <Link to={`/join-us`}>
          <p className="mb-2 lg:mb-0 ml-10">الوظائف</p>
        </Link>
      </div>
    </section>
  );
};

export default Footer;
