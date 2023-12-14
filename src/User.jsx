import { Link, useLoaderData, useNavigation, useParams } from "react-router-dom";
import { getUser } from "./api/users";
import axios from "axios";
import { getPosts, getUserPost } from "./api/posts";
import { getUserTodos } from "./api/todos";
import { PostCard } from "./Components/PostCard";
import { TodoItems } from "./Components/TodoItems";

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
              <PostCard key={post.id} {...post}/>
            );
          })}
        </div>

        <h3 className="mt-4 mb-2">Todos</h3>

        <ul>
         
         {todos.map((todo) => {
          return(
            <TodoItems key={todo.id} {...todo} />
          )
         })}       
        </ul>
      </div>
    </>
  );
}

export async function loader({ request: { signal }, params: { userId } }) {
  const posts = getUserPost(userId,{signal});
  const todos = getUserTodos(userId,{signal})
  const user = getUser(userId, { signal });
  return {posts: await posts, todos: await todos, user: await user };
}

export const UserRoute = {
  loader,
  element: <User />,
};
