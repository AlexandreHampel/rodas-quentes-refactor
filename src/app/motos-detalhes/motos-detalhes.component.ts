import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MatDialog } from '@angular/material';
import { UrlService } from '../url.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-motos-detalhes',
  templateUrl: './motos-detalhes.component.html',
  styleUrls: ['./motos-detalhes.component.css']
})

export class MotosDetalhesComponent implements OnInit {

  detalhe: any = [];
  loading = true;

  constructor(private api: UrlService, public dialogRef: MatDialogRef<MotosDetalhesComponent>, public _data: DataService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getDetalhes();
  }

  getDetalhes() {
    this.api.getMotoDetalhes().subscribe(
      res => {
        this.detalhe = res;
        this.loading = false;
      }
    )
  }

  closeDialog() {
    this.dialogRef.close();
  }

  change() {
    this._data.changeData();
  }
}