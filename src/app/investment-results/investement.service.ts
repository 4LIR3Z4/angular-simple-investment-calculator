import { Injectable } from '@angular/core';
import { InvestmentResult } from './investmentResult.model';
@Injectable({ providedIn: 'root' })
export class investmentService {
  constructor() {}
  investmentFinalResult: InvestmentResult[] = [];
  CalculateInvestment(
    initialInvestment: number,
    annualInvestment: number,
    expectedReturn: number,
    duration: number
  ) {
    for (let i = 0; i < duration; i++) {
      const investmentResult: InvestmentResult = {
        Interest: 0,
        InvestedCapital: 0,
        InvestmentValue: 0,
        TotalInterest: 0,
        Year: i,
      };
      console.debug('ssss');
      this.investmentFinalResult.unshift(investmentResult);
    }
  }
}
