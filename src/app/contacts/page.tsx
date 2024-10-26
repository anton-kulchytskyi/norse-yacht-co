import React from 'react';
import Map from '@/components/Map/Map';

const styles = {
  mainHeader: '',
  subHeader: 'text-2xl',
  container: 'my-5',
  emailLink: 'underline',
  mapContainer: 'w-full',
};

const ContactsPage = () => {
  return (
    <section className={'mt-16 p-5'}>
      <h2>Contact</h2>
      <article className={styles.container}>
        <h2 className={styles.subHeader}>Office hours</h2>
        <ul>
          <li>Monday - Friday: 10:00 - 18:00</li>
          <li>Saturday: 11:00 - 16:00</li>
          <li>Sunday: day off</li>
        </ul>
      </article>
      <article className={styles.container}>
        <h2 className={styles.subHeader}>Address</h2>
        <span>Dun Laoghaire Marina</span>
        <span>Harbour Road Dun Laoghaire Co.</span>
        <span>Dublin A96 D376</span>
      </article>
      <article className={styles.container}>
        <h2 className={styles.subHeader}>Phone number</h2>
        +353874375161
      </article>
      <article className={styles.container}>
        <h2 className={styles.subHeader}>E-mail address</h2>
        <a href="mailto:sales@norseyacht.com" className={styles.emailLink}>
          sales@norseyacht.com
        </a>
      </article>
      <div className={styles.mapContainer}>
        <Map/>
      </div>
    </section>
  );
};

export default ContactsPage;

// вынести данные для заполнения
// header не занимает место в дереве,
// добавить google map api
