import React, { createContext, useState, ReactNode } from "react";

interface MyContextData {
  isDisabled: boolean;
  setIsDisabled: (newValue: boolean) => void;
}

interface AppContextProviderProps {
  children: ReactNode;
}

const MyContext = createContext<MyContextData>({
  isDisabled: false,
  setIsDisabled: () => {},
});

const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const toggleDisabled = (newValue: boolean) => {
    setIsDisabled(newValue);
  };

  const contextValue: MyContextData = {
    isDisabled,
    setIsDisabled: toggleDisabled,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export { MyContext, AppContextProvider };
