import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  firstOperand: number = 0;
  secondOperand: number = 0;
  result: number = 0;

  add(): void {
    this.result = this.firstOperand + this.secondOperand;
  }

  subtract(): void {
    this.result = this.firstOperand - this.secondOperand;
  }

  multiply(): void {
    this.result = this.firstOperand * this.secondOperand;
  }
}
