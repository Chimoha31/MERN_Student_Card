import { createContext, useContext, useState } from "react";
import { auth } from "../firebase/Firebase";

const studentAuthContext = createContext();

export const StudentAuthContextProvider = ({ children }) => {
  const [student, setStudent] = useState({});



  return (
    <studentAuthContext.Provider value={{}}>
      {children}
    </studentAuthContext.Provider>
  );
};

export const useStudentAuth = () => {
  return useContext(studentAuthContext);
};
