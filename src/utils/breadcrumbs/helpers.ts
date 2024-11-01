export const convertPathToSegments = (path: string) => {
  return path.split('/').filter((item) => item !== '');
};

export const replaceLastSegment = (arr: string[], segment: string) => {
  return (arr[arr.length - 1] = segment.split('_').join(' '));
};

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const createHrefFromSegment = (segments: string[], currIdx: number) => {
  return '/' + segments.slice(0, currIdx + 1).join('/');
};
