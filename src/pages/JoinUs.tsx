/* eslint-disable @typescript-eslint/no-explicit-any */
import moment from 'moment';
import 'moment/locale/ar';
import Banner from '../components/reused/Banner';
import { useQuery } from '@tanstack/react-query';
import { Loader } from '../components/reused/Loader';
import { stripHtmlTags } from '../utils/heplers';
import joinUs from '../assets/icons/joinUs-icon.svg';
import { fetchJobs } from '../services/api';
import BottomBar from '../components/reused/BottomBar';
import { Link } from 'react-router-dom';
import JobCard from '../components/reused/JobCard';

const JoinUs = () => {
  const {
    data: jobs,
    isLoading,
    isError,
  } = useQuery(['jobs'], () => fetchJobs());

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p>Error fetching Jobs data</p>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow mt-5 p-4 sm:p-8 md:p-16">
        <Banner header="الوظائف" title="الوظائف" />
        <p className="text-center mt-4 sm:mt-8">
          شغفنا و إلتزامنا تجاه الشركات لتمكينهم من إستخدام قوة التكنولوجيا و
          تحقيق الازدهار في العصر الرقمي من خلال تقديم حلول <br />
          تكنولوجيا المعلومات المبتكرة وتوجيهات خبرائنا التي تساعدهم علي الظهور
          بشكل إستثنائي في المشهد الرقمي المتقدم.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mt-4 sm:mt-8">
          {jobs.map((job: any) => (
            <Link key={job.id} to={`/join-us/${job.id}`}>
              <JobCard
                key={job.id}
                icon={joinUs}
                date={`منذ ${moment(job?.date).locale('ar').fromNow(true)}`}
                title={job?.title?.rendered}
                description={stripHtmlTags(job?.excerpt?.rendered)}
                knowMore={'اعرف المزيد'}
                location={' الرياض'}
              />
            </Link>
          ))}
        </div>
      </div>
      <BottomBar />
    </div>
  );
};

export default JoinUs;
