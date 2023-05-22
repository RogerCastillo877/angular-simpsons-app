import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotePagesComponent } from './quote-pages.component';

describe('QuotePagesComponent', () => {
  let component: QuotePagesComponent;
  let fixture: ComponentFixture<QuotePagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotePagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuotePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
