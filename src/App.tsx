// import { TodoItem } from "./Todos/TodoItem";
import "bulma/css/bulma.min.css";
import { TodoList } from "./Todos/utils/TodoList";
import { Editor } from "./Todos/utils/Editor";
import { Priority, TodoItem } from "./Todos/utils/TodoItem";

export const App = () => {
  // const todo = {
  //   id: "5487-0487-878787",
  //   title: "title",
  //   content: "content",
  //   priority: 2,
  //   assignee: "chirs",
  //   resolved: false,
  // };
  return (
    <>
      <TodoList />
      {/* <TodoItem {...todo} /> */}
    </>
  );
};
