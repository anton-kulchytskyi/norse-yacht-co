import { reviewPersonsIcons } from '@/public/images/review_persons_icons/reviewPersonsIcon';
import { ReviewPerson } from '@/interfaces/reviewPerson.interface';

type UserData = Pick<ReviewPerson, 'userName' | 'reviewText'>;

const date = () =>
  new Date(
    new Date(2024, 0, 1).valueOf() +
      Math.random() * (new Date().valueOf() - new Date(2024, 0, 1).valueOf())
  ).toLocaleDateString('en-GB');

const usersData: UserData[] = [
  {
    userName: 'Alex Ryan',
    reviewText:
      "I was truly impressed with the thorough yacht survey provided by Norse Yacht. It reassured me of the yacht's quality and performance, making my investment decision much easier.",
  },
  {
    userName: 'Emily Walsh',
    reviewText:
      'The Yacht Survey Service from Norse Yacht gave me complete confidence in my purchase. Their detailed inspection and sea trial ensured I made a well-informed decision.',
  },
  {
    userName: 'Ethan Bradley',
    reviewText:
      "Buying a yacht became a straightforward and transparent process with Norse Yacht's Smooth Contracting service. Their professionalism made for a stress-free experience.",
  },
  {
    userName: 'Gerry Thompson',
    reviewText:
      'With Norse Yacht, selecting my Scandinavian yacht was a delight. Their guidance and expertise in the local yacht market were invaluable.',
  },
  {
    userName: "Jack O'Sullivan",
    reviewText:
      "Norse Yacht's negotiation and purchase process was seamless. Their attention to detail and client-focused approach made me feel secure throughout the transaction.",
  },
  {
    userName: 'John Hellsten',
    reviewText:
      "Norse Yacht's Personal Yacht Finder made finding my ideal yacht effortless. Their expertise and personalised service were second to none. Highly recommended!",
  },
  {
    userName: 'Liam Gallagher',
    reviewText:
      'Smooth Contracting made acquiring my yacht straightforward and transparent. Norse Yacht handled everything, making it a stress-free experience. Highly recommend their professionalism.',
  },
  {
    userName: 'Mark Nolan',
    reviewText:
      'The Personal Yacht Finder service from Norse Yacht connected me with a yacht that perfectly matched my needs. Their expert advice made all the difference.',
  },
  {
    userName: 'Rachel Johnson',
    reviewText:
      "Thanks to Norse Yacht's meticulous yacht survey, I felt confident in my yacht's condition. Their expertise and thorough evaluation are truly commendable.",
  },
  {
    userName: 'Simon Doyle',
    reviewText:
      'Smooth Contracting by Norse Yacht streamlined my yacht purchase beautifully. Their team handled every detail with professionalism, making the process transparent and easy.',
  },
];

export const reviewUsersArray: ReviewPerson[] = usersData.map((user, i) => {
  const key = `person_${i + 1}` as keyof typeof reviewPersonsIcons;
  return {
    ...user,
    sliderIdx: i + 1,
    userAvatar: reviewPersonsIcons[key],
    date: date(),
  };
});
