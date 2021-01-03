import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { SharedModule } from '../../shared/shared.module';

import {
  selectTodos,
  selectTodosCount,
  selectTodoFilter,
  selectEditedTodo
} from './state/todo.selectors';
import { TodoComponent } from './todo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoEditorComponent } from './todo-editor/todo-editor.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let store: MockStore;

  const getCount = () =>
    fixture.debugElement
      .query(By.css('.controls > button:last-of-type'))
      .nativeElement.textContent.trim();

  const getDescription = () =>
    fixture.debugElement
      .query(By.css('.controls > span'))
      .nativeElement.textContent.trim();

  const getTodoItems = () =>
    fixture.debugElement.queryAll(By.css('todo-todo-item'));

  const getTodoItemText = (index: number) =>
    fixture.debugElement
      .queryAll(By.css('todo-todo-item'))
      [index].query(By.css('p')).nativeElement.textContent;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule, SharedModule],
        providers: [provideMockStore()],
        declarations: [TodoComponent, TodoItemComponent, TodoEditorComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
  });

  it('should render todos', () => {
    store.overrideSelector(selectTodos, [
      { id: '1', title: 'Test 1', done: true },
      { id: '2', title: 'Test 2', done: false }
    ]);
    store.overrideSelector(selectTodosCount, 2);
    store.overrideSelector(selectTodoFilter, 'ALL');
    store.overrideSelector(selectEditedTodo, null);
    fixture.detectChanges();

    expect(getTodoItems().length).toBe(2);
    expect(getTodoItemText(0)).toBe('Test 1');
    expect(getDescription()).toBe('Displaying all todos');
    expect(getCount()).toBe('2');
  });

  it('displays correct description based on filter', () => {
    store.overrideSelector(selectTodos, []);
    store.overrideSelector(selectTodosCount, 2);
    store.overrideSelector(selectTodoFilter, 'DONE');
    store.overrideSelector(selectEditedTodo, null);
    fixture.detectChanges();

    expect(getDescription()).toBe('Displaying done todos');
    expect(getCount()).toBe('2');
  });

  it('displays correct description based on filter', () => {
    store.overrideSelector(selectTodos, []);
    store.overrideSelector(selectTodosCount, 2);
    store.overrideSelector(selectTodoFilter, 'ACTIVE');
    store.overrideSelector(selectEditedTodo, null);
    fixture.detectChanges();

    expect(getDescription()).toBe('Displaying active todos');
    expect(getCount()).toBe('2');
  });
});
