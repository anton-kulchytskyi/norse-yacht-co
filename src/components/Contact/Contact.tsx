import WorkHoursSection from '@/components/Contact/WorkHoursSection';
import ContactData from '@/lib/contactData/ContactData';
import AddressSection from '@/components/Contact/AddressSection';
import PhoneNumberSection from '@/components/Contact/PhoneNumberSection';
import EmailAddressSection from '@/components/Contact/EmailAddressSection';
import Map from '@/components/Map/Map';

const Contact = () => {
  return (
    <section className={'mt-16 p-5 xl:grid xl:grid-cols-3 xl:justify-center xl:items-end'}>
      <section className={'xl:col-span-1'}>
        <h2 className={'text-5xl'}>Contact</h2>
        <section className={'md:grid md:grid-rows-2 md:grid-cols-2 xl:grid-cols-1 xl:grid-rows-1'}>
          <WorkHoursSection workHours={ContactData.workHours} />
          <AddressSection address={ContactData.address} />
          <PhoneNumberSection phoneNumber={ContactData.phoneNumber} />
          <EmailAddressSection emailAddress={ContactData.emailAddress} />
        </section>
      </section>
      <div className={`w-full h-[200px] md:h-[450px] xl:h-[500px] xl:col-span-2`}>
        <Map center={ContactData.center} />
      </div>
    </section>
  );
};

export default Contact;

// contactData передавать сюда как пропс или не?
