import { useParams } from 'react-router-dom';
import backArrow from '../assets/icons/backArrowPD.svg';
import joinUs from '../assets/icons/joinUs-icon.svg';
import { useQuery } from '@tanstack/react-query';
import { fetchJobByID } from '../services/api';
import { Loader } from '../components/reused/Loader';
import moment from 'moment';
import { stripHtmlTags } from '../utils/heplers';

const JobDetail = () => {
  const { jobId } = useParams();
  const validJobId = jobId ?? '';

  const {
    data: job,
    isLoading,
    isError,
  } = useQuery(['job', validJobId], () => fetchJobByID(validJobId));

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p>Error fetching product data</p>;
  }

  return (
    <div className="mt-10">
      <div className="flex flex-row-reverse w-screen bg-[#F8F8F8] items-center py-10">
        <a href="/join-us" className="flex flex-row-reverse ml-2 md:ml-20">
          <img src={backArrow} alt="backArrow" />
          <h1 className="ml-2 md:ml-10"> العودة إلي الوظائف </h1>
        </a>
      </div>

      {/* Setion Two */}

      <div className="flex flex-col m-2 md:m-10">
        <div className="flex flex-row justify-between items-center mt-2 md:mt-10">
          <div className="flex flex-row items-center">
            <img
              src={joinUs}
              alt="join"
              className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20"
            />
            <div className="flex flex-col mr-4">
              <span className="text-xs md:text-base">{'الرياض'}</span>
              <h2 className="text-base md:text-xl text-start font-bold">
                {job?.title.rendered}
              </h2>
              <span className="text-xs md:text-base">
                {`منذ ${moment(job?.date).locale('ar').fromNow(true)}`}
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-buttonColor md:mr-7 focus:ring-4 focus:outline-none focus:ring-buttonColor font-medium rounded-lg text-sm md:text-base w-full sm:w-auto px-3 py-1.5 md:px-5 md:py-2.5 text-center dark:bg-buttonColor dark:hover:bg-buttonColor dark:focus:ring-buttonColor"
          >
            التقديم للوظيفة
          </button>
        </div>

        {/* Section three */}
        <div className="flex flex-col md:flex-row gap-12 m-2 md:m-10">
          <div className="flex flex-col border border-2 md:border-4 border-gray-500 p-2 md:p-4 rounded-lg">
            <h1 className="font-bold text-sm md:text-base">نوع العمل</h1>
            <span className="text-sm md:text-base">في المكتب</span>
          </div>

          <div className="flex flex-col border border-2 md:border-4 border-gray-500 p-2 md:p-4 rounded-lg">
            <h1 className="font-bold text-sm md:text-base"> المسمي الوظيفي </h1>
            <span className="text-sm md:text-base"> {job.title.rendered}</span>
          </div>
          <div className="flex flex-col border border-2 md:border-4 border-gray-500 p-2 md:p-4 rounded-lg">
            <h1 className="font-bold text-sm md:text-base"> القسم</h1>
            <span className="text-sm md:text-base"> القسم التقني</span>
          </div>
          <div className="flex flex-col border border-2 md:border-4 border-gray-500 p-2 md:p-4 rounded-lg">
            <h1 className="font-bold text-sm md:text-base"> الموقع</h1>
            <span className="text-sm md:text-base"> الرياض</span>
          </div>
          <div className="flex flex-col border border-2 md:border-4 border-gray-500 p-2 md:p-4 rounded-lg">
            <h1 className="font-bold text-sm md:text-base">نوع العمل</h1>
            <span className="text-sm md:text-base"> دوام كامل</span>
          </div>
        </div>

        {/* Section Four */}
        <div className="flex flex-col md:flex-col mt-4 md:mt-10 m-2 md:m-10">
          <h1 className="font-bold text-sm md:text-base">تفاصيل العمل</h1>
          <ul className="mt-2 list-disc font-normal text-xs md:text-sm">
            {/* {stripHtmlTags(job.content.rendered)
              .split('\n')
              .map((line, index) => (
                <li key={index}>{line}</li>
              ))} */}

            {stripHtmlTags(job.content.rendered)
              .split('\n')
              .filter((line) => !/<.*?classToExclude.*?>/.test(line)) // Replace "classToExclude" with the actual class name you want to filter out
              .map((line, index) => (
                <li key={index}>{line}</li>
              ))}
          </ul>
        </div>

        {/* Section Five */}
        <div></div>
      </div>
    </div>
  );
};

export default JobDetail;
