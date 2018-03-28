import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VrechercheAvanceeComponent } from './vrecherche-avancee.component';

describe('VrechercheAvanceeComponent', () => {
  let component: VrechercheAvanceeComponent;
  let fixture: ComponentFixture<VrechercheAvanceeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VrechercheAvanceeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VrechercheAvanceeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
