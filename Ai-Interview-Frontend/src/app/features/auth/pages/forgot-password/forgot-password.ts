import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './forgot-password.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotPassword {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);

  protected readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
  });

  protected get emailControl(): AbstractControl {
    return this.form.controls.email;
  }

  protected getInputClass(hasError: boolean): string {
    const base =
      'w-full border rounded-lg pl-10 pr-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-colors duration-150';
    return `${base} ${
      hasError
        ? 'border-red-400 focus:ring-red-400'
        : 'border-gray-300 focus:ring-[#3525CD]'
    }`;
  }

  protected onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // TODO: dispatch to AuthService
    void this.router.navigate(['/auth/check-inbox']);
  }
}
