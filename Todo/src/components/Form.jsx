import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Form({ setInput, input, toDo, setToDo, setStatus }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    console.log("user logged out");
    navigate("/signIn");
  };
  const [todoInput, settodoInput] =  useState([])
   fetch("http://localhost:4000/api/list").then((response)=> {
      response.json()
  }).then((data)=>{console.log(data.toDo[0].toDo)})
  const handleInputChange = (e) => {
    setInput(e.target.value);
    settodoInput({...todoInput, [e.target.name] : e.target.value})
    // setData({ ...data, [input.name]: input.value });
  };

  const handleAdd = async (e) => {

    e.preventDefault();
    // e.target.value = "";
    const url = "http://localhost:4000/api/toDo";      
    await fetch(url, {
      method:"POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(todoInput),
    })
    .then((response) => {
      return response.json()
    }
    )
    .then((data) => {
      setToDo([
        ...toDo,
        { Text: input, completed: false, id: data.data._id},
      ]);
      console.log(data.data._id)
          console.log("success:", data.data.todoId);
        })
        .catch((error) => {
          console.log("Error", error);
        });
  };

  const statusHandler = (e) => {
    setStatus(e.target.value)
  };

  return (
    <div>
      <div className="pt-4">
        <h3 className="font-greatVibes text-3xl text-white ml-12 underline">Monday 2nd May</h3>
      </div>
      <div className="flex">
        <h3 className="text-2 text-blue-600 mt-4 ml-12 w-full text-greatVibes">
          Welcome Alice, you have completed 100% of your to do list
        </h3>
        <button onClick={handleLogout} className="bg-green-300 rounded-sm text-white h-8 w-32 mr-4">Log Out</button>
      </div>
      <div className=" w-screen flex">
        <div className=" bg-white h-12 rounded-sm w-1/3 border border-orange-100 flex mt-16 m-4">
          <input
            className="w-1/3 h-full rounded-sm pl-4 focus:outline-none text-quickSand focus:border-red-500 focus:ring-sky-500"
            placeholder="Add a new toDo"
            onChange={handleInputChange}
            name="toDo"
           
          />
          <button
            className="ml-64 mr-2 w-32 h-8 mt-2 rounded-sm bg-green-300 text-white font-serif text-4"
            onClick={handleAdd}
          >
            ADD
          </button>
        </div>
        <div>
          <select
            className="w-200px h-12 rounded-sm focus:outline-none focus:border-red-500 focus:ring-sky-500 font-serif mt-16 mx-4"
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
