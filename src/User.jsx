// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";

// export function User() {
//   const [users, setUsers] = useState([]);
//   const [posts, setPosts] = useState([]);
//   const [todos, setTodos] = useState([]);
//   const [comments, setComments] = useState([]);

//   const { userId } = useParams();

//   useEffect(() => {
//     fetch("http://127.0.0.1:3000/posts")
//       .then((res) => res.json())
//       .then((data) => setPosts(data));

//     fetch("http://127.0.0.1:3000/comments")
//       .then((res) => res.json())
//       .then((data) => setComments(data));

//     fetch("http://127.0.0.1:3000/users")
//       .then((res) => res.json())
//       .then((data) => setUsers(data));

//     fetch("http://127.0.0.1:3000/todos")
//       .then((res) => res.json())
//       .then((data) => setTodos(data));
//   }, []);
//   const parsedUserId = parseInt(userId, 10);

//   return (
//     <>
//       <div className="container">
//         {users.map((user) => {
//           if (user.id === parsedUserId) {
//             return (
//               <div key={user.id}>
//                 <h1 className="page-title">{user.name}</h1>
//                 <div className="page-subtitle">{user.email}</div>
//                 <div>
//                   <b>Company:</b> {user.company.name}
//                 </div>
//                 <div>
//                   <b>Website:</b> {user.website}
//                 </div>
//                 <div>
//                   <b>Address:</b>{" "}
//                  {user.address.street} {user.address.suite}, {user.address.city}, {user.address.zipcode}
//                 </div>
//               </div>
//             );
//           }
//         })}
//         <h3 className="mt-4 mb-2">Posts</h3>

//         <div className="card-grid">
//           {posts.map((post) => {
//             if (post.userId === parsedUserId) {
//               return (
//                 <div key={post.id} className="card">
//                   <div className="card-header">{post.title}</div>

//                   <div className="card-body">
//                     <div className="card-preview-text">{post.body}</div>
//                   </div>

//                   <div className="card-footer">
//                     <Link className="btn" href="posts.html">
//                       View
//                     </Link>
//                   </div>
//                 </div>
//               );
//             } else {
//               return null;
//             }
//           })}
//         </div>

//         <h3 className="mt-4 mb-2">Todos</h3>

//         {todos.map((todo) => {
//           if (todo.userId === parsedUserId) {
//             return (
//               <ul key={todo.id}>
//                 <li className={todo.completed?"strike-through":undefined}>{todo.title}</li>
//               </ul>
//             );
//           } else {
//             return null;
//           }
//         })}
//       </div>
//     </>
//   );
// }

//  USING LOADER

import { useLoaderData, useNavigation, useParams } from "react-router-dom";
import { getUser } from "./api/USERS";
import axios from "axios";

function User() {
  const user = useLoaderData();

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
          {/* <div className="card">
        <div className="card-header">
          sunt aut facere repellat provident occaecati excepturi optio
          reprehenderit
        </div>
        <div className="card-body">
          <div className="card-preview-text">
            quia et suscipit suscipit recusandae consequuntur expedita et cum
            reprehenderit molestiae ut ut quas totam nostrum rerum est autem
            sunt rem eveniet architecto
          </div>
        </div>
        <div className="card-footer">
          <a className="btn" href="posts.html">View</a>
        </div>
      </div> */}
        </div>

        <h3 className="mt-4 mb-2">Todos</h3>

        {/* <ul>
      <li>delectus aut autem</li>
      <li>quis ut nam facilis et officia qui</li>
      <li>fugiat veniam minus</li>
      <li className="strike-through">et porro tempora</li>
      <li>laboriosam mollitia et enim quasi adipisci quia provident illum</li>
      <li>qui ullam ratione quibusdam voluptatem quia omnis</li>
      <li>illo expedita consequatur quia in</li>
      <li className="strike-through">quo adipisci enim quam ut ab</li>
    </ul> */}
      </div>
    </>
  );
}

function loader({ request: { signal }, params }) {
  return getUser(params.userId, { signal });
}

export const UserRoute = {
  loader,
  element: <User />,
};
