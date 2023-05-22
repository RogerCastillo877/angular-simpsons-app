import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpsonsTitleComponent } from './simpsons-title.component';

describe('SimpsonsTitleComponent', () => {
  let component: SimpsonsTitleComponent;
  let fixture: ComponentFixture<SimpsonsTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpsonsTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpsonsTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
