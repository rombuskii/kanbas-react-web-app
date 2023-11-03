import { useState } from "react";
function WorkingWithArrays() {
    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });
    const API = "http://localhost:4000/a5/todos";
    return (
      <div>
        <h3>Working with Arrays</h3>
        <h4>Retrieving Arrays</h4>
        <a href={API} className="btn btn-primary me-2">
          Get Todos
        </a>
        <h4>Retrieving an Item from an Array by ID</h4>
        <input
        onChange={(e) => setTodo({...todo, id: e.target.value})}
        value={todo.id}
        placeholder="ID"
        className="form-control mb-2 w-75"
        type="text" />
      <a href={`${API}/${todo.id}`}
         className="btn btn-primary me-2">
        Get Todo by ID
      </a>
      <h3>Filtering Array Items</h3>
      <a href={`${API}?completed=true`}
      className="btn btn-primary me-2" >
        Get Completed Todos
  </a>

      </div>
    );
  }
  export default WorkingWithArrays;