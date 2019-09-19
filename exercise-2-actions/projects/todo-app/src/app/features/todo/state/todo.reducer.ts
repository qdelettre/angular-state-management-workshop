import uuid from 'uuid/v4';
import { Action, createAction, createReducer, on } from '@ngrx/store';

import * as TodoActions from './todo.actions';
import { Todo, TodoFilter } from './todo.model';
export const noopAction = createAction('[Exercise Helper] Noop') as any;

export const todoFeatureKey = 'todo';

export interface State {
  items: {
    [id: string]: Todo;
  };
  editedTodoId: string | null;
  todoFilter: TodoFilter;
}

const id1 = uuid();
const id2 = uuid();
const id3 = uuid();
const id4 = uuid();

export const initialState: State = {
  items: {
    [id1]: { id: id1, title: 'Sign up for NgRx workshop', done: true },
    [id2]: { id: id2, title: 'Learn NgRx', done: false },
    [id3]: { id: id3, title: 'Use NgRx in your apps', done: false },
    [id4]: {
      id: id4,
      title: 'Implement amazing features for users',
      done: false
    }
  },
  editedTodoId: null,
  todoFilter: 'ALL'
};

const todoReducer = createReducer(
  initialState,

  on(TodoActions.addTodo || noopAction, (state, { title }) => {
    const id = uuid();
    return {
      ...state,
      items: {
        ...state.items,
        [id]: {
          id,
          title,
          done: false
        }
      }
    };
  }),

  on(TodoActions.toggleTodo || noopAction, (state, { id }) => {
    const todo = state.items[id];
    return {
      ...state,
      items: {
        ...state.items,
        [id]: {
          ...todo,
          done: !todo.done
        }
      }
    };
  }),

  on(TodoActions.removeTodo || noopAction, (state, { id }) => {
    const newState = {
      ...state,
      items: {
        ...state.items
      }
    };
    delete newState.items[id];
    if (newState.editedTodoId === id) {
      newState.editedTodoId = null;
    }
    return newState;
  }),

  on(TodoActions.removeDoneTodos || noopAction, state => {
    const notDoneIds = Object.values(state.items)
      .filter(item => !item.done)
      .map(item => item.id);
    return {
      ...state,
      items: notDoneIds.reduce((result, nextId) => {
        result[nextId] = state.items[nextId];
        return result;
      }, {})
    };
  }),

  on(TodoActions.filterTodos || noopAction, (state, { filter }) => ({
    ...state,
    todoFilter: filter
  })),

  on(TodoActions.editTodo || noopAction, (state, { id }) => ({
    ...state,
    editedTodoId: id
  })),

  on(TodoActions.cancelEditTodo || noopAction, state => ({
    ...state,
    editedTodoId: null
  })),

  on(TodoActions.updateTodo || noopAction, (state, { todo }) => ({
    ...state,
    items: {
      ...state.items,
      [todo.id]: todo
    },
    editedTodoId: null
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return todoReducer(state, action);
}
