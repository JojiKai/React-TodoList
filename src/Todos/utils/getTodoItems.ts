import _ from "lodash";
import { v4 as uuid } from "uuid";

export interface TodoItemModel {
  id: string;
  title: string;
  content: string;
  priority: number;
  resolved: boolean;
  assigne?: string;
  createdAt: number;
  lastModifiedAt: number;
}

// 產生 n 筆 Todo 資料，回傳一個陣列，每筆資料都符合 TodoItemModel 的結構
// _.range(n) 會產生一個陣列 [0, 1, 2, ..., n-1]。
export const getTodoItems = (n: number): TodoItemModel[] =>
  _.range(n).map((i) => {
    const t = Date.now();
    return {
      id: uuid(),
      title: `title ${i}`,
      content: `content ${i} `.repeat(8),
      priority: i % 3,
      resolved: !(i % 7),
      createdAt: t, // 當前時間戳，表示建立時間
      lastModifiedAt: t,
    };
  });
