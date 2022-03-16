import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './components/calculator.component';
import { CalculatorService } from './services/calculator.service';
import { AppModule } from '../app.module';



@NgModule({
  declarations: [
    CalculatorComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CalculatorComponent
  ],
  providers: [
    CalculatorService
  ]
})
export class CalculatorModule { }
