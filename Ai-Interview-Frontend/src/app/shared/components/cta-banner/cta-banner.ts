import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cta-banner',
  imports: [CommonModule,RouterModule],
  standalone: true,
  templateUrl: './cta-banner.html',
  styleUrl: './cta-banner.css',
})
export class CtaBanner {
  @Input() title = '';
  @Input() description = '';
  @Input() primaryButtonText = '';
  @Input() secondaryButtonText = '';
  @Input() primaryButtonLink = '';
  @Input() secondaryButtonLink = '';
  @Input() showSecondaryButton = true;
}
