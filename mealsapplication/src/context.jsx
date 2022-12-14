import React, { useContext, useEffect } from "react";

const AppContext = React.createContext();

const allMealsUrl = "www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";
const randomMealUrl = "www.themealdb.com/api/json/v1/1/random.php";

const AppProvider = ({ children }) => {
  const fetchData = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = response.json();
      console.log(data);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ name: "john", role: "student" }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
