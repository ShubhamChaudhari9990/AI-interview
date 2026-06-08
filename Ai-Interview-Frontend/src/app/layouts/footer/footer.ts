import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
})
export class Footer {
  companyLinks = ['About', 'Careers', 'Blog'];
  productLinks = ['Features', 'Pricing', 'Enterprise'];
  legalLinks = ['Privacy', 'Terms'];
  supportLinks = ['Help Center', 'Contact'];
  currentYear = new Date().getFullYear();
}
