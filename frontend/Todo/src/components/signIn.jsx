import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import axios from "axios";

function SignIn() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    const url = "http://localhost:4000/login";
    await fetch(url, {
      method: "post",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(response);
      })
      .then((result) => {
        // console.log("success:,", data);
        localStorage.setItem("token", result.token);
        setSuccess((success) => (success = result.message));
        navigate("/main");
        // console.log(data.message);
      })
      .catch((error) => {
        console.log(error);
        setError("invalid credentials");
      });
  };

  return (
    <div className="bg-cover bg-gradient-to-l from-white to-cyan-100 h-screen flex">
      <div className="mt-64 mx-52">
        <h1 className="text-orange-400 text-9xl font-sans">DailyDo</h1>
        <div>
          <img></img>
        </div>
      </div>

      <div className="w-1/3 h-96 bg-slate-100 rounded-xl shadow-lg shadow-slate-300 sticky items-center mx-0 mt-32 p-0">
        <div>
          <h1 className="font-serif block mt-px text-orange-400 text-2xl mx-12">
            LOGIN
          </h1>
        </div>

        <form className="mx-12 mt-12" onSubmit={handleSubmit}>
          <div>
            <label className="block font-serif">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-blue-300">
                Email
              </span>
              <input
                required
                onChange={handleChange}
                value={data.email}
                type="email"
                name="email"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-2/3 rounded-md sm:text-sm focus:ring-1"
                placeholder="you@example.com"
              />
            </label>
            <label className="block font-serif">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-blue-300">
                password
              </span>
              <input
                required
                onChange={handleChange}
                value={data.password}
                type="password"
                name="password"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-2/3 rounded-md sm:text-sm focus:ring-1"
                placeholder="password"
              />
            </label>
            <small className="text-color-red text-sm">{error}</small>
            <small className="text-color-red text-sm">{success}</small>

            <button
              className="font-serif bg-green-300 h-8 w-1/2  rounded-lg mt-5 text-white mx-4"
              type="submit"
            >
              Login
            </button>

            <Link to="/signup">
              <button className="font-serif bg-orange-300 h-8 w-1/2  rounded-lg mt-5 text-white mx-4">
                SignUp
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
