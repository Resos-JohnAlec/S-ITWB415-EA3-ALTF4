import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResosComponent } from './resos-component';

describe('ResosComponent', () => {
  let component: ResosComponent;
  let fixture: ComponentFixture<ResosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
