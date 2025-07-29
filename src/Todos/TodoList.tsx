// export const TodoList: FC = () => {
//   const items = getTodoItems(10);
//   const todoItems = items.map((i) => (
//     <div className="column is-2">
//       <TodoItem {...i} />
//     </div>
//   ));
//   return <div className="columns is-multiline">{todoItems}</div>;
// };

import { FC } from "react";
import { getTodoItems } from "./utils/getTodoItems";
import { Priority, TodoItem } from "./TodoItem";

export const TodoList: FC = () => {
  const items = getTodoItems(20);

  const highItems = items
    .filter((i) => i.priority === Priority.HIGH)
    .map((i) => (
      <div key={i.title} className="column is-2">
        {/* <p>
          {i.title} (key: {i.title})
        </p> */}
        <TodoItem {...i} />
      </div>
    ));

  const mediumItems = items
    .filter((i) => i.priority === Priority.MEDIUM)
    .map((i) => (
      <div key={i.title} className="column is-2">
        {/* <p>
          {i.title} (key: {i.title})
        </p> */}
        <TodoItem {...i} />
      </div>
    ));

  const lowItems = items
    .filter((i) => i.priority === Priority.LOW)
    .map((i) => (
      <div key={i.title} className="column is-2">
        {/* <p>
          {i.title} (key: {i.title})
        </p> */}
        <TodoItem {...i} />
      </div>
    ));

  return (
    <>
      <div className="title is-4 has-text-success-light">HIGH</div>
      <div className="columns is-multiline">{highItems}</div>

      <div className="title is-4 has-text-warning-light">MEDIUM</div>
      <div className="columns is-multiline">{mediumItems}</div>

      <div className="title is-4 has-text-info-light">LOW</div>
      <div className="columns is-multiline">{lowItems}</div>
    </>
  );
};
