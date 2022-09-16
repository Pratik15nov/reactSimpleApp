import React, { createContext, useCallback, useContext, useEffect } from 'react';

import useLocalStorage from "../../utils/hooks/useLocalStorage";

type ContextType = {
    isNavBarOpen: boolean;
    setIsNavBarOpen: (isNavBarOpen: boolean) => void;
    isNavBarPinned: boolean;
    setIsNavBarPinned: (isNavBarPinned: boolean) => void;
};
  
type Props = {
    children: React.ReactNode;
}
  
const NavBarContext = createContext<ContextType>({
    isNavBarOpen: false,
    setIsNavBarOpen: () => {},
    isNavBarPinned: false,
    setIsNavBarPinned: () => {},
});

const NavBarProvider = ({children}: Props) => {
    const [isOpen, setIsOpen] = useLocalStorage('navbarOpen', true);
    const [isPinned, setIsPinned] = useLocalStorage('navbarPinned', false);
  
    useEffect(() => {
      if(!isOpen) {
        setIsPinned(false);
      }
    }, [isOpen, setIsPinned]);

    const setIsNavBarOpen = useCallback((open: boolean) => {
        setIsOpen(open);
        if(!open) {
            setIsPinned(false);
        }
    }, [setIsOpen, setIsPinned]);
  
    const setIsNavBarPinned = useCallback((pinned: boolean) => {
      setIsPinned(pinned);
    }, [setIsPinned]);
  
    const value = React.useMemo<ContextType>(() => ({
      isNavBarOpen: isOpen,
      setIsNavBarOpen,
      isNavBarPinned: isPinned,
      setIsNavBarPinned,
    }), [isOpen, isPinned, setIsNavBarOpen, setIsNavBarPinned]);
  
    return <NavBarContext.Provider value={value}>{children}</NavBarContext.Provider>;
};
  
export default NavBarProvider;
  
export const useNavBarContext = () => {
    const navBarContext = useContext(NavBarContext);
  
    if (!navBarContext) {
      throw new Error('useNavBarContext() has to be used within a child of the NavBar Provider');
    }
  
    const {
      isNavBarOpen,
      setIsNavBarOpen,
      isNavBarPinned,
      setIsNavBarPinned,
    } = navBarContext;
  
    return {
      isNavBarOpen,
      setIsNavBarOpen,
      isNavBarPinned,
      setIsNavBarPinned,
    };
  };
  