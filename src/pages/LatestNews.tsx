/* eslint-disable @typescript-eslint/no-explicit-any */
import Banner from '../components/reused/Banner';
import Img1 from '../assets/icons/latestNews/1.svg';
import Img2 from '../assets/images/productDetail.png';

import { useQuery } from '@tanstack/react-query';
import { fetchBlogPosts } from '../services/api';
import { Loader } from '../components/reused/Loader';
// import { Link } from 'react-router-dom';
import moment from 'moment';
import { stripHtmlTags } from '../utils/heplers';
import BottomBar from '../components/reused/BottomBar';

const LatestNews = () => {
  const lang = 'ar'; // Set the desired language
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery(['blogPosts', lang], () => fetchBlogPosts(lang));

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error</div>;
  }

  // for getting image from api
  // {
  //   post?._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes?.full?.source_url ?? null
  // }
  return (
    <div className="mt-10">
      <Banner header="الأخبار" title="الأخبار" />
      <div className="grid gap-4 md:grid-cols-2 m-10">
        <div className="flex flex-col space-y-4">
          {posts.map((post: any) => (
            <div key={post.id} className="bg-white shadow p-4 rounded-lg">
              <img src={Img1} className="w-full" alt="Post Thumbnail" />
              <span className="text-gray-500 text-sm">
                بتاريخ {moment(post?.date).format('DD / M / YYYY')}
              </span>
              <h1 className="text-xl font-semibold">{post?.title?.rendered}</h1>
              <p className="text-sm text-gray-700">
                {stripHtmlTags(post?.excerpt?.rendered)}
              </p>
            </div>
          ))}
        </div>
        <div className="col-span-2 md:col-span-1 flex flex-col space-y-4">
          <form>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm  border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="أبحث.."
                required
              />
            </div>
          </form>
          <div className="border-2">
            <h1 className="bg-[#2E1D0D0F] h-10 flex justify-start items-center font-bold">
              أحدث الأخبار
            </h1>
            <div className="flex flex-row gap-2">
              <img src={Img2} className="w-20 h-81" />
              <div className="flex flex-col">
                <h1>أول تطبيق سعودي يتبنى نموذج الخدمات </h1>
                <span>15 / 5 / 2023</span>
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <img src={Img2} className="w-20 h-81" />
              <div className="flex flex-col">
                <h1>أول تطبيق سعودي يتبنى نموذج الخدمات </h1>
                <span>15 / 5 / 2023</span>
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <img src={Img2} className="w-20 h-81" />
              <div className="flex flex-col">
                <h1>أول تطبيق سعودي يتبنى نموذج الخدمات </h1>
                <span>15 / 5 / 2023</span>
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <img src={Img2} className="w-20 h-81" />
              <div className="flex flex-col">
                <h1>أول تطبيق سعودي يتبنى نموذج الخدمات </h1>
                <span>15 / 5 / 2023</span>
              </div>
            </div>
            
          </div>
          {/* <div className="border-2">
            <h1 className="bg-[#2E1D0D0F] h-10 flex justify-start items-center font-bold">
            العلامات
            </h1>
            <div className="flex flex-row gap-2">
              <img src={Img2} className="w-20 h-81" />
              <div className="flex flex-col">
                <h1>أول تطبيق سعودي يتبنى نموذج الخدمات </h1>
                <span>15 / 5 / 2023</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <BottomBar/>
    </div>
  );
};

export default LatestNews;
