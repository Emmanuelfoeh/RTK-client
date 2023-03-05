import React, { useRef, useState } from "react";
import FormInput from "../components/formInputs/FormInput";
import { useAddNewEmployeeMutation } from "../features/employees-api/employeesApi";

const RegistrationPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");

  const [addEmployee, { isLoading }] = useAddNewEmployeeMutation();

  //   const addNewEmployee = async (employee) => {
  //     await addEmployee(employee);
  //   };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
    };

    console.log(formData);
    addEmployee(formData);
  };

  if (isLoading) return <p>Saving data to DB...</p>;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Registration</h2>
        <div className="formGroup">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="firstName"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* <FormInput type="text" name="firstName" ref={firstName}/>
    <FormInput type="text" name="lastName" ref={lastName}/>
    <FormInput ref={email}/> */}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
