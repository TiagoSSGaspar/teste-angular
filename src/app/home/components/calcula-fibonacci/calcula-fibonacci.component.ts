import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcula-fibonacci',
  templateUrl: './calcula-fibonacci.component.html',
  styleUrls: ['./calcula-fibonacci.component.scss']
})
export class CalculaFibonacciComponent implements OnInit {

  //KISS

  @Input() valor!:number;

  t1: number = 1
  t2: number = 1

  constructor() {

   }

  ngOnInit() {

  }

  fibonacci() {
    this.valor = this.t1 + this.t2
    this.t1 = this.t2
    this.t2 = this.valor
  };

}
