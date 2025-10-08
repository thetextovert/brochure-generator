import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessFormComponent } from '../business-form/business-form.component';
import { BrochurePreviewComponent } from '../brochure-preview/brochure-preview.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-brochure-container',
  standalone: true,
  imports: [
    CommonModule,
    BusinessFormComponent,
    BrochurePreviewComponent,
    NzDividerModule,
    NzButtonModule,
  ],
  templateUrl: './brochure-container.component.html',
  styleUrl: './brochure-container.component.scss',
})
export class BrochureContainerComponent {
  /** ✅ Local signal to hold business data */
  businessData = signal<any>({});

  /** Called whenever the BusinessForm emits new data */
  onFormDataChange = (data: any) => {
    this.businessData.set(data);
  };

  /** Example: future method for PDF download (we’ll implement soon) */
  downloadBrochure() {
    const element = document.getElementById('brochure-preview');
    if (!element) return;
    // import('html2canvas').then(({ default: html2canvas }) =>
    //   import('jspdf').then(({ default: jsPDF }) => {
    //     html2canvas(element).then((canvas) => {
    //       const imgData = canvas.toDataURL('image/png');
    //       const pdf = new jsPDF('p', 'mm', 'a4');
    //       const imgWidth = 210;
    //       const pageHeight = 297;
    //       const imgHeight = (canvas.height * imgWidth) / canvas.width;
    //       pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    //       pdf.save('brochure.pdf');
    //     });
    //   })
    // );
  }
}
