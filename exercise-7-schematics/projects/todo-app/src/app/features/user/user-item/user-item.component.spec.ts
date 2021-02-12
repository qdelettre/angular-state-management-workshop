import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '../../../shared/shared.module';

import { UserItemComponent } from './user-item.component';

describe('UserItemComponent', () => {
  let component: UserItemComponent;
  let fixture: ComponentFixture<UserItemComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule, SharedModule],
        declarations: [UserItemComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(UserItemComponent);
    component = fixture.componentInstance;
    component.user = { id: 1, username: 'tester' } as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
