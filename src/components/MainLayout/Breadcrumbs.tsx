'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import {
  capitalizeFirstLetter,
  convertPathToSegments,
  createHrefFromSegment,
  replaceLastSegment,
} from '@/utils/breadcrumbs/helpers';
import ClickableComponent from '../ClickableComponent/ClickableComponent';
import Home from '../SvgIcons/Home';

const Breadcrumb = () => {
  const pathname = usePathname();
  const search = useSearchParams();
  const yachtName = search.get('name');

  const segments = convertPathToSegments(pathname);

  if (yachtName) {
    replaceLastSegment(segments, yachtName);
  }

  const normalizeSegments = segments.map((segment) =>
    capitalizeFirstLetter(segment)
  );

  return (
    <>
      <ul className="flex space-x-4 px-5 md:px-16 py-4 md:py-6 xl:py-8">
        <>
          <li key="home">
            <ClickableComponent
              href="/"
              variant="icon"
            >
              <Home />
            </ClickableComponent>
          </li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              className="fill-primary"
              d="M8.70913 4.79092C8.6154 4.88388 8.541 4.99448 8.49024 5.11634C8.43947 5.2382 8.41333 5.3689 8.41333 5.50091C8.41333 5.63293 8.43947 5.76363 8.49024 5.88549C8.541 6.00735 8.6154 6.11795 8.70913 6.21091L13.2891 10.7909C13.3828 10.8839 13.4572 10.9945 13.508 11.1163C13.5588 11.2382 13.5849 11.3689 13.5849 11.5009C13.5849 11.6329 13.5588 11.7636 13.508 11.8855C13.4572 12.0074 13.3828 12.118 13.2891 12.2109L8.70913 16.7909C8.6154 16.8839 8.54101 16.9945 8.49024 17.1163C8.43947 17.2382 8.41333 17.3689 8.41333 17.5009C8.41333 17.6329 8.43947 17.7636 8.49024 17.8855C8.54101 18.0074 8.6154 18.118 8.70913 18.2109C8.89649 18.3972 9.14994 18.5017 9.41413 18.5017C9.67831 18.5017 9.93176 18.3972 10.1191 18.2109L14.7091 13.6209C15.2709 13.0584 15.5865 12.2959 15.5865 11.5009C15.5865 10.7059 15.2709 9.94342 14.7091 9.38092L10.1191 4.79092C9.93176 4.60466 9.67831 4.50012 9.41413 4.50012C9.14994 4.50012 8.89649 4.60466 8.70913 4.79092Z"
            />
          </svg>
        </>
        {normalizeSegments.map((segment, index) => {
          const href = createHrefFromSegment(segments, index);
          return (
            <>
              <li key={index}>
                <ClickableComponent
                  href={href}
                  variant="icon"
                >
                  {segment}
                </ClickableComponent>
              </li>
              {index !== normalizeSegments.length - 1 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    className="fill-primary"
                    d="M8.70913 4.79092C8.6154 4.88388 8.541 4.99448 8.49024 5.11634C8.43947 5.2382 8.41333 5.3689 8.41333 5.50091C8.41333 5.63293 8.43947 5.76363 8.49024 5.88549C8.541 6.00735 8.6154 6.11795 8.70913 6.21091L13.2891 10.7909C13.3828 10.8839 13.4572 10.9945 13.508 11.1163C13.5588 11.2382 13.5849 11.3689 13.5849 11.5009C13.5849 11.6329 13.5588 11.7636 13.508 11.8855C13.4572 12.0074 13.3828 12.118 13.2891 12.2109L8.70913 16.7909C8.6154 16.8839 8.54101 16.9945 8.49024 17.1163C8.43947 17.2382 8.41333 17.3689 8.41333 17.5009C8.41333 17.6329 8.43947 17.7636 8.49024 17.8855C8.54101 18.0074 8.6154 18.118 8.70913 18.2109C8.89649 18.3972 9.14994 18.5017 9.41413 18.5017C9.67831 18.5017 9.93176 18.3972 10.1191 18.2109L14.7091 13.6209C15.2709 13.0584 15.5865 12.2959 15.5865 11.5009C15.5865 10.7059 15.2709 9.94342 14.7091 9.38092L10.1191 4.79092C9.93176 4.60466 9.67831 4.50012 9.41413 4.50012C9.14994 4.50012 8.89649 4.60466 8.70913 4.79092Z"
                  />
                </svg>
              ) : null}
            </>
          );
        })}
      </ul>
    </>
  );
};

export default Breadcrumb;