import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({todo} : {todo: {id: string, title: string};}) {
    const dispatch = useDispatch(); 
    return (
      <li key={todo.id} className="list-group-item container w-25 m-0">
        <div className="row row-cols-2">
        <div className="col">
            {todo.title}
        </div>
        <div className="col">
            <button onClick={() => dispatch(deleteTodo(todo.id))}
                    id="wd-delete-todo-click" className="btn btn-danger"> Delete </button>
            <button onClick={() => dispatch(setTodo(todo))}
                    id="wd-set-todo-click" className="btn btn-primary m-1"> Edit </button>
        </div>
        </div>
        
      </li>
    );
  }
  