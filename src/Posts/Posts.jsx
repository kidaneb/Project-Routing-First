import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";
import { getPosts } from "../api/posts";

function Posts() {
  const posts = useLoaderData();

  return (
    <>
      <div className="container">
        <h1 className="page-title">Posts</h1>
        <div className="card-grid">
          {posts.map((post) => {
            return (
              <div className="card" key={post.id}>
                <div className="card-header">{post.title}</div>

                <div className="card-body">
                  <div className="card-preview-text">{post.body}</div>
                </div>

                <div className="card-footer">
                  <Link className="btn" to={`${post.id}`}>
                    View
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

function loader({ request: { signal } }) {
  return getPosts({signal})
  
}

 export const PostsRoute = {
  loader,
  element:<Posts/>
}