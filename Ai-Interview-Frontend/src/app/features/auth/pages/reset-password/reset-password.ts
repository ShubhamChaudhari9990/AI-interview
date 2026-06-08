import {
  ChangeDetectionStrategy,
  Component,
  computed,
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
import { RouterLink } from '@angular/router';

function passwordMatchValidator(
  control: AbstractControl,
): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;
  return password === confirmPassword ? null : { passwordMismatch: true };
}

interface PasswordRequirement {
  label: string;
  met: boolean;
}

@Component({
  selector: 'app-reset-password',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './reset-password.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResetPassword {
  private readonly fb = inject(FormBuilder);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly showPassword = signal(false);
  protected readonly showConfirmPassword = signal(false);
  protected readonly passwordValue = signal('');

  protected readonly form = this.fb.nonNullable.group(
    {
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    },
    { validators: passwordMatchValidator },
  );

  protected readonly passwordStrengthLabel = computed(() => {
    const pwd = this.passwordValue();
    if (!pwd) return '';
    const metCount = this.requirements().filter((r) => r.met).length;
    if (metCount <= 1) return 'weak';
    if (metCount <= 2) return 'fair';
    if (metCount <= 3) return 'good';
    return 'strong';
  });

  protected readonly passwordStrengthColor = computed(() => {
    const label = this.passwordStrengthLabel();
    if (label === 'weak') return 'text-red-500';
    if (label === 'fair') return 'text-orange-500';
    if (label === 'good') return 'text-yellow-600';
    if (label === 'strong') return 'text-green-600';
    return 'text-gray-400';
  });

  protected readonly requirements = computed<PasswordRequirement[]>(() => {
    const pwd = this.passwordValue();
    return [
      { label: '8+ characters', met: pwd.length >= 8 },
      { label: '1 special char', met: /[^A-Za-z0-9]/.test(pwd) },
      { label: '1 number', met: /\d/.test(pwd) },
      {
        label: 'Upper & Lower',
        met: /[A-Z]/.test(pwd) && /[a-z]/.test(pwd),
      },
    ];
  });

  constructor() {
    this.form.controls.password.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => this.passwordValue.set(value));
  }

  protected get passwordControl(): AbstractControl {
    return this.form.controls.password;
  }

  protected get confirmPasswordControl(): AbstractControl {
    return this.form.controls.confirmPassword;
  }

  protected getInputClass(hasError: boolean): string {
    const base =
      'w-full border rounded-lg px-4 py-2.5 pr-10 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-colors duration-150';
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

  protected onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // TODO: dispatch to AuthService
  }
}
