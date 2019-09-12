import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { SharedModule } from '../../shared/shared.module';

import { TodoComponent } from './todo.component';
import { selectAllTodos, selectTodosCount } from './state/todo.selectors';

describe.skip('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let store: MockStore<{}>;

  const getTodoItems = () =>
    fixture.debugElement.queryAll(By.css('todo-todo-item'));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      providers: [provideMockStore()],
      declarations: [TodoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<{}>>(Store);
  });

  it('should render initial todos', () => {
    store.overrideSelector(selectAllTodos, [
      { id: '123', title: 'Test', done: false }
    ]);
    store.overrideSelector(selectTodosCount, 1);
    fixture.detectChanges();

    expect(getTodoItems().length).toBe(1);
    expect(getTodoItems()[0].nativeElement.textContent).toBe('Test');
  });
});
