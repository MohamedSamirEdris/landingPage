/* eslint-disable @typescript-eslint/no-explicit-any */
import Logo from '../assets/icons/company_logo.svg';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { fetchProducts } from '../services/api';
import { Loader } from './reused/Loader';
import { useQuery } from '@tanstack/react-query';
import { stripHtmlTags } from '../utils/heplers';
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/products/productSlice';
import ProductCard from './reused/ProductCard';

const Products = () => {
  const lang = 'ar';
  const dispatch = useDispatch();

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery(['products', lang], () => fetchProducts(lang));

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p>Error fetching services data</p>;
  }
  dispatch(setProducts(products));
  return (
    <section className="bg-gray-100 w-full flex items-center justify-center flex-col py-12 px-6 lg:px-12">
      <div className="text-center mb-8 md:mb-12 relative">
        <h1 className="text-4xl font-bold text-black"> منتجاتنا</h1>
        <hr className="absolute w-32 h-1 bg-purple-600 mt-2 left-1/2 transform -translate-x-1/2" />
      </div>
      <div className="cards mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product: any) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`} 
          >
            <ProductCard
              icon={Logo}
              title={product?.title?.rendered}
              subtitle={stripHtmlTags(product?.excerpt?.rendered)}
              description={'اعرف المزيد'}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Products;
