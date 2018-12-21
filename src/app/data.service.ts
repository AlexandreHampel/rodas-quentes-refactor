import { Injectable } from '@angular/core';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  //VARIAVEIS PARA IMPRESSAO
  det = "det";
  imagem = "imagem";

  //VARIAVEIS PARA CARROS
  carregar_carros: any = [];
  veiculos: any = [];
  automovel: any = [];
  detalhe_carros: any = [];

  //VARIAVEIS PARA MOTOS
  carregar_motos: any = [];
  motos: any = [];
  moto: any = [];
  detalhe_motos: any = [];

  //VARIAVEIS PARA CAMINHOES
  carregar_caminhoes: any = [];
  caminhao: any = [];
  caminhoes: any = [];
  detalhe_caminhoes: any = [];

  constructor(private api: UrlService) { }

  //CARREGAR CAMINHOES
  // preenArrCam() {
  //   this.api.getMarcasCam().subscribe(res => {
  //     this.carregar_caminhoes = res;
  //     this.sortMarcasCam();
  //   })
  // }

  //METODOS PARA CAMINHOES
  // sortMarcasCam() {
  //   this.carregar_caminhoes.sort((left, right): number => {
  //     if (left.name < right.name) {
  //       return -1;
  //     } if (left.name > right.name) {
  //       return 1;
  //     }
  //     return 0;
  //   })
  // }

  // setCaminhao(id) {
  //   this.api.getCaminhaoId(id).subscribe(res => {
  //     this.caminhao = res;
  //   });
  // }

  // getCaminhao() {
  //   return this.caminhao;
  // }

  // getCaminhoes() {
  //   return this.caminhoes;
  // }

  // setCaminhoes(marca) {
  //   this.api.getCaminhoes(marca).subscribe(res => {
  //     this.caminhoes = res;
  //   });
  // }

  // setDetalhesCam(id) {
  //   this.api.getCaminhaoDetalhes(id).subscribe(res => {
  //     this.detalhe_caminhoes = res;
  //   });
  // }

  // getDetalhesCam() {
  //   return this.detalhe_caminhoes;
  // }

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