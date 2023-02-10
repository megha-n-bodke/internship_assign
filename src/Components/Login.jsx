import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { MuiTelInput } from "mui-tel-input";

// import MuiPhoneNumber from "material-ui-phone-number";

const Login = () => {
  const [phone, setPhone] = useState("");

  const handleChange = (newPhone) => {
    setPhone(newPhone);
  };
  /* const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
  });

  // error handling state
  const [errors, setErrors] = useState({});

  // after form submit data
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate());
  };

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
    }
    return errors;
  }; */

  return (
    <div>
      <form>
        <TextField
          label="Name"
          name="name"
          //   value={formData.name}
          //   onChange={handleChange}
          //   error={!!errors.name}
          //   helperText={errors.name}
          //   margin="normal"
          required
        />

        <TextField
          label="Email"
          name="email"
          //value={formData.email}
          // onChange={handleChange}
          // error={!!errors.email}
          // helperText={errors.email}
          margin="normal"
          required
        />
        <MuiTelInput
          label="Enter your phone number"
          name="phone"
          margin="normal"
          value={phone}
          onChange={handleChange}
          required
        />

        <TextField
          type="tel"
          label="Phone number"
          name="phone"
          //value={formData.email}
          // onChange={handleChange}
          // error={!!errors.email}
          // helperText={errors.email}
          margin="normal"
          required
        />

        <Button variant="outlined" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
