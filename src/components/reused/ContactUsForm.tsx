import contactUsImg from '../../assets/icons/contactUs-img.svg';

const ContactUsForm = () => {
  return (
    <div className='flex flex-w'>
      <img src={contactUsImg} alt='sontactus'/>
      <div className='flex flex-col bg-[#F5F5F5]'>
        <span>أتصل بنا</span>
        <span>+966920023600</span>
      </div>
    </div>
  )
}

export default ContactUsForm


