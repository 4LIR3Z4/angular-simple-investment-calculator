import { Component } from '@angular/core';
import { investmentService } from './investement.service';

@Component({
  selector: 'app-investment-results',
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  constructor(private service: investmentService) {}
  get allInvestmentResult() {
    return this.service.investmentFinalResult;
  }
}
