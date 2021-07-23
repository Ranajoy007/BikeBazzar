import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeBazzarHomeComponent } from './bike-bazzar-home.component';

describe('BikeBazzarHomeComponent', () => {
  let component: BikeBazzarHomeComponent;
  let fixture: ComponentFixture<BikeBazzarHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeBazzarHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeBazzarHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
