import { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [pageState, setPageState] = useState(0);
  const [hoverModifier, setHoverModifier] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [portraitState, setPortraitState] = useState(0);

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    onResize();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        pageState,
        setPageState,
        isMobile,
        setIsMobile,
        portraitState,
        setPortraitState,
        hoverModifier,
        setHoverModifier,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
