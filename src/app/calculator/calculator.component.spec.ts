import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should initialize firstOperand, secondOperand and result to 0', () => {
    expect(component.firstOperand).toBe(0);
    expect(component.secondOperand).toBe(0);
    expect(component.result).toBe(0);
  });

  it('should display 0 as initial result in the HTML', () => {
    const resultElement = compiled.querySelector('.result');
    expect(resultElement?.textContent).toContain('Resultado: 0');
  });

  it('should add two numbers correctly', () => {
    component.firstOperand = 5;
    component.secondOperand = 3;
    component.add();
    expect(component.result).toBe(8);
  });

  it('should subtract two numbers correctly', () => {
    component.firstOperand = 10;
    component.secondOperand = 4;
    component.subtract();
    expect(component.result).toBe(6);
  });

  it('should multiply two numbers correctly', () => {
    component.firstOperand = 7;
    component.secondOperand = 6;
    component.multiply();
    expect(component.result).toBe(42);
  });
});
