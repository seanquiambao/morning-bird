import { createContext, ReactElement, useContext, useState } from "react";

type contextType = {
  location: {
    source: string;
    destination: string;
  };
  setLocation: React.Dispatch<
    React.SetStateAction<{
      source: string;
      destination: string;
    }>
  >;
};
type props = {
  children: ReactElement;
};
const LocationContext = createContext<contextType | null>(null);

export const LocationProvider = ({ children }: props) => {
  const [location, setLocation] = useState({
    source: "",
    destination: "",
  });

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error("Context error");
  }
  return context;
};
