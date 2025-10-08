import { Component, output } from '@angular/core';
import {
  FormBuilder,
  FormArray,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-business-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
  ],
  templateUrl: './business-form.component.html',
  styleUrl: './business-form.component.scss',
})
export class BusinessFormComponent {
  formDataChanged = output<any>();

  businessForm: FormGroup<{
    businessName: FormControl<string>;
    tagline: FormControl<string>;
    description: FormControl<string>;
    services: FormArray<FormControl<string>>;
    contact: FormGroup<{
      email: FormControl<string>;
      phone: FormControl<string>;
      address: FormControl<string>;
    }>;
  }>;

  constructor(private fb: FormBuilder) {
    this.businessForm = this.fb.group({
      businessName: this.fb.nonNullable.control('', Validators.required),
      tagline: this.fb.nonNullable.control(''),
      description: this.fb.nonNullable.control(''),
      services: this.fb.array<FormControl<string>>([
        this.fb.nonNullable.control(''),
      ]),
      contact: this.fb.group({
        email: this.fb.nonNullable.control('', [
          Validators.required,
          Validators.email,
        ]),
        phone: this.fb.nonNullable.control(''),
        address: this.fb.nonNullable.control(''),
      }),
    });

    this.businessForm.valueChanges.subscribe((value) => {
      this.formDataChanged.emit(value);
    });
  }

  get services(): FormArray<FormControl<string>> {
    return this.businessForm.controls.services;
  }

  addService() {
    this.services.push(this.fb.nonNullable.control(''));
  }

  removeService(index: number) {
    this.services.removeAt(index);
  }

  resetForm() {
    this.businessForm.reset();
  }
}
