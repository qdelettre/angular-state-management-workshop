import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { SharedModule } from '../../shared/shared.module';

import { selectTodosView } from './state/todo.selectors';
import { TodoComponent } from './todo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoEditorComponent } from './todo-editor/todo-editor.component';

const MOCK_DATA: any = {
  todos: [
    { id: '1', title: 'Test 1', done: true },
    { id: '2', title: 'Test 2', done: false }
  ],
  items: {
    '1': { id: '1', title: 'Test 1', done: true },
    '2': { id: '2', title: 'Test 2', done: false }
  },
  todoFilter: 'ALL',
  editedTodoId: null,
  editedTodo: undefined
};

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
    store.overrideSelector(selectTodosView, MOCK_DATA);
    fixture.detectChanges();

    expect(getTodoItems().length).toBe(2);
    expect(getTodoItemText(0)).toBe('Test 1');
    expect(getDescription()).toBe('Displaying all todos');
    expect(getCount()).toBe('2');
  });

  it('displays correct description based on filter', () => {
    store.overrideSelector(selectTodosView, {
      ...MOCK_DATA,
      todoFilter: 'DONE'
    });
    fixture.detectChanges();

    expect(getDescription()).toBe('Displaying done todos');
    expect(getCount()).toBe('2');
  });

  it('displays correct description based on filter', () => {
    store.overrideSelector(selectTodosView, {
      ...MOCK_DATA,
      todoFilter: 'ACTIVE'
    });
    fixture.detectChanges();

    expect(getDescription()).toBe('Displaying active todos');
    expect(getCount()).toBe('2');
  });
});
