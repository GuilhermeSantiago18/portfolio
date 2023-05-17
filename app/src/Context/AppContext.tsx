import React, { createContext, useState, ReactNode } from "react";

interface MyContextData {
  isDisabled: boolean;
  showButton: boolean;
  setIsDisabled: (newValue: boolean) => void;
  setShowButton: (newValue: boolean) => void;
}

interface AppContextProviderProps {
  children: ReactNode;
}

const MyContext = createContext<MyContextData>({
  isDisabled: false,
  showButton: false,
  setIsDisabled: () => {},
  setShowButton: () => {},
});

const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const toggleDisabled = (newValue: boolean) => {
    setIsDisabled(newValue);
  };

  const contextValue: MyContextData = {
    isDisabled,
    showButton,
    setIsDisabled: toggleDisabled,
    setShowButton,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export { MyContext, AppContextProvider };
