import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const navigate = useNavigate();

  // error handling state
  const [errors, setErrors] = useState({});

  // error handling
  const validate = () => {
    const errors = {};
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.phone) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{3}\d{3}\d{4}$/.test(values.phone)) {
      errors.phone = "Invalid phone number";
    }
    return errors;
  };

  const handleChange = (event) => {
    setValues((prevData) => {
      return {
        ...prevData,
        [event.target.id]: event.target.value,
      };
    });
  };

  console.table(values);
  // after form submit data
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate());

    //check if user already logged in or not
    if (localStorage.getItem("info")) {
      alert("Already logged in");
    } else {
      //store data to localstorage
      if (values.name === "" && values.email === "" && values.phone == "") {
        console.log("Object is empty");
      } else {
        const information = JSON.stringify(values);
        localStorage.setItem("info", information);
        navigate("/posts");
      }
    }
    // setValues("");
  };

  const remove = () => {
    localStorage.removeItem("info");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection={"column"}>
          <TextField
            label="Name"
            id="name"
            value={values.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            margin="normal"
          />

          <TextField
            label="Email"
            id="email"
            value={values.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            margin="normal"
          />
          <TextField
            label="Enter your phone number"
            id="phone"
            type="number"
            margin="normal"
            value={values.phone}
            onChange={handleChange}
            error={!!errors.phone}
            helperText={errors.phone}
          />

          <Button variant="outlined" type="submit">
            Submit
          </Button>
          <Button variant="outlined" onClick={remove}>
            Logout
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Login;
