import linkedin from '../../assets/icons/linkedin-icon.svg';
import instagram from '../../assets/icons/instgram-icon.svg';
import youtube from '../../assets/icons/youtube-icon.svg';
import twitter from '../../assets/icons/twitter-icon.svg';

const BottomBar = () => {
  return (
    <div className="flex flex-row  w-screen bg-[#F3F3F3] justify-center space-x-3 items-center py-5 mt-5">
      <h1 className='ml-3'>تابعونا</h1>
      <img src={linkedin} alt="linkedin" />
      <img src={instagram} alt="instagram" />
      <img src={youtube} alt="youtube" />
      <img src={twitter} alt="twitter" />
    </div>
  );
};

export default BottomBar;
