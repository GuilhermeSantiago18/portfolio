import React, { createContext, useState, ReactNode } from "react";

interface MyContextData {
  showProjects: boolean;
  showButton: boolean;
  showContact: boolean;
  setShowProjects: (newValue: boolean) => void;
  setShowButton: (newValue: boolean) => void;
  setShowContact: (newValue: boolean) => void;
}

interface AppContextProviderProps {
  children: ReactNode;
}

const MyContext = createContext<MyContextData>({
  showProjects: false,
  showButton: false,
  showContact: false,
  setShowProjects: () => {},
  setShowButton: () => {},
  setShowContact: () => {},
});

const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [showProjects, setShowProjects] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const toggleDisabled = (newValue: boolean) => {
    setShowProjects(newValue);
  };

  const contextValue: MyContextData = {
    showProjects,
    showButton,
    showContact,
    setShowProjects: toggleDisabled,
    setShowButton,
    setShowContact,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export { MyContext, AppContextProvider };
