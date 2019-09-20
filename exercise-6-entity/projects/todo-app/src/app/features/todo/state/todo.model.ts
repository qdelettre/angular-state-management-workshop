export interface Todo {
  id: string;
  title: string;
  done: boolean;
}

export type TodoFilter = 'ALL' | 'DONE' | 'ACTIVE';
