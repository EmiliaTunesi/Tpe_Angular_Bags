import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagsBagComponent } from './bags-bag.component';

describe('BagsBagComponent', () => {
  let component: BagsBagComponent;
  let fixture: ComponentFixture<BagsBagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BagsBagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BagsBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
