import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchBlogPostById } from '../services/api';
import { Loader } from '../components/reused/Loader';
import productDetailImg from '../assets/images/productDetail.png';
import { stripHtmlTags } from '../utils/heplers';

const NewsDetail = () => {
  const { postId } = useParams();
  const validPostId = postId ?? '';

  const {
    data: post,
    isLoading,
    isError,
  } = useQuery(['post', validPostId], () => fetchBlogPostById(validPostId));


  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p>Error fetching product data</p>;
  }

  return (
    <div className="flex mt-5">
    <img src={productDetailImg} alt="productDetail" />
    <div className="flex flex-col">
      <h1 className="mt-20 font-bold">{post.title.rendered}</h1>
      <p className=" mt-3 text-md sm:text-sm font-medium text-start">
        {stripHtmlTags(post?.excerpt?.rendered)}
      </p>
    </div>
  </div>
  );
};

export default NewsDetail;
