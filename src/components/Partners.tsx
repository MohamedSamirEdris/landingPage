import { useState } from 'react';
import partner1 from '../assets/icons/partners/partner1-icon.svg';
import partner2 from '../assets/icons/partners/partner2-icon.svg';
import partner3 from '../assets/icons/partners/partner3-icon.svg';
import partner4 from '../assets/icons/partners/partner4-icon.svg';
import partner5 from '../assets/icons/partners/partner5-icon.svg';
import partner6 from '../assets/icons/partners/partner6-icon.svg';
import { saveNewsletter } from '../services/api';

const Partners = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await saveNewsletter({ email });
  };
  return (
    <section className="px-4 py-16 md:px-28 services">
      <div className="text-center mb-8 md:mb-12 relative">
        <h1 className="text-4xl font-bold text-black"> شركاء النجاح</h1>
        <hr className="absolute w-32 h-1 bg-purple-600 mt-2 left-1/2 transform -translate-x-1/2" />
      </div>
      <div className="flex flex-row space-x-4 md:space-x-8 lg:space-x-16 xl:space-x-24 2xl:space-x-40">
        <img src={partner1} alt="" className="w-16 md:w-auto h-auto" />
        <img src={partner2} alt="" className="w-16 md:w-auto h-auto" />
        <img src={partner3} alt="" className="w-16 md:w-auto h-auto" />
        <img src={partner4} alt="" className="w-16 md:w-auto h-auto" />
        <img src={partner5} alt="" className="w-16 md:w-auto h-auto" />
        <img src={partner6} alt="" className="w-16 md:w-auto h-auto" />
      </div>
      <div className="mt-10">
        <h1 className="text-2xl font-bold text-black">
          اشترك في نشرة Details Digital
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row mt-3">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              id="subscription"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-buttonColor focus:border-buttonColor block w-full md:w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Example@example.com"
              required
            />
            <button
              type="submit"
              className="text-white bg-buttonColor md:mr-7 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Partners;
