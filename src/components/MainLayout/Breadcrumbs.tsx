'use client';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';
import {
  capitalizeFirstLetter,
  convertPathToSegments,
  createHrefFromSegment,
  replaceLastSegment,
} from '@/utils/breadcrumbs/helpers';
import RightArrowImg from '@/public/icons/rightArrow.svg';
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
    <div className="flex items-center space-x-4 px-5 md:px-16 py-4 md:py-6 xl:py-8">
      <ClickableComponent
        href="/"
        variant="icon"
      >
        <Home />
      </ClickableComponent>
      <Image
        src={RightArrowImg}
        alt="RightArrow"
      />
      {normalizeSegments.map((segment, index) => {
        const href = createHrefFromSegment(segments, index);

        return (
          <>
            <ClickableComponent
              key={index}
              href={href}
              variant="icon"
            >
              {segment}
            </ClickableComponent>
            {index !== normalizeSegments.length - 1 ? (
              <Image
                src={RightArrowImg}
                alt="RightArrow"
              />
            ) : null}
          </>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
