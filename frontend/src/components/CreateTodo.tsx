import { useState } from "react";
import { createTodoUser } from "../services";


function createTodo() {
    const [title, setTitle] = useState("");

    async function handleCreate(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(title)
        const todos = await createTodoUser(title);
        console.log(todos);
    }

  return (
    <div>
        <form onSubmit={handleCreate}>
            <input type="text" placeholder="Todo Title" value={title} onChange={(e)=> setTitle(e.target.value)}></input>
            <button type="submit">Create Todo</button>
        </form>
    </div>
  ) 
}

export default createTodo