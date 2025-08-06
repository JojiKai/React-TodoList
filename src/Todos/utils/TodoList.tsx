// export const TodoList: FC = () => {
//   const items = getTodoItems(10);
//   const todoItems = items.map((i) => (
//     <div className="column is-2">
//       <TodoItem {...i} />
//     </div>
//   ));
//   return <div className="columns is-multiline">{todoItems}</div>;
// };

import { FC, useState } from "react";
import { getTodoItems, TodoItemModel } from "./getTodoItems";
import { Priority, TodoItem } from "./TodoItem";

const items = getTodoItems(20);

export const TodoList: FC = () => {
  const [todos, setTodos] = useState<TodoItemModel[]>(items);
  const updateTodes = (id: string, update: Partial<TodoItemModel>) => {
    setTodos(todos.map((i) => (i.id === id ? { ...i, ...update } : i)));
  };

  return (
    <div className="columns is-multtline">
      {todos.map((i) => (
        <div className="column is-2" key={i.id}>
          <TodoItem {...i} />
        </div>
      ))}
    </div>
  );
};
// const highItems = items
//   .filter((i) => i.priority === Priority.HIGH)
//   .map((i) => (
//     <div key={i.title} className="column is-2">
//       <TodoItem {...i} />
//     </div>
//   ));

// const mediumItems = items
//   .filter((i) => i.priority === Priority.MEDIUM)
//   .map((i) => (
//     <div key={i.title} className="column is-2">
//       <TodoItem {...i} />
//     </div>
//   ));

// const lowItems = items
//   .filter((i) => i.priority === Priority.LOW)
//   .map((i) => (
//     <div key={i.title} className="column is-2">
//       <TodoItem {...i} />
//     </div>
//   ));

// return (
//   <>
//     <div className="title is-4 has-text-success-light">HIGH</div>
//     <div className="columns is-multiline">{highItems}</div>

//     <div className="title is-4 has-text-warning-light">MEDIUM</div>
//     <div className="columns is-multiline">{mediumItems}</div>

//     <div className="title is-4 has-text-info-light">LOW</div>
//     <div className="columns is-multiline">{lowItems}</div>
//   </>
//   );
// };
