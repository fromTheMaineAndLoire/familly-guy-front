import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grifin } from './grifin';

describe('Grifin', () => {
  let component: Grifin;
  let fixture: ComponentFixture<Grifin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Grifin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grifin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
