import { Injectable } from '@angular/core';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  //VARIAVEIS PARA IMPRESSAO
  det = "det";
  imagem = "imagem";

  constructor(private api: UrlService) { }

  //IMPRESSAO
  printData() {
    window.print();
    this.det = "det";
    this.imagem = "imagem";
  }
  
  async delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async changeData() {
    this.det = "invisivel";
    this.imagem = "det";
    await this.delay(500);
    this.printData();
  }
}