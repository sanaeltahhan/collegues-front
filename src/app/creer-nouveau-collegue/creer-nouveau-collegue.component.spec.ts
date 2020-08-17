import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerNouveauCollegueComponent } from './creer-nouveau-collegue.component';

describe('CreerNouveauCollegueComponent', () => {
  let component: CreerNouveauCollegueComponent;
  let fixture: ComponentFixture<CreerNouveauCollegueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerNouveauCollegueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerNouveauCollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
