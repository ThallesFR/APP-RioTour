import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaDeLocaisPage } from './lista-de-locais.page';

describe('ListaDeLocaisPage', () => {
  let component: ListaDeLocaisPage;
  let fixture: ComponentFixture<ListaDeLocaisPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeLocaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
