import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { assign, property } from "lodash";
import { FC, useState } from "react";
import { faCircleXmark, faL, faList } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Editor } from "./Editor";
import { TodoItemModel } from "./getTodoItems";

export enum Priority {
  HIGH,
  MEDIUM,
  LOW,
}

export interface Props {
  id: string;
  title: string;
  content: string;
  priority: Priority;
  // 問號 ? 表示這個屬性是「可選的」，可以省略；如果有提供，必須是 string 類型。
  assignee?: string;
  resolved: boolean;
  updateTodo: (id: string, update: Partial<TodoItemModel>) => void;
}

export const TodoItem: FC<Props> = ({
  id,
  title,
  content,
  priority,
  assignee,
  resolved,
  updateTodo,
}) => {
  const [editing, setEditing] = useState<boolean>(false);

  let color;
  if (resolved) color = "";
  else if (priority === Priority.HIGH) color = "is-danger";
  else if (priority === Priority.MEDIUM) color = "is-warning";
  else if (priority === Priority.LOW) color = "is-info";
  else color = "is-primary";

  const handleEditClick = () => setEditing(true);
  const handleCancelClick = () => setEditing(false);

  // const color = resolved
  // ? ""
  // : priority === Priority.HIGH
  // ? "is-danger"
  // : priority === Priority.MEDIUM
  // ? "is-warning"
  // : priority === Priority.LOW
  // ? "is-info"
  // : "is-primary";

  return editing ? (
    <Editor
      {...{
        id,
        title,
        content,
        priority,
        resolved,
        assignee,
        updateTodo,
        onCancel: handleCancelClick,
      }}
    />
  ) : (
    <article className={`message ${color}`}>
      <div className="message-header">
        <p>{title}</p>
        <span>
          <FontAwesomeIcon
            icon={faList}
            className="is-clickable mr-1"
            onClick={handleEditClick}
          />
          <FontAwesomeIcon icon={faTrashCan} className="is-clickable" />
        </span>
      </div>
      <div className="message-body">
        <div>{content}</div>
        <div className="columns is-mobile">
          <div className="column is-8">
            <span className="has-text-grey-light is-size-8">{id}</span>
          </div>
          <div className="column has-text-right">
            {assignee !== undefined ? (
              <span className="has-text-grey-light is-size-7">{`assigned to @${assignee}`}</span>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
};

// export const TodoItem = ({ title, content, priority, resolved }: Props) => {
//   return <></>;
// };

// FC 是 FunctionComponent 的縮寫，是 React 提供的泛型型別（type alias）：
// FC<Props> 表示 這是一個接收 Props 作為參數的 React 函式型元件
