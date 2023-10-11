/* eslint-disable @typescript-eslint/no-explicit-any */
import backArrow from '../assets/icons/backArrowPD.svg';
import productDetailImg from '../assets/images/productDetail.png';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchProductById } from '../services/api';
import { Loader } from '../components/reused/Loader';
import { stripHtmlTags } from '../utils/heplers';
import { useState } from 'react';
import BottomBar from '../components/reused/BottomBar';

const ProductDetail = () => {
  const { productId } = useParams();
  const validProductId = productId ?? '';
  const [activeTab, setActiveTab] = useState('المميزات');

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery(['product', validProductId], () =>
    fetchProductById(validProductId)
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p>Error fetching product data</p>;
  }

  return (
    <div className="mt-10">
      <div className="flex flex-row-reverse w-full bg-[#F8F8F8] items-center py-5 md:py-10">
        <Link
          key={product.id}
          to={`/products`}
          className="flex flex-row-reverse ml-5 md:ml-20"
        >
          <img src={backArrow} alt="backArrow" />
          <h1 className="ml-2 md:ml-10">العودة إلي المنتجات</h1>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row mt-5">
        <img
          src={productDetailImg}
          alt="productDetail"
          className="w-full md:w-1/2"
        />
        <div className="flex flex-col md:w-1/2 mt-5 md:mt-0 md:ml-10">
          <h1 className="font-bold">{product.title.rendered}</h1>
          <p className="mt-2 md:mt-3 text-md font-medium">
            {stripHtmlTags(product?.excerpt?.rendered)}
          </p>
        </div>
      </div>
      <p className="mt-5 mr-5 text-md font-medium text-start">
        {stripHtmlTags(product?.content.rendered)}
      </p>
      {/* Tab Navigation */}
      <ul className="text-start mt-5 mr-5">
        <li
          className={`inline-block px-4 py-1 cursor-pointer ${
            activeTab === 'المميزات' ? 'bg-[#FD5D63] text-white' : 'bg-gray-300'
          }`}
          onClick={() => setActiveTab('المميزات')}
        >
          المميزات
        </li>
        <li
          className={`inline-block px-4 py-1 cursor-pointer ${
            activeTab === 'الشاشات' ? 'bg-[#FD5D63] text-white' : 'bg-gray-300'
          }`}
          onClick={() => setActiveTab('الشاشات')}
        >
          الشاشات
        </li>
      </ul>

      {/* Render Tab Content */}
      {activeTab === 'المميزات' && (
        <div className="mt-5 mr-5">
          <ul>
            {product.acf.features.map((feature: any, index: number) => (
              <div className="flex gap-2 mr-14" key={index}>
                <img
                  src={feature.icon}
                  alt={feature.feature}
                  className="w-6 h-6"
                />
                <li>{feature.feature}</li>
              </div>
            ))}
          </ul>
        </div>
      )}

      {activeTab === 'الشاشات' && product.screenshots && (
        <div className="flex mt-5">
          {product.screenshots.map((screenshot: any, index: number) => (
            <div key={index} className="w-full md:w-1/2 p-2">
              <img
                src={screenshot.screenshot}
                alt={`Screenshot ${index}`}
                className="w-full h-auto rounded-md"
              />
              <p className="text-center mt-2">{screenshot.caption}</p>
            </div>
          ))}
        </div>
      )}

      <BottomBar />
    </div>
  );
};

export default ProductDetail;
