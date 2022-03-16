import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../services/calculator.service'

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  private numero1: string
  private numero2: string
  private resultado: number
  private operacao: string


  constructor(private calculatorService: CalculatorService) { }

  ngOnInit(): void {
    this.limpar()
  }

  limpar(): void {
    this.numero1 = '0'
    this.numero2 = null
    this.resultado = null
    this.operacao = null
  }

  adicionarNumero(numero: string): void {
    if(this.operacao === null){
      this.numero1 = this.concatenarNumero(this.numero1, numero)
    } else {
      this.numero2 = this.concatenarNumero(this.numero2, numero)
    }
  }

  concatenarNumero(numAtual: string, numConcat: string): string {
    if(numAtual === '0'|| numAtual === null){
      numAtual = '' //caso tenha apenas o 0 ou null, reinicia o valor
    }

    if(numConcat === '.'|| numAtual === ''){
      numConcat = '0' // o primeiro digito for . , concatena um 0 antes do ponto
    }

    if(numConcat === '.'|| numAtual.indexOf('.') > -1){
      return numAtual; // se ja existir um . ja retorna a posicao de 0 ou o tamanho da string
    }

    return numAtual + numConcat;
  }

  definirOperacao(operacao: string):void {
    if(this.operacao === null){
      this.operacao = operacao;
      return
    }

    if(this.numero2 !== null){
      this.resultado = this.calculatorService.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operacao)
        this.operacao = operacao
        this.numero1 = this.resultado.toString()
        this.numero2 = null;
        this.resultado = null
    }
    
  }

  calcular(){
    if(this.numero2 === null){
      return;
    }
    this.resultado = this.calculatorService.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao)  
  }

//retorna o valor para a tela
  get display(){
    if(this.resultado !== null){
      return this.resultado.toString()
    }
    if(this.numero2 !== null){
      return this.numero2
    }
    return this.numero1
  }

}
