import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import axios from "axios";

function Signup() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    language: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const[ success, setSuccess] = useState("")
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const Navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    Navigate("/login");
   await fetch("http://localhost:4000/register", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  
  // try{

  //   const url = "http://localhost:4000/register";
  //   const { data: res } = await axios.post(url, data);
  //     setError(error => error = "")
  //     setSuccess(success => success = res.message)
  //     console.log("submitted");
  // } catch (error) {
  //   console.log(error);
  //   if (error.response) {
  //     console.log(error.response);
  //   } else if (error.request) {
  //     console.log(error.request);
  //   } else if (error.message) {
  //     console.log(error.message);
  //   }
  //   {
  //     setError(error.response.data.message);
  //   }
  // }

}

  return (
    <div className="bg-cover bg-gradient-to-l from-blue-200 to-blue-300 h-screen flex">
      <div className="mt-64 mx-36 w-1/3 ">
        <h1 className="text-green-200 text-9xl font-greatVibes  mx-16">DailyDO</h1>
        <div><img src='https://cdn.sanity.io/images/jx1km445/production/0b1952749ef9f22ea5b0dd52dce3ecffba8821f1-1200x900.png'/></div>
      </div>
      <div className="w-1/3 h-5/6 bg-slate-100 rounded-xl shadow-lg shadow-slate-300 sticky items-center mx-auto mt-16  p-0">
        <div>
          <h1 className="font-serif block mt-px text-green-400 text-2xl mx-12 mt-4">
            SIGN UP
          </h1>
        </div>
        <form className="mt-12 mx-12" onSubmit={handleSubmit}>
          <div>
            <label className="block font-serif">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-blue-300">
                First Name
              </span>
              <input
                required
                onChange={handleChange}
                value={data.firstName}
                type="text"
                name="firstName"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-2/3 rounded-md sm:text-sm focus:ring-1"
                placeholder="First Name"
              />
            </label>
            <label className="block font-serif">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-blue-300">
                Last Name
              </span>
              <input
                required
                onChange={handleChange}
                value={data.lastName}
                type="text"
                name="lastName"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-2/3 rounded-md sm:text-sm focus:ring-1"
                placeholder="Last Name"
              />
            </label>
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
            <label className="block font-serif">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-blue-300">
                language
              </span>
              <input
                required
                onChange={handleChange}
                value={data.language}
                type="text"
                name="language"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-2/3 rounded-md sm:text-sm focus:ring-1"
                placeholder="language"
              />
            </label>
            <label className="block font-serif">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-blue-300">
                confirmPassword
              </span>
              <input
                required
                onChange={handleChange}
                value={data.confirmPassword}
                type="password"
                name="confirmPassword"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-2/3 rounded-md sm:text-sm focus:ring-1"
                placeholder="password"
              />
            </label>
            <small className="text-red-800 font-mono text-sm">{error}</small>
            <small className="text-red-800 font-mono text-sm">{success}</small>

        
              <button className="font-serif bg-blue-300 h-8 w-1/2  rounded-lg mt-5 text-white mx-4" type="submit">
                SignUp
              </button>
            <Link to="/signIn">
              <button className="font-serif bg-green-300 h-8 w-1/2  rounded-lg mt-5 text-white mx-4">
                LOGIN
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>

  );
}

export default Signup;
