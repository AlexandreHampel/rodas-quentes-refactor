import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from '../../node_modules/rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UrlService {

  url_carros = 'https://fipeapi.appspot.com/api/1/carros/marcas.json';
  public id_marca_carros: string;
  public id_veiculo: string;
  public id_carros_modelo: string;

  url_motos = 'https://fipeapi.appspot.com/api/1/motos/marcas.json';
  public id_marca_motos: string;
  public id_moto: string;
  public id_motos_modelo: string;

  url_caminhoes = 'https://fipeapi.appspot.com/api/1/caminhoes/marcas.json';
  private id_marca_caminhoes: string;
  private id_caminhao: string;

  constructor(private http: Http) { 

  }

  //CARROS
  getMarcasCar(): Observable<any> {
    return this.http.get(this.url_carros).pipe(map((res: Response) => res.json()));
  }
  getVeiculosMarca(): Observable<any> {    
    let url_query = 'https://fipeapi.appspot.com/api/1/carros/veiculos/' + this.id_marca_carros + '.json';
    return this.http.get(url_query).pipe(map( (res: Response) => res.json()));
  }
  getAutoId(): Observable<any> {
    let url_query = 'https://fipeapi.appspot.com/api/1/carros/veiculo/' + this.id_marca_carros + '/' + this.id_veiculo + '.json';
    return this.http.get(url_query).pipe(map((res: Response) => res.json()));
  }
  getDetalhesCar(): Observable<any> {
    let url_query = 'https://fipeapi.appspot.com/api/1/carros/veiculo/' + this.id_marca_carros + '/' + this.id_veiculo  + '/' + this.id_carros_modelo + '.json';
    return this.http.get(url_query).pipe(map((res: Response) => res.json()));
  }

  //MOTOS
  getMarcasMot(): Observable<any> {
    return this.http.get(this.url_motos).pipe(map((res: Response) => res.json()));
  }
  getMotoId(): Observable<any> {
    let url_query = 'https://fipeapi.appspot.com/api/1/motos/veiculos/' + this.id_marca_motos + '.json';
    return this.http.get(url_query).pipe(map((res: Response) => res.json()));
  }
  getMotoneta(): Observable<any> {
    let url_query = 'https://fipeapi.appspot.com/api/1/motos/veiculo/' + this.id_marca_motos + '/' + this.id_moto + '.json';
    return this.http.get(url_query).pipe(map((res: Response) => res.json()));
  }
  getMotoDetalhes(): Observable<any> {
    let url_query = 'https://fipeapi.appspot.com/api/1/motos/veiculo/' + this.id_marca_motos + '/' + this.id_moto + '/' + this.id_motos_modelo + '.json';
    return this.http.get(url_query).pipe(map((res: Response) => res.json()));
  }

  //CAMINHOES
  getMarcasCam(): Observable<any> {
    return this.http.get(this.url_caminhoes).pipe(map((res: Response) => res.json()));
  }
  getCaminhaoId(id_marca: string): Observable<any> {
    this.id_marca_caminhoes = id_marca;
    let url_query = 'https://fipeapi.appspot.com/api/1/caminhoes/veiculos/' + id_marca + '.json';

    return this.http.get(url_query).pipe(map((res: Response) => res.json()));
  }
  getCaminhoes(id_caminhao: string): Observable<any> {
    this.id_caminhao = id_caminhao;
    let url_query = 'https://fipeapi.appspot.com/api/1/caminhoes/veiculo/' + this.id_marca_caminhoes + '/' + id_caminhao + '.json';
    return this.http.get(url_query).pipe(map((res: Response) => res.json()));
  }
  getCaminhaoDetalhes(id_modelo: string): Observable<any> {
    let url_query = 'https://fipeapi.appspot.com/api/1/caminhoes/veiculo/' + this.id_marca_caminhoes + '/' + this.id_caminhao + '/' + id_modelo + '.json';
    return this.http.get(url_query).pipe(map((res: Response) => res.json()));
  }
}