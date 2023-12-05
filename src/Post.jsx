// import { useEffect, useState } from "react";
// import { Link, useLoaderData, useParams } from "react-router-dom";


// export function Post() {
//   const [users, setUsers] = useState([]);
//   const [posts, setPosts] = useState([]);
//   const [todos, setTodos] = useState([]);
//   const [comments, setComments] = useState([]);

//   const { postId } = useParams();
 
//   console.log(posts)
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
//   }, []);
//   const parsedPostId = parseInt(postId, 10);
//   return (
//     <div className="container">
//       {posts.map((post) => {
//         if (post.id === parsedPostId) {
//           return (
//             <div key={post.id}>
//               <h1 className="page-title">{post.title}</h1>
//               {users.map((user) => {
//                 if (user.id === post.userId) {
//                   return (
//                     <div key={user.id}>
//                       <span className="page-subtitle">
//                         By: <Link to={`users/${user.id}`}>{user.name}</Link>
//                       </span>
//                     </div>
//                   );
//                 } else {
//                   return null;
//                 }
//               })}
//               <div>{post.body}</div>
//             </div>
//           );
//         } else {
//           return null;
//         }
//       })}

//       <h3 className="mt-4 mb-2">Comments</h3>

//       <div className="card-stack">
//         {comments.map((comment) => {
//           if (comment.postId === parsedPostId) {
//             return (
             
//                 <div key={comment.id} className="card">
//                   <div className="card-body">
//                     <div className="text-sm mb-1">{comment.email}</div>
//                     {comment.body}
//                   </div>
//                 </div>
            
//             );
//           }
//           else{return null}
//         })}
//       </div>
//     </div>
//   );
// }

// USING LOADER
import axios from "axios";

import { getPost } from "./api/posts"
import { useLoaderData } from "react-router-dom";

 function Post(){
  const post = useLoaderData();
 
  return(
  <>
 <div className="container">
      <h1 className="page-title">
        {post.title}
      </h1>
      {/* <span className="page-subtitle"
        >By: <a href="user.html">Leanne Graham</a></span
      > */}
      <div>
        {post.body}
      </div>
      <h3 className="mt-4 mb-2">Comments</h3>
      
      <div className="card-stack">

        {/* <div className="card">
          <div className="card-body">
            <div className="text-sm mb-1">Eliseo@gardner.biz</div>
            laudantium enim quasi est quidem magnam voluptate ipsam eos tempora
            quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente
            accusantium
          </div>
        </div>         */}
       
        
        

      </div>
    </div>
  </>)
}
function loader({ request: { signal },params }) {
  return getPost(params.postId, {signal})
  
}

 export const PostRoute = {
  loader,
  element:<Post/>
}