"use client";

import { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";

const LoginForm = () => {
  const { loginUser,user,logout } = useAuthContext();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const onChange = ({ target }) => {
    const { name, value } = target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    
  };

  useEffect(() => {
     (user.logged && !user.isAdmin) && logout() , setValues({
      email: "",
      password: "",
     })
  }, [user])
  

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={onSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                onChange={onChange}
                name="email"
                value={values.email}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                value={values.password}
                onChange={onChange}
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-5">
              <button
                className="btn btn-primary"
                onClick={() => loginUser(values)}
              >
                Login
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
