import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { investmentService } from '../investment-results/investement.service';
@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestment = signal<number>(0);
  annualInvestment = signal<number>(0);
  expectedReturn = signal<number>(0);
  duration = signal<number>(0);

  constructor(private service: investmentService) {}
  calcualteInvestment() {
    const initialInvestment = this.initialInvestment();
    const annualInvestment = this.annualInvestment();
    const expectedReturn = this.expectedReturn();
    const duration = this.duration();
    this.service.CalculateInvestment(
      initialInvestment,
      annualInvestment,
      expectedReturn,
      duration
    );
  }
}
