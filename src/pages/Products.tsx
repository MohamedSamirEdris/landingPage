/* eslint-disable @typescript-eslint/no-explicit-any */
import Banner from '../components/reused/Banner';
import Logo from '../assets/icons/company_logo.svg';
import BottomBar from '../components/reused/BottomBar';
import { useQuery } from '@tanstack/react-query';
import CustomCard from '../components/reused/ProductCard';
import { stripHtmlTags } from '../utils/heplers';
import { fetchProducts } from '../services/api';
import { Loader } from '../components/reused/Loader';
import { Link } from 'react-router-dom';

const Products = () => {
  const lang = 'ar';

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery(['services', lang], () => fetchProducts(lang));

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p>Error fetching services data</p>;
  }

  return (
    <div className="mt-10">
      <Banner header="المنتجات" title="المنتجات" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        {products.map((product: any) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <CustomCard
              icon={Logo}
              title={product?.title?.rendered}
              subtitle={stripHtmlTags(product?.excerpt?.rendered)}
              description={'اعرف المزيد'}
            />
          </Link>
        ))}
      </div>
      <BottomBar />
    </div>
  );
};

export default Products;
