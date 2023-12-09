import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { getTodos } from "../api/todos";
import { TodoItems } from "../Components/TodoItems";

function Todos() {
  const todos = useLoaderData();

  return (
    <>
      <div className="container">
        <h1 className="page-title">Todos</h1>
        <ul>
          {todos.map((todo) => {
            return (
              <TodoItems key={todo.id} {...todo} />
            );
          })}
        </ul>
      </div>
    </>
  );
}

function loader({ request: { signal } }) {
  return getTodos({ signal });
}

export const TodosRoute = {
  loader,
  element: <Todos />,
};
