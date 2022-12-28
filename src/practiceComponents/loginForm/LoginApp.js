import { useState } from "react";

//Import component
import LoginForm from "./LoginForm";

const LoginApp = () => {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("Logged in");
      setUser({ name: details.name, email: details.email });
    } else {
      console.log("details do not match!");
    }
  };

  const Logout = (details) => {
    setUser({ name: "", email: "" });
    setError("Details does not match!");
  };

  return (
    <div className="text-center m-2 border border-slate-500 p-5">
      <h1 className="text-3xl font-semibold">Login Form</h1>
      <div className="mt-4">
        {user.email !== "" ? (
          <div className="welcome">
            <h2 className="">
              Welcome, <span>{user.name}</span>
            </h2>
            <button onClick={Logout}>Logout</button>
          </div>
        ) : (
          <LoginForm Login={Login} error={error} />
        )}
      </div>
    </div>
  );
};

export default LoginApp;
