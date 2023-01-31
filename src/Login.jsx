import {
  Alert,
  Button,
  Card,
  FormChild,
  FormElement,
  TextField,
} from "@cedcommerce/ounce-ui";
import React from "react";
import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMsg, setAlertMsg] = useState("");
  const emailHandler = (e) => {
    setEmail(e);
  };
  const passwordHandler = (e) => {
    setPassword(e);
  };
  const loginButtonHandler = () => {
    console.log("clicked");
    console.log(email.length);
    console.log(password);
    if (email === "") {
      setAlertMsg("Please write your email");
      document.getElementById("Email").focus();
      return;
    } else if (password === "") {
      document.getElementById("Password").focus();
      setAlertMsg("Please write your password");
      return;
    } else if (email !== "" && password !== "") {
      setAlertMsg("Login sucess!");
      console.log(alertMsg.length);
      setEmail("");
      setPassword("");
    }
  };
  const closetAlert = () => {
    setAlertMsg("");
  };
  return (
    <div className="LoginPage">
      <h1 style={{ textAlign: "center" }}>Login Form</h1>
      <Card>
        <FormElement>
          <FormChild>
            <TextField
              helpIcon=""
              id="Email"
              max="200"
              maxlength="20"
              min="20"
              value={email}
              name="Email"
              placeHolder="Write your email here"
              prefix=""
              suffix=""
              tabIndex={1}
              thickness="thick"
              type="email"
              onChange={emailHandler}
            />
          </FormChild>
        </FormElement>
        <br />
        <TextField
          name="Password"
          id="Password"
          onChange={passwordHandler}
          strength
          type="password"
          value={password}
          placeHolder="Write Password here.."
        />
        <br />
        <Button onClick={loginButtonHandler}>Login</Button>
      </Card>
      {alertMsg === "" ? (
        " "
      ) : (
        <Card>
          <Alert
            destroy
            onClose={closetAlert}
            type={`${alertMsg.length === 13 ? "success" : "danger"}`}
          >
            {alertMsg}
          </Alert>
        </Card>
      )}
    </div>
  );
};

// {`massages ${uid === v1.uid ? 'sent' : 'received'}`}
