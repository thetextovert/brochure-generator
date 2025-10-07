import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrochurePreviewComponent } from './brochure-preview.component';

describe('BrochurePreviewComponent', () => {
  let component: BrochurePreviewComponent;
  let fixture: ComponentFixture<BrochurePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrochurePreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrochurePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
