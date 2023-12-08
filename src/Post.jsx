import axios from "axios";

import { getPost } from "./api/posts";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Post() {
  const post = useLoaderData();
  const [comments, setCommnets] = useState([]);
  const [users, setUsers] = useState([]);
  const {userId} = useParams();

  useEffect(() => {
    fetch("http://127.0.0.1:3000/comments")
      .then((res) => res.json())
      .then((data) => setCommnets(data));
    fetch("http://127.0.0.1:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="page-title">{post.title}</h1>
        {users.map((user) => {
          if (user.id === post.userId) {
            return (
              <span key={user.id} className="page-subtitle">
                By: <Link to={`/users/${user.id}`}>{user.name}</Link>
              </span>
            );
          } else {
            return null;
          }
        })}
        <div>{post.body}</div>
        <h3 className="mt-4 mb-2">Comments</h3>

        <div className="card-stack">
          {comments.map((comment) => {
            if (comment.postId === post.id) {
              return (
                <div key={comment.id} className="card">
                  <div className="card-body">
                    <div className="text-sm mb-1">{comment.email}</div>
                    {comment.body}
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </>
  );
}
function loader({ request: { signal }, params }) {
  return getPost(params.postId, { signal });
}

export const PostRoute = {
  loader,
  element: <Post />,
};
