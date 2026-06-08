import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

function passwordMatchValidator(
  control: AbstractControl,
): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;
  return password === confirmPassword ? null : { passwordMismatch: true };
}

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Register {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly showPassword = signal(false);
  protected readonly showConfirmPassword = signal(false);
  protected readonly passwordStrength = signal(0);

  protected readonly form = this.fb.nonNullable.group(
    {
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
      acceptTerms: [false, [Validators.requiredTrue]],
    },
    { validators: passwordMatchValidator },
  );

  constructor() {
    this.form.controls.password.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => {
        this.passwordStrength.set(this.calcPasswordStrength(value));
      });
  }

  protected get fullNameControl(): AbstractControl {
    return this.form.controls.fullName;
  }

  protected get emailControl(): AbstractControl {
    return this.form.controls.email;
  }

  protected get passwordControl(): AbstractControl {
    return this.form.controls.password;
  }

  protected get confirmPasswordControl(): AbstractControl {
    return this.form.controls.confirmPassword;
  }

  protected getInputClass(hasError: boolean): string {
    const base =
      'w-full border rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-colors duration-150';
    return `${base} ${
      hasError
        ? 'border-red-400 focus:ring-red-400'
        : 'border-gray-300 focus:ring-[#3525CD]'
    }`;
  }

  protected togglePasswordVisibility(): void {
    this.showPassword.update((v) => !v);
  }

  protected toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword.update((v) => !v);
  }

  protected strengthBarClass(index: number): string {
    const strength = this.passwordStrength();
    const filled = index < strength;
    return `h-1 flex-1 rounded-full transition-colors duration-150 ${
      filled ? 'bg-[#3525CD]' : 'bg-gray-200'
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

  protected onGoogleRegister(): void {
    // TODO: integrate Google OAuth provider
  }

  protected onLinkedInRegister(): void {
    // TODO: integrate LinkedIn OAuth provider
  }

  protected onGithubRegister(): void {
    // TODO: integrate GitHub OAuth provider
  }

  private calcPasswordStrength(password: string): number {
    if (!password) return 0;
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    return score;
  }
}
