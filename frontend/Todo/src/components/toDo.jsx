import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ToDos({ text, toDos, toDo, setToDo }) {
  // const Navigate = useNavigate()
  const deleteHandler = async (e) => {
    console.log(toDo)
    e.preventDefault();
    Navigate(`main/${toDo.id}`);
    setToDo(toDos.filter((el) => el.id !== toDo.id)); 
      const url = "http://localhost:4000/delete/:id";
      await fetch(url, {  
        method:"DELETE",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({id : toDo.id}),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log("success:", data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
      Navigate("/main");
    
  };

  const completedHandler = () => {
    setToDo(
      toDos.map((item) => {
        if (item.id === toDo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="mx-96 mt-8 w-screen">
      <div className=" bg-white h-12 rounded-sm w-1/2 border border-orange-100 flex">
        <div
          className={`pt-2 font-serif ${toDo.completed ? "line-through" : ""}`}
        >
          {text}
        </div>
        <div className=" gap-4 pt-2 font-serif text-slate-800 flex absolute left-1/2 mx-56">
          <button
            className="h-8 w-16 bg-green-200 rounded-sm"
            onClick={completedHandler}
          >
            completed
          </button>
          <button
            className="h-8 w-16 bg-red-200 rounded-sm"
            onClick={deleteHandler}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default ToDos;
