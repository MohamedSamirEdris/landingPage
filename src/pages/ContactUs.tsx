import Banner from '../components/reused/Banner';
import BottomBar from '../components/reused/BottomBar';
import mapImg from '../assets/icons/map.svg';
import ContactUsForm from '../components/reused/ContactUsForm';
const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="mt-10">
        <Banner header="تواصل معنا" title="تواصل معنا" />
        <ContactUsForm />
      </div>

      <div>
        {' '}
        <img src={mapImg} />
        <BottomBar />
      </div>
    </div>
  );
};

export default ContactUs;
