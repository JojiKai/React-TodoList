import { property } from "lodash";
import { FC } from "react";

export enum Priority {
  HIGH,
  MEDIUM,
  LOW,
}

export interface Props {
  title: string;
  content: string;
  priority: Priority;
  // 問號 ? 表示這個屬性是「可選的」，可以省略；如果有提供，必須是 string 類型。
  assignee?: string;
  resolved: boolean;
}

export const TodoItem: FC<Props> = ({ title, content, priority, resolved }) => {
  let color;
  if (resolved) color = "";
  else if (priority === Priority.HIGH) color = "is-danger";
  else if (priority === Priority.MEDIUM) color = "is-warning";
  else if (priority === Priority.LOW) color = "is-info";
  else color = "is-primary";

  // const color = resolved
  // ? ""
  // : priority === Priority.HIGH
  // ? "is-danger"
  // : priority === Priority.MEDIUM
  // ? "is-warning"
  // : priority === Priority.LOW
  // ? "is-info"
  // : "is-primary";

  return (
    <article className={`message ${color}`}>
      <div className="message-header">
        <p>{title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">{content}</div>
    </article>
  );
};

// export const TodoItem = ({ title, content, priority, resolved }: Props) => {
//   return <></>;
// };

// FC 是 FunctionComponent 的縮寫，是 React 提供的泛型型別（type alias）：
// FC<Props> 表示 這是一個接收 Props 作為參數的 React 函式型元件
