import { createContext, useContext } from "react";

interface IExampleProvider {
   children: React.ReactNode;
}

const ExampleContext = createContext({});

const ExampleProvider = ({ children }: IExampleProvider) => {
   const value = {};

   return (
      <ExampleContext.Provider value={value}>
         {children}
      </ExampleContext.Provider>
   );
};

export default ExampleProvider;
