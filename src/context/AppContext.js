import { createContext, useState, useContext, useEffect, useMemo } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [pageState, setPageState] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [portraitState, setPortraitState] = useState(0);

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth < 1280);
    };

    onResize();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // Memoized so consumers only re-render when one of these values actually changes
  const value = useMemo(
    () => ({
      pageState,
      setPageState,
      isMobile,
      setIsMobile,
      isTablet,
      setIsTablet,
      portraitState,
      setPortraitState,
    }),
    [pageState, isMobile, isTablet, portraitState],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
