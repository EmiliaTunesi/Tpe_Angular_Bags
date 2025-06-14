import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagsAboutComponent } from './bags-about.component';

describe('BagsAboutComponent', () => {
  let component: BagsAboutComponent;
  let fixture: ComponentFixture<BagsAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BagsAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BagsAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
