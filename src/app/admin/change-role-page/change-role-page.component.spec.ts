import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeRolePageComponent } from './change-role-page.component';

describe('ChangeRolePageComponent', () => {
  let component: ChangeRolePageComponent;
  let fixture: ComponentFixture<ChangeRolePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeRolePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeRolePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
