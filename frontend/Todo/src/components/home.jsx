import React from "React";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen bg-no-repeat bg-cover bg-gradient-to-l  from-white to-cyan-100 flex overflow-hidden">
      {/* <nav className="bg-orange-200 h-50px text-blue-700 ">
        <ul>
          <li className="inline mx-12">
            <Link to="/signUp">signUp</Link>
          </li>
          <li className="inline mx-12">
            <Link to="/signIn">Login</Link> 
          </li>
          <li className="inline mx-12">
            <Link to="/main">Home</Link>
          </li>
        </ul>
      </nav> */}
      <div className="text-white mt-64 h-100vh bg-no-repeat mx-32">
        <p className="text-9xl text-orange-200">DailyDo</p>
        <p className="text-xl font-serif text-slate-600">
          End your schedule struggles, Plan your day Live to your best
        </p>
      </div>
      <div className="h-1/2 w-1/3 font-serif mx-32 mt-64">
        <div className="flex w-64">
          <img src="https://cdn.sanity.io/images/jx1km445/production/4887f85010575838ebade14cc572cf8f694f9af7-1200x900.png" />
          <img src="https://cdn.sanity.io/images/jx1km445/production/9ce6a60e9fa8c0bd751be3b5169c82d8adab3979-1200x900.png" />
        </div>

        <div className="flex">
          <Link to="/signIn">
            <button className="h-50px w-50px bg-orange-300 rounded-sm mx-12 w-200px mt-12 text-white">
              Sign In
            </button>
          </Link>
          <Link to="/signUp">
            <button className="h-50px w-50px bg-blue-300 rounded-sm mx-12 w-200px mt-12 text-white ml-12">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Home;
