import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';
import { MatDialogRef } from '@angular/material';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material';
import { CarrosDetalhesComponent } from '../carros-detalhes/carros-detalhes.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carros-anos',
  templateUrl: './carros-anos.component.html',
  styleUrls: ['./carros-anos.component.css']
})

export class CarrosAnosComponent implements OnInit {

  automovel: any = [];
  marca = '';
  loading = true;

  constructor(public api: UrlService, public dialogRef: MatDialogRef<CarrosAnosComponent>, public _data: DataService, public dialog: MatDialog, public actroute: ActivatedRoute) { }

  ngOnInit() {
    this.actroute.queryParams.subscribe(
      res => {
        this.api.getAutoId(res.marca, res.id).subscribe(
          res => {
            this.automovel = res;
            this.loading = false;
          }
        )
      }
    )
  }

  closeDialog() {
    this.dialogRef.close();
  }

  mostraDetalhes(id) {
    this._data.setDetalhesCar(id);
    let dialogRef = this.dialog.open(CarrosDetalhesComponent, {
      width: '600px',
    });
    dialogRef.updatePosition();
  }
}
