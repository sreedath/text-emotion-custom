import { createContext, useContext, useEffect, useState } from "react";

const EmotionContext = createContext(null);

const EmotionContextProvider = ({ children }) => {
  const [isTrain, setIsTrain] = useState([false,false]);
  
  return (
    <EmotionContext.Provider
      value={{
        isTrain,
        setIsTrain,
      }}
    >
      {children}
    </EmotionContext.Provider>
  );
};

const useEmotionContext = () => {
  // Check if the code is running on the client side
  if (typeof window === "undefined") {
    // Return a default value or handle the case accordingly
    return {};
  }
  return useContext(EmotionContext);
};

export { useEmotionContext, EmotionContextProvider };
