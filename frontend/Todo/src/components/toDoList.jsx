import ToDos from "./toDo";

function ToDoList({ toDoss, setToDo, setFilteredtodo, filteredTodos}) {
    toDoss.map((toDo)=>{
        console.log(toDo)
    })
    console.log(filteredTodos)
  return (
    <div>
      <ul>
        {toDoss.map((toDo) => (
          <ToDos text={toDo.Text} setToDo={setToDo} toDos={toDoss} toDo={toDo}/>
        ))}
      </ul>
    </div>
  );
}
export default ToDoList;
