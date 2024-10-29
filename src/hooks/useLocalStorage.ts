import { useState } from 'react';

const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [state, setState] = useState<T>(() => {
    try {
      const storedValue =
        typeof localStorage !== 'undefined' ? localStorage.getItem(key) : null;
      // const value = window.localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      // eslint-disable-next-line
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(state) : value;
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
      setState(valueToStore);
    } catch (error) {
      // eslint-disable-next-line
      console.error(error);
    }
  };

  return [state, setValue] as const;
};

export default useLocalStorage;

// import { Dispatch, SetStateAction, useEffect, useState } from 'react';

// export default function useLocalStorage<T>(
//   key: string,
//   initialValue: T
// ): [T, Dispatch<SetStateAction<T>>] {
//   const [storedValue, setStoredValue] = useState(initialValue);
//   // We will use this flag to trigger the reading from localStorage
//   const [firstLoadDone, setFirstLoadDone] = useState(false);

//   // Use an effect hook in order to prevent SSR inconsistencies and errors.
//   // This will update the state with the value from the local storage after
//   // the first initial value is applied.
//   useEffect(() => {
//     const fromLocal = () => {
//       if (typeof window === 'undefined') {
//         return initialValue;
//       }
//       try {
//         const item = window.localStorage.getItem(key);
//         return item ? (JSON.parse(item) as T) : initialValue;
//       } catch (error) {
//         // eslint-disable-next-line
//         console.error(error);
//         return initialValue;
//       }
//     };

//     // Set the value from localStorage
//     setStoredValue(fromLocal);
//     // First load is done
//     setFirstLoadDone(true);
//   }, [initialValue, key]);

//   // Instead of replacing the setState function, react to changes.
//   // Whenever the state value changes, save it in the local storage.
//   useEffect(() => {
//     // If it's the first load, don't store the value.
//     // Otherwise, the initial value will overwrite the local storage.
//     if (!firstLoadDone) {
//       return;
//     }

//     try {
//       if (typeof window !== 'undefined') {
//         window.localStorage.setItem(key, JSON.stringify(storedValue));
//       }
//     } catch (error) {
//       // eslint-disable-next-line
//       console.log(error);
//     }
//   }, [storedValue, firstLoadDone, key]);

//   // Return the original useState functions
//   return [storedValue, setStoredValue];
// }
