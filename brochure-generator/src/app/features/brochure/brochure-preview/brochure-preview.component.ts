import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-brochure-preview',
  imports: [
    CommonModule,
    NzCardModule,
    NzTypographyModule,
    NzDividerModule,
    NzListModule,
    NzIconModule,
  ],
  templateUrl: './brochure-preview.component.html',
  styleUrl: './brochure-preview.component.scss',
})
export class BrochurePreviewComponent {
  businessData = input<any>({});
}
