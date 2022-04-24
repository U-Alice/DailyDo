import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Form({ setInput, input, toDo, setToDo, setStatus }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    console.log("user logged out");
    navigate("/signIn");
  };
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleAdd = (e) => {
    e.preventDefault();
    setToDo([
      ...toDo,
      { Text: input, completed: false, id: Math.random() * 1000 },
    ]);
    setInput("");
    e.target.value = "";
  };

  const statusHandler = (e) => {
    setStatus(e.target.value)
  };

  return (
    <div>
      <nav>
        <button onClick={handleLogout}>Log Out</button>
      </nav>
      <div className="mx-25%">
        <h3 className="text-4xl text-slate-500 underline ">
          Welcome Alice,you have completed 100% of your to do list
        </h3>
      </div>
      <div className="mx-25% w-screen flex">
        <div className=" bg-white h-12 rounded-sm w-1/2 border border-orange-100 flex mt-16">
          <input
            className="w-500px h-full rounded-sm focus:outline-none focus:border-red-500 focus:ring-sky-500 font-serif"
            placeholder="Add a new toDo"
            onChange={handleInputChange}
            value={input}
          />
          <button
            className="ml-32 w-32 h-8 mt-2 rounded-sm bg-green-200 text-white font-serif text-4"
            onClick={handleAdd}
          >
            ADD
          </button>
        </div>
        <div>
          <select
            className="w-200px h-12 rounded-sm focus:outline-none focus:border-red-500 focus:ring-sky-500 font-serif mt-16 mx-12"
            onChange={statusHandler}
          >
            <option value="all">All</option>
            <option value="completed">completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Form;
