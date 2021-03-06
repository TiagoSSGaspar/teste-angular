import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-filter-matriz',
  templateUrl: './filter-matriz.component.html',
  styleUrls: ['./filter-matriz.component.scss']
})
export class FilterMatrizComponent implements OnInit {

  matrizFilter: number[] = []

  img: string = 'data:image/png;base64,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'

  @ViewChild('myFilter') myFilter?: ElementRef;

  constructor() { }

  ngOnInit() {
    this.matrizFilter = this.dataMatriz();
  }

  filterMatriz() {
    if(this.myFilter?.nativeElement.value) {
      const n = +this.myFilter?.nativeElement.value

      const i = this.matrizFilter?.filter(i => i === n)

      this.matrizFilter = i

    } else {
      alert('Digite um valor para ser filtrado')
    }
  }

  limparFiltro() {
    this.matrizFilter = this.dataMatriz()
    this.myFilter!.nativeElement.value = ''
  }

  dataMatriz(): number[] {
    const data: number[] = []
    for(let i =0; i <= 10; i++) {
      data.push(i);
    }
    return data
  }

}

//this.statusDaImg = !this.statusDaImg
