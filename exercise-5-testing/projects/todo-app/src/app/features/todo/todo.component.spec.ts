import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MemoizedSelector } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { SharedModule } from '../../shared/shared.module';

import { selectTodosView } from './state/todo.selectors';
import { State } from './state/todo.reducer';
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

  const getTodoItemText = (todoItemIndex: number) =>
    fixture.debugElement
      .queryAll(By.css('todo-todo-item'))
      [todoItemIndex].query(By.css('p')).nativeElement.textContent;

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

    // TODO 6: override selector used in the component with some test data and call "fixture.detectChanges"
    // selectors are overridden using the store (MockStore) "overrideSelector" method which accepts selector and mock data
    // when overriding selectors, assign overridden selector to a variable (eg "mockSelectTodosView")
    // which will be declared at the top of the test and re-assigned for every new test in before each (here)
    // the selector variable will be of typed based on what it should return
    // eg "MemoizedSelector<State, ReturnType<typeof selectTodosView>>" for mockSelectTodoView
  });

  it('should render todo correct todo items', () => {
    // TODO 7: implement all todo component tests
    // use helper functions like "getTodoItems()" (find them at the top of the test) to check if component rendered the state correctly
    // eg: correct count of rendered todo items, todo item text, correct filter description based on filter value, ...
  });

  it('displays correct description based on filter: "DONE"', () => {
    // some tests need other data than provided in the "beforeEach" with "overrideSelector"
    // in that case we can previously stored overridden selector (eg "mockSelectTodosView")
    // and use "setResult()" method followed by the "store.refreshState()" and "fixture.detectChanges()"
    // this will only have impact on the printed label as data was mocked by other selectors (use provided "getDescription()" method to check for the rendered label)
  });

  it('displays correct description based on filter: "ACTIVE"', () => {
    // similar to previous test
  });
});
