import WorkHoursSection from '@/components/Contact/WorkHoursSection';
import ContactData from '@/data/contactPage/contactPageData';
import AddressSection from '@/components/Contact/AddressSection';
import PhoneNumberSection from '@/components/Contact/PhoneNumberSection';
import EmailAddressSection from '@/components/Contact/EmailAddressSection';
import Map from '@/components/Map/Map';

const Contact = () => {
  return (
    <>
      <h4 className="px-5 md:px-16">Contact</h4>
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 px-5 md:px-16 pb-4 md:pb-10 3xl:pb-20">
        <section className="xl:col-span-1">
          <div className="pt-4 md:pt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-5">
            <WorkHoursSection workHours={ContactData.workHours} />
            <AddressSection address={ContactData.address} />
            <PhoneNumberSection phoneNumber={ContactData.phoneNumber} />
            <EmailAddressSection emailAddress={ContactData.emailAddress} />
          </div>
        </section>
        <section className="h-[200px] md:h-[450px] xl:h-[500px] xl:col-span-3">
          <Map center={ContactData.center} />
        </section>
      </div>
    </>
  );
};

export default Contact;
