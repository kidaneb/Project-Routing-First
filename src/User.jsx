import { Link, useLoaderData, useNavigation, useParams } from "react-router-dom";
import { getUser } from "./api/USERS";
import axios from "axios";
import { getPosts, getUserPost } from "./api/posts";
import { getTodos } from "./api/todos";

function User() {
  const { user, posts, todos } = useLoaderData();

  return (
    <>
      <div className="container">
        <h1 className="page-title">{user.name}</h1>
        <div className="page-subtitle">{user.email}</div>
        <div>
          <b>Company:</b> {user.company.name}
        </div>
        <div>
          <b>Website:</b> {user.website}
        </div>
        <div>
          <b>Address:</b> {user.address.street} {user.address.suite},{" "}
          {user.address.city}, {user.address.zipcode}
        </div>
        <h3 className="mt-4 mb-2">Posts</h3>

        <div className="card-grid">
          {posts.map((post) => {
            return (
              <div key={post.id} className="card">
                <div className="card-header">
                  {post.title}
                </div>
                <div className="card-body">
                  <div className="card-preview-text">
                    {post.body}
                  </div>
                </div>
                <div className="card-footer">
                  <Link className="btn" to="/posts">
                    View
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <h3 className="mt-4 mb-2">Todos</h3>

        <ul>
         
         {todos.map((todo) => {
          return(
            <li key={todo.id} className= { todo.completed ? "strike-through" : "" }>{todo.title}</li>
          )
         })}       
        </ul>
      </div>
    </>
  );
}

export async function loader({ request: { signal }, params: { userId } }) {
  const user = getUser(userId, { signal });
  const posts = getUserPost(userId, { signal });
  const todos = getTodos(userId, {signal})
  return { user: await user, posts: await posts, todos: await todos };
}

export const UserRoute = {
  loader,
  element: <User />,
};
