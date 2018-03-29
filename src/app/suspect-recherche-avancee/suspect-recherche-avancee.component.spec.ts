import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspectRechercheAvanceeComponent } from './suspect-recherche-avancee.component';

describe('SuspectRechercheAvanceeComponent', () => {
  let component: SuspectRechercheAvanceeComponent;
  let fixture: ComponentFixture<SuspectRechercheAvanceeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspectRechercheAvanceeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspectRechercheAvanceeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
