import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemptoggleComponent } from './temptoggle.component';

describe('TemptoggleComponent', () => {
  let component: TemptoggleComponent;
  let fixture: ComponentFixture<TemptoggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemptoggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemptoggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
