import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCidadesComponent } from './lista-cidades.component';

describe('ListaCidadesComponent', () => {
  let component: ListaCidadesComponent;
  let fixture: ComponentFixture<ListaCidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
