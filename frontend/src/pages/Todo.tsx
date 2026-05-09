import { useEffect, useState } from "react";
import CreateTodo from "../components/TodoForm";
import { getTodos, handeldelete, updateTodo } from "../services";

interface Todotype {
  id: string;
  title: string;
  isCompleted: boolean;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

function Todo() {
  const [todo, settodo] = useState<Todotype[]>([]);

  async function handelUpdateTodo(item: Todotype) {
    const data = await updateTodo(item.id, !item.isCompleted);
    console.log(data, "updated successfully");
    settodo((prev) => prev.map((todo) => (todo.id === item.id ? { ...todo, isCompleted: data.isCompleted } : todo)));
  }

  async function handelDelete(item : Todotype) {

    const isconfirmed = confirm("are you sure you want to delete this todo?")

    if(!isconfirmed){
      return;
    }

    const data = await handeldelete(item.id);
    console.log(data, "deleted successfully");

    settodo((prev) => prev.filter(element => element.id !== item.id))
  }

  useEffect(() => {
    async function gettodo() {
      const data = await getTodos();
      settodo(data);
    }
    gettodo();
  }, []);

  return (
    <div>
      <CreateTodo todoArr={settodo} />
      {todo.map((item) => (
        <div key={item.id} style={{ display: "flex", gap: "10px" }}>
          {/* {item.isCompleted ? "completed" : "not completed"} - {item.title} */}
          <input
            onClick={() => handelUpdateTodo(item)}
            type="checkbox"
            checked={item.isCompleted}
          />
          <p> {item.title} </p>
          <p onClick={()=> handelDelete(item)}> 🗑️ </p>
        </div>
      ))}
    </div>
  );
}

export default Todo;
