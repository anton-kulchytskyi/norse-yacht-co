import { useEffect, useState } from 'react';
import { SCREEN_LG, SCREEN_MD, SCREEN_XL } from '@/lib/beakpoints';

type TWindowWidth = number;

export const useResize = () => {
  const [width, setWidth] = useState<TWindowWidth>(window.innerWidth);

  useEffect(() => {
    const handleResize = (event: UIEvent) => {
      const target = event.target as Window;

      setWidth(target.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (width >= SCREEN_XL) {
    return 'XL';
  } else if (width >= SCREEN_LG) {
    return 'LG';
  } else if (width >= SCREEN_MD) {
    return 'MD';
  }

  return 'SM';
}

