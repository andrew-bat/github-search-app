import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {
  public form: FormGroup;

  constructor() {
  }

  public ngOnInit(): void {
    this.defineForm();
  }

  private defineForm(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

  public onSubmit(): void {
    for (const controlName in this.form.controls) {
      const control: AbstractControl = this.form.controls[controlName];
      control.markAsTouched();
      control.updateValueAndValidity();
    }

    if (this.form.invalid) {
      return;
    }
  }
}
