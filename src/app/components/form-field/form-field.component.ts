import { Component, Input, OnInit } from '@angular/core';
import {
  MAT_FORM_FIELD,
  MatFormField,
  MatFormFieldControl,
} from '@angular/material/form-field';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css'],
  // providers: [{provide: }]
})
// export class FormFieldCustomControl{
//   for
// }
export class FormFieldComponent implements OnInit {
  @Input() value: string;
  @Input() label: string;

  constructor() {}

  ngOnInit(): void {}
}
