/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchBlogPosts } from '../services/api';
import infrastructure from '../assets/icons/infrastructure-icon.svg';
import CustomCard from './reused/ProductCard';
import { useQuery } from '@tanstack/react-query';
import { stripHtmlTags } from '../utils/heplers';
import { Loader } from './reused/Loader';
// import { Link } from 'react-router-dom';

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

  return (
    <section className="px-4 py-16 md:px-28 services">
      <div className="text-center mb-8 md:mb-12 relative">
        <h1 className="text-4xl font-bold text-black">أخر الأخبار</h1>
        <hr className="absolute w-32 h-1 bg-purple-600 mt-2 left-1/2 transform -translate-x-1/2" />
      </div>
      <div className="cards mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: any) => (
          <div key={post.id} >
            {/* <Link key={post.id} to={`/latest/${post.id}`}> */}
              <CustomCard
                icon={infrastructure}
                title={post?.title?.rendered}
                subtitle={stripHtmlTags(post?.excerpt?.rendered)}
                description={'اعرف المزيد'}
              />
            {/* </Link> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
