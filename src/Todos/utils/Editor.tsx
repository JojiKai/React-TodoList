import { ChangeEventHandler, FC, useRef, useState } from "react";
import { Priority, Props } from "./TodoItem";
// import { kebabCase } from "lodash";
import teamMembers from "./team-members.json";

export const Editor: FC<Props> = (props) => {
  const [title, setTitle] = useState<string>(props.title);
  const [priority, setPriority] = useState<Priority>(props.priority);
  // 如果左邊的值是 null 或 undefined，就回傳右邊的值；否則回傳左邊的值。
  const [assignee, setAssignee] = useState<string>(props.assignee ?? "");
  const [content, setContent] = useState<string>(props.content);
  const [resoleved, setResolved] = useState<boolean>(props.resolved);

  const handleTitleChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setTitle(e.target.value);
  const handlePriorityChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setPriority(parseInt(e.target.value));
  const handleAssigneeChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setAssignee(e.target.value);
  };
  const handleContentChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setContent(e.target.value);
  };
  const handleResolvedChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setResolved(!resoleved);
  };

  return (
    <div className="box">
      <div className="field">
        <div className="control">
          <input
            type="text"
            className="input"
            placeholder="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
      </div>
      <div className="columns is-vcentered">
        <div className="column">
          <div className="field">
            <div className="control">
              {Object.entries(Priority)
                .filter(([k, v]) => isNaN(Number(k)))
                .map(([k, v]) => (
                  <label className="radio" key={k}>
                    <input
                      type="radio"
                      checked={priority === v}
                      value={v}
                      onChange={handlePriorityChange}
                    />
                    {" " + k}
                  </label>
                ))}

              {/* <label className="radio">
                <input
                  type="radio"
                  checked={priority === 0}
                  value={Priority.HIGH}
                  onChange={handlePriorityChange}
                />
                High
              </label>
              <label className="radio">
                <input
                  type="radio"
                  checked={priority === 1}
                  value={Priority.MEDIUM}
                  onChange={handlePriorityChange}
                />
                Medium
              </label>
              <label className="radio">
                <input
                  type="radio"
                  checked={priority === 2}
                  value={Priority.LOW}
                  onChange={handlePriorityChange}
                />
                Low
              </label> */}
            </div>
          </div>
        </div>
        <div className="column has-text-right">
          <div className="field">
            <div className="control">
              <select value={assignee} onChange={handleAssigneeChange}>
                <option value="">assigned to</option>
                {teamMembers.map((m) => (
                  <option value={m} key={m}>
                    {m}
                  </option>
                ))}
                {/* <option value="alex">alex</option>
                <option value="bob">bob</option>
                <option value="chris">chris</option>
                <option value="david">david</option>
                <option value="ed">ed</option> */}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <textarea
            className="textarea"
            placeholder="content"
            value={content}
            onChange={handleContentChange}
          ></textarea>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          {" "}
          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={resoleved}
                  onChange={handleResolvedChange}
                />
                Resolved
              </label>
            </div>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <div className="button has-addons">
              <button
                className="button is-link"
                onClick={() => console.log(title)}
              >
                Save
              </button>
              <button className="button is-link is-light">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
