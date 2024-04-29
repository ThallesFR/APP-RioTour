import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TiposDeLocaisPage } from './tipos-de-locais.page';

describe('TiposDeLocaisPage', () => {
  let component: TiposDeLocaisPage;
  let fixture: ComponentFixture<TiposDeLocaisPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposDeLocaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
