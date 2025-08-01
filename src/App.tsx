// import { TodoItem } from "./Todos/TodoItem";
import "bulma/css/bulma.min.css";
import { TodoList } from "./Todos/utils/TodoList";
import { Editor } from "./Todos/utils/Editor";
import { Priority } from "./Todos/utils/TodoItem";

export const App = () => {
  const todo = {
    title: "title",
    content: "content",
    priority: 0,
    assignee: "chirs",
    resolved: false,
  };
  return (
    <>
      {/* <TodoList /> */}
      <Editor {...todo} />
    </>
  );
};
