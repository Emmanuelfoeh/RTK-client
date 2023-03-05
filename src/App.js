import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useGetEmployeesQuery } from "./features/employees-api/employeesApi";
import RegistrationPage from "./Pages/RegistrationPage";

function App() {
  const { data,isLoading, error } = useGetEmployeesQuery();

  if(isLoading)  return <p>Loading</p>
  console.log("error", error);
  // const [employees, setEmployees] = useState(null);

  // const fetchData = async () => {

  //   try {
  //     const response = await axios.get("http://localhost:8088/api/v1/employees");
  //   const data = response.data;
  //   setEmployees(data);
  //   } catch (error) {
  //       console.log(error);
  //   }

  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  console.log("fetch data", data);

  return (
    <div className="App">
      <RegistrationPage/>
    </div>
  );
}

export default App;
