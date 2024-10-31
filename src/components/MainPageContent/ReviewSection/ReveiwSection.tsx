'use client';
import dynamic from 'next/dynamic';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode, Navigation } from 'swiper/modules';

import { ReviewPerson } from '@/interfaces/reviewPerson.interface';

import { reviewUsersArray } from '@/data/mainPage/ReviewSectionData';

const DynamicReviewCard = dynamic(() => import('./ReviewCard'), {
  ssr: false,
});

const ReviewsSection = () => {
  return (
    <section className="w-full space-y-8 px-5 md:px-16 py-4 md:py-6 xl:py-8 mb-10 xl:mb-16 2xl:mb-24">
      <h3 className="">Reviews</h3>
      <Swiper
        navigation={{
          nextEl: '.swiper_next',
          prevEl: '.swiper_prev',
        }}
        loop={true}
        freeMode={true}
        grabCursor={true}
        slidesPerView={1}
        spaceBetween={24}
        breakpoints={{
          712: {
            slidesPerView: 2,
          },
          1056: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 4,
          },
          1744: {
            slidesPerView: 5,
          },
        }}
        modules={[FreeMode, Navigation]}
        className=""
      >
        {reviewUsersArray.map((user: ReviewPerson) => (
          <SwiperSlide key={user.sliderIdx}>
            <DynamicReviewCard
              sliderIdx={user.sliderIdx}
              userName={user.userName}
              userAvatar={user.userAvatar}
              date={user.date}
              reviewText={user.reviewText}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text-center xl:float-right space-x-2 ">
        <button
          type="button"
          className="swiper_prev group rounded-full bg-grey-10 p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              className="fill-secondary-100 group-hover:fill-grey-10"
              d="M15.2907 18.2108C15.3844 18.1178 15.4588 18.0072 15.5096 17.8854C15.5603 17.7635 15.5865 17.6328 15.5865 17.5008C15.5865 17.3688 15.5603 17.2381 15.5096 17.1162C15.4588 16.9944 15.3844 16.8838 15.2907 16.7908L10.7107 12.2108C10.617 12.1178 10.5426 12.0072 10.4918 11.8854C10.441 11.7635 10.4149 11.6328 10.4149 11.5008C10.4149 11.3688 10.441 11.2381 10.4918 11.1162C10.5426 10.9944 10.617 10.8838 10.7107 10.7908L15.2907 6.21079C15.3844 6.11783 15.4588 6.00723 15.5096 5.88537C15.5603 5.76351 15.5865 5.6328 15.5865 5.50079C15.5865 5.36878 15.5603 5.23808 15.5096 5.11622C15.4588 4.99436 15.3844 4.88376 15.2907 4.79079C15.1033 4.60454 14.8499 4.5 14.5857 4.5C14.3215 4.5 14.0681 4.60454 13.8807 4.79079L9.2907 9.38079C8.7289 9.94329 8.41334 10.7058 8.41334 11.5008C8.41334 12.2958 8.7289 13.0583 9.2907 13.6208L13.8807 18.2108C14.0681 18.397 14.3215 18.5016 14.5857 18.5016C14.8499 18.5016 15.1033 18.397 15.2907 18.2108Z"
            />
          </svg>
        </button>
        <button
          type="button"
          className="swiper_next group rounded-full bg-grey-10 p-2 hover:bg-secondary-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              className="fill-secondary-100 group-hover:fill-grey-10"
              d="M8.70913 4.79092C8.6154 4.88388 8.541 4.99448 8.49024 5.11634C8.43947 5.2382 8.41333 5.3689 8.41333 5.50091C8.41333 5.63293 8.43947 5.76363 8.49024 5.88549C8.541 6.00735 8.6154 6.11795 8.70913 6.21091L13.2891 10.7909C13.3828 10.8839 13.4572 10.9945 13.508 11.1163C13.5588 11.2382 13.5849 11.3689 13.5849 11.5009C13.5849 11.6329 13.5588 11.7636 13.508 11.8855C13.4572 12.0074 13.3828 12.118 13.2891 12.2109L8.70913 16.7909C8.6154 16.8839 8.54101 16.9945 8.49024 17.1163C8.43947 17.2382 8.41333 17.3689 8.41333 17.5009C8.41333 17.6329 8.43947 17.7636 8.49024 17.8855C8.54101 18.0074 8.6154 18.118 8.70913 18.2109C8.89649 18.3972 9.14994 18.5017 9.41413 18.5017C9.67831 18.5017 9.93176 18.3972 10.1191 18.2109L14.7091 13.6209C15.2709 13.0584 15.5865 12.2959 15.5865 11.5009C15.5865 10.7059 15.2709 9.94342 14.7091 9.38092L10.1191 4.79092C9.93176 4.60466 9.67831 4.50012 9.41413 4.50012C9.14994 4.50012 8.89649 4.60466 8.70913 4.79092Z"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ReviewsSection;
