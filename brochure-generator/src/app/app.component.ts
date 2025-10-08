import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrochureContainerComponent } from './features/brochure/brochure-container/brochure-container.component';
@Component({
    selector: 'app-root',
    imports: [RouterOutlet, BrochureContainerComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'brochure-generator';
}
