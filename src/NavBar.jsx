import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="top-nav">
      <Link className="nav-text-large" to="/posts">My App</Link>
      <ul className="nav-list">
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/todos">Todos</Link>
        </li>
      </ul>
    </nav>
  );
}
