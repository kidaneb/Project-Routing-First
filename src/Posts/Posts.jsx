import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";
import { getPosts } from "../api/posts";
import { PostCard } from "../Components/PostCard";

function Posts() {
  const posts = useLoaderData();

  return (
    <>
      <div className="container">
        <h1 className="page-title">Posts</h1>
        <div className="card-grid">
          {posts.map((post) => {
            return (
              <PostCard  key={post.id} {...post}/>
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