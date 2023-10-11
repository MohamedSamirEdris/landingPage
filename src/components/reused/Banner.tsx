import leftArrow from '../../assets/icons/arrowLeft-icon.svg';
interface BannerProps {
  header: string;
  title: string;
}

const Banner = ({ header, title }: BannerProps) => {
  return (
    <div className="flex flex-col w-screen bg-[#F0EBFF] items-center py-10 relative">
      <h1 className='text-2xl font-bold'>{header}</h1>
      <div className="flex flex-row space-x-3">
        <a href='/' className='ml-3'>الرئيسية</a>
        <img src={leftArrow} alt="Banner Icon" />
        <span>{title}</span>
      </div>
    </div>
  );
};

export default Banner;
