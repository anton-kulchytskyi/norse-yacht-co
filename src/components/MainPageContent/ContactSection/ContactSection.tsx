import Image from 'next/image';
import contact from '@/public/images/contact-img.png';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <section className="w-full md:px-5 xl:px-16 py-4 md:py-6 xl:py-8 mb-10 xl:mb-16 2xl:mb-24 grid grid-cols-1 xl:grid-cols-2">
      <div className="w-full">
        <Image
          src={contact}
          sizes="100vw"
          className="object-cover w-full h-full"
          alt="contact-img"
        />
      </div>
      <div className="bg-primary px-5 py-8 sm:px-8 md:px-32 xl:px-8 2xl:px-16 3xl:px-40">
        <h4 className="text-white text-center xl:text-left pt-10">
          Have Questions? Contact Us
        </h4>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
