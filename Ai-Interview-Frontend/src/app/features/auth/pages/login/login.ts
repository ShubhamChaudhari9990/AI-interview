import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  protected readonly showPassword = signal(false);

  protected readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    rememberMe: [false],
  });

  protected get emailControl(): AbstractControl {
    return this.form.controls.email;
  }

  protected get passwordControl(): AbstractControl {
    return this.form.controls.password;
  }

  protected getInputClass(hasError: boolean): string {
    const base =
      'w-full border rounded-lg px-4 py-2.5 pr-10 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-colors duration-150';
    return `${base} ${
      hasError
        ? 'border-red-400 focus:ring-red-400'
        : 'border-gray-300 focus:ring-indigo-500'
    }`;
  }

  protected togglePasswordVisibility(): void {
    this.showPassword.update((v) => !v);
  }

  protected onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { email, password } = this.form.getRawValue();

    this.authService
      .login(email!, password!)
      .then(() => this.router.navigate(['/home']))
      .catch((error) => console.error('Email login failed:', error));
  }

  protected onGoogleSignIn(): void {
    this.authService
      .googleLogin()
      .then(() => this.router.navigate(['/home']))
      .catch((error) => console.error('Google sign-in failed:', error));
  }

  protected onGithubSignIn(): void {
    // TODO: integrate GitHub OAuth provider
  }
}
