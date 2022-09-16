import { useEffect, useState } from 'react';

const useLocalStorage = (key: string, initialValue?: any) => {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = localStorage.getItem(key);

      // Parse stored json or if none return initialValue
      if (item) {
        return JSON.parse(item);
      } if (initialValue) {
        localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
      }
      return null;
    } catch (error) {
      // If error also return initialValue
      return initialValue;
    }
  });

  useEffect(() => {
    const handleChange = ({
      key: storageKey, newValue
    }: StorageEvent) => {
      if (storageKey === key) {
        setStoredValue(newValue ? JSON.parse(newValue) : null);
      }
    };

    window.addEventListener(
      'storage',
      handleChange,
      false,
    );

    return () => window.removeEventListener('storage', handleChange);
  }, [key]);

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = async (value: any) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;

      // Save to local storage
      localStorage.setItem(key, JSON.stringify(valueToStore));
      // Save state
      await setStoredValue(valueToStore);
    } catch (error) {
      // A more advanced implementation would handle the error case
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
