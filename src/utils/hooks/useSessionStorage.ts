import { useState } from 'react';

const useSessionStorage = (key: string, initialValue?: any) => {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from session storage by key
      const item = sessionStorage.getItem(key);

      // Parse stored json or if none return initialValue
      if (item) {
        return JSON.parse(item);
      } if (initialValue) {
        sessionStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
      }
      return null;
    } catch (error) {
      // If error also return initialValue
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to sessionStorage.
  const setValue = async (value: any) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;

      // Save to session storage
      sessionStorage.setItem(key, JSON.stringify(valueToStore));
      // Save state
      await setStoredValue(valueToStore);
    } catch (error) {
      // A more advanced implementation would handle the error case
    }
  };

  // ... remove the key value from sessionStorage.
  const removeValue = async () => {
    try {

      // Remove from session storage
      sessionStorage.removeItem(key);
      // Save state
      await setStoredValue(undefined);
    } catch (error) {
      // A more advanced implementation would handle the error case
    }
  };

  return [storedValue, setValue, removeValue];
};

export default useSessionStorage;
