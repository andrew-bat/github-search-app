import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared/services/auth.service';
import {filter, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';


@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public serverError: string;
  private destroy$ = new Subject<void>();

  constructor(private authService: AuthService,
              private router: Router) {
  }

  public ngOnInit(): void {
    this.defineForm();
    this.subFormChanges();
  }

  public ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
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

    this.authService.login(this.form.value.email, this.form.value.password)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(
        () => this.router.navigate(['/home']),
        (error: string) => this.serverError = error
      );
  }

  private defineForm(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

  private subFormChanges(): void {
    this.form.valueChanges
      .pipe(
        filter(() => !!this.serverError),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.serverError = null;
      });
  }
}
