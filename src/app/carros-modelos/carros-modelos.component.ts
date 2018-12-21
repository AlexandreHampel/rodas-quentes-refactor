import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';
import { MatDialogRef } from '@angular/material';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material';
import { CarrosAnosComponent } from '../carros-anos/carros-anos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-carros-modelos',
  templateUrl: './carros-modelos.component.html',
  styleUrls: ['./carros-modelos.component.css']
})

export class CarrosModelosComponent implements OnInit {

  veiculos: any = [];
  veiculosFiltro: any = [];
  loading = true;
  marca = '';
  constructor(public api: UrlService, public dialogRef: MatDialogRef<CarrosModelosComponent>, public _data: DataService, public dialog: MatDialog, public actroute: ActivatedRoute, public router: Router) { }


  ngOnInit() {
    this.carregarModelos();
  }

  carregarModelos() {
    this.actroute.queryParams.subscribe(
      res => {
        this.marca = res.marca;
        this.api.id_marca_carros = res.marca;
        this.api.getVeiculosMarca(res.marca).subscribe(
          res => {
            this.veiculosFiltro = res;
            this.veiculos = res;
            this.loading = false;
          },
        )
      }
    );
  }

  closeDialog() {
    this.router.navigate(['/carros']);
    this.dialogRef.close();
  }

  mostraAutomovel(id_auto) {
    this.router.navigate(['/carros'], { queryParams: { id: id_auto, marca: this.marca } });
    let dialogRef = this.dialog.open(CarrosAnosComponent, {
      width: '600px',
    });
    dialogRef.updatePosition();
  }

  aplicaFiltro(value) {
    this.veiculosFiltro = [];
    this.veiculosFiltro = this.veiculos.filter(function (m) {
      return m.name.toUpperCase().startsWith(value.toUpperCase());
    })
  }
}
