export function TodoItems({ completed, title }) {
  return <li className={completed ? `strike-through` : ""}>{title}</li>;
}
