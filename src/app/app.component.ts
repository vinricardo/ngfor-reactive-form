import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { app_fields } from './utils/app.field';
import { FieldType } from './utils/field.types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  readonly fields: (typeof app_fields)[0][] = app_fields;
  readonly FieldType = FieldType;
  readonly fb: FormBuilder = inject(FormBuilder);
  form!: FormGroup;

  ngOnInit(): void {
    this.startForm();
  }

  startForm(): void {
    this.form = this.fb.group({
      projectName: [null, [Validators.required, Validators.maxLength(999)]],
      responsible: [null, [Validators.required, Validators.maxLength(999)]],
      modality: [null, [Validators.required, Validators.maxLength(999)]],
      step: [null, [Validators.required, Validators.maxLength(150)]],
      status: [null, [Validators.required, Validators.maxLength(150)]],
    });
  }


}
