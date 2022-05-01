import ToDos from "./toDo";

function ToDoList({ toDoss, setToDo, setFilteredtodo, filteredTodos}) {
  return (
    <div>
      <ul>
        {filteredTodos.map((toDo) => (
          <ToDos text={toDo.Text} setToDo={setToDo} toDos={toDoss} toDo={toDo}/>
        ))}
      </ul>
    </div>
  );
}
export default ToDoList;
