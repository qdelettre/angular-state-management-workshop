import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
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
  let store: MockStore<{}>;

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

  const getTodoItemText = (todoItemIndex: number) =>
    fixture.debugElement
      .queryAll(By.css('todo-todo-item'))
      [todoItemIndex].query(By.css('p')).nativeElement.textContent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, SharedModule],
      providers: [provideMockStore()],
      declarations: [TodoComponent, TodoItemComponent, TodoEditorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<{}>>(Store);
  });

  it('should render todo correct todo items', () => {
    // TODO 6: implement component test (override all selectors used in component with some test data and call "fixture.detectChanges")
    // use helper functions like "getTodoItems()" (find them at the top of the test) to check if component rendered the state corectly
    // eg: correct count of rendered todo items, todo item text, correct filter description based on filter value, ...


  });

  it('displays correct description based on filter: "DONE"', () => {

    // TODO 7: implement all todo component tests

  });

  it('displays correct description based on filter: "ACTIVE"', () => {


  });
});
