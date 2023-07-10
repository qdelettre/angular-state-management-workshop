import uuid from 'uuid/v4';
import { createActionGroup, props, emptyProps } from '@ngrx/store';
import { Todo, TodoFilter } from './todo.model';

export const TodoPageEvents = createActionGroup({
  source: 'Todo Page',
  events: {
    'Add Todo Triggered': props<{ title: string }>(),
    'Add Todo With ID Triggered': (title: string) => ({ title, id: uuid() }),
    'Toggle Todo Triggered': props<{ id: string }>(),
    'Remove Todo Triggered': props<{ id: string }>(),
    'Edit Todo Triggered': props<{ id: string }>(),
    'Cancel Edit Todo Triggered': emptyProps(),
    'Update Todo Triggered': props<{ todo: Todo }>(),
    'Remove Done Todos Triggered': emptyProps(),
    'Todos Filter Changed': props<{ filter: TodoFilter }>(),
  }
});
