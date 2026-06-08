import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-check-inbox',
  imports: [RouterLink],
  templateUrl: './check-inbox.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckInbox {
  protected onResendLink(): void {
    // TODO: dispatch resend verification email via AuthService
  }
}
