import {
  Navigate,
  Outlet,
  ScrollRestoration,
  createBrowserRouter,
} from "react-router-dom";
import { NavBar } from "./NavBar";
// import { Post } from "./post";
// import { User } from "./User";
import { RootLayout } from "./RootLayout";
import { PostsRoute } from "./Posts/Posts";
import { TodosRoute } from "./Todos/Todos";
import { UsersRoute } from "./Users/Users";
import { PostRoute } from "./post";
import { UserRoute } from "./User";

export const router = createBrowserRouter([
  {
    path:"/",
    element: <RootLayout />,
    children: [
      { index:true, element: <Navigate to="posts" /> },
      {
        path: "posts",
        children:[
          {index:true,...PostsRoute},
          {path:":postId",...PostRoute}
        ]
      },
      {
        path:"users", children:[
          {index:true,...UsersRoute},
          {path:":userId", ...UserRoute}
        ]
      },
      {path:"todos",...TodosRoute},
    ],
  },
]);

