import axios from "axios";

import { getPost, getPosts } from "./api/posts";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser, getUsers } from "./api/users";
import { getComments } from "./api/comment";

function Post() {
  const { post, user, comments } = useLoaderData();
  return (
    <>
      <div className="container">
        <h1 className="page-title">{post.title}</h1>

        <span key={user.id} className="page-subtitle">
          By: <Link to={`/users/${user.id}`}>{user.name}</Link>
        </span>

        <div>{post.body}</div>
        <h3 className="mt-4 mb-2">Comments</h3>

        <div className="card-stack">
          {comments.map((comment) => {
            return (
              <div key={comment.id} className="card">
                <div className="card-body">
                  <div className="text-sm mb-1">{comment.email}</div>
                  {comment.body}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
async function loader({ request: { signal }, params: { postId } }) {
  const comments = getComments(postId, { signal });
  const post = await getPost(postId, { signal });
  const user = getUser(post.userId, { signal });

  return { post, user: await user, comments: await comments };
}

export const PostRoute = {
  loader,
  element: <Post />,
};
