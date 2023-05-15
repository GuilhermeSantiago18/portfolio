import React, { createContext, useRef, useContext } from "react";

type ScrollContextType = {
  scrollToRef: (ref: React.RefObject<HTMLElement>) => void;
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScrollContext must be used within a ScrollContextProvider");
  }
  return context;
};

type ScrollContextProviderProps = {
  children: React.ReactNode;
};

export const ScrollContextProvider: React.FC<ScrollContextProviderProps> = ({ children }) => {
  const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ScrollContext.Provider value={{ scrollToRef }}>
      {children}
    </ScrollContext.Provider>
  );
};
