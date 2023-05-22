import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByCharacterComponent } from './search-by-character.component';

describe('SearchByCharacterComponent', () => {
  let component: SearchByCharacterComponent;
  let fixture: ComponentFixture<SearchByCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByCharacterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchByCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
