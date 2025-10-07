import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrochureContainerComponent } from './brochure-container.component';

describe('BrochureContainerComponent', () => {
  let component: BrochureContainerComponent;
  let fixture: ComponentFixture<BrochureContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrochureContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrochureContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
