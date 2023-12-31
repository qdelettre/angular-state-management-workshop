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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, SharedModule],
      // TODO 6: provide empty mock store (without initial state)
      providers: [],
      declarations: [TodoComponent, TodoItemComponent, TodoEditorComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    // TODO 7: get MockStore instance from TestBed using inject and store it in the local "store" variable
    store = undefined;

    // TODO 8: override selector used in the component with some test data
    // selectors are overridden using the store (MockStore) "overrideSelector" method which accepts selector and mock data
    // when overriding selectors, assign overridden selector to a variable (eg "mockSelectTodosView")
    // which will be declared at the top of the test and re-assigned for every new test in before each (here)
    // the selector variable will be of type based on what it should return
    // eg "MemoizedSelector<State, Partial<ReturnType<typeof selectTodosView>>>" for mockSelectTodoView
    // the mock data should contain only data actually used in the components view
    // provide at least one mock todo item ("items" vs "todos" which one is correct?) and todoFilter value

    // once the mock selector was prepared, call "fixture.detectChanges()"
  });

  it('should render todo correct todo items', () => {
    // TODO 9: implement all todo component tests
    // use helper functions like "getTodoItems()" (find them at the top of the test) to check if component rendered the state correctly
    // eg: correct count of rendered todo items, todo item text, correct filter description based on filter value, ...
  });

  it('displays correct description based on filter: "DONE"', () => {
    // some tests need other data than provided in the "beforeEach" with "overrideSelector"
    // in that case we can set new data in previously overridden selector (eg "mockSelectTodosView")
    // using the "setResult()" method followed by the "store.refreshState()" and "fixture.detectChanges()"
    // SIDE NOTE: OnPush and multiple fixture.detectChanges()
    // please note that even though our component uses "OnPush" change detection strategy,
    // we are able to call "fixture.detectChanges()" more than once! (in before each and in the test)
    // the reason for that is that component uses "| async" pipe to consume data from the store
    // so the component will be "marked for check" when we push new value tough the mock selector using "refreshState()"
    // this is yet another benefit of using NgRx!
  });

  it('displays correct description based on filter: "ACTIVE"', () => {
    // similar to previous test
  });
});
