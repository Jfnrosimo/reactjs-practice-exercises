import { useState } from "react";

const LoginForm = ({ Login, error }) => {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2 className="text-2xl">Login</h2>
        {error !== "" ? <div className="error text-red-600">{error}</div> : ""}
        <div className="form-group mt-2">
          <label htmlFor="name" className="mr-2">
            Name:
          </label>
          <input
            className="border border-slate-900"
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="email" className="mr-2">
            Email:
          </label>
          <input
            className="border border-slate-900"
            type="text"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="password" className="mr-2">
            Password:
          </label>
          <input
            className="border border-slate-900"
            type="text"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <input
          className="mt-4 border-2 border-green-400 py-1 px-4 hover:bg-green-500 hover:cursor-pointer"
          type="submit"
          value="LOGIN"
        />
      </div>
    </form>
  );
};

export default LoginForm;
