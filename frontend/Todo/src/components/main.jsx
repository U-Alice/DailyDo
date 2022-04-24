import React, { useState, useEffect } from "react";
import Form from "./Form";
import ToDos from "./toDo";
import ToDoList from "./toDoList";

function Main() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const [input, setInput] = useState("");

  const [toDo, setToDo] = useState([]);

  const [status, setStatus] = useState("");

  const [filteredTodos, setfilteredTodos] = useState("");

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setfilteredTodos(toDo.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setfilteredTodos(toDo.filter((todo) => todo.completed === false));
        break;
      default:
        setfilteredTodos(toDo);
        break;
    }
  };

  useEffect(() => {
    filterHandler()
  }, [toDo, status]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { res };
    const url = "http://localhost:4000/login";
    fetch(url, {
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("success:", data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  return (
    <div className="bg-gradient-to-b from-blue-100 to-blue-200 h-screen overflow-hidden">
      <Form
        setInput={setInput}
        setToDo={setToDo}
        toDo={toDo}
        input={input}
        setStatus={setStatus}
        setfilteredTodos={setfilteredTodos}
      />
      <ToDoList toDoss={toDo} setToDo={setToDo}  filteredTodos={filteredTodos}/>
    </div>
  );
}
export default Main;
