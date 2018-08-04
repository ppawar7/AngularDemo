import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleHooksExampleComponent } from './life-cycle-hooks-example.component';

describe('LifeCycleHooksExampleComponent', () => {
  let component: LifeCycleHooksExampleComponent;
  let fixture: ComponentFixture<LifeCycleHooksExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeCycleHooksExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCycleHooksExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
