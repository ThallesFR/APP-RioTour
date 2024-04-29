import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RotaGPSPage } from './rota-gps.page';

describe('RotaGPSPage', () => {
  let component: RotaGPSPage;
  let fixture: ComponentFixture<RotaGPSPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RotaGPSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
