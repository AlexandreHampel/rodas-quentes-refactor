import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';
import { MatDialogRef } from '@angular/material';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-caminhoes-detalhes',
  templateUrl: './caminhoes-detalhes.component.html',
  styleUrls: ['./caminhoes-detalhes.component.css']
})
export class CaminhoesDetalhesComponent implements OnInit {

  detalhe: any = [];
  loading = true;

  constructor(private api: UrlService, public dialogRef: MatDialogRef<CaminhoesDetalhesComponent>, public _data: DataService, public dialog: MatDialog) { }
  
  ngOnInit() {
    this.getDetalhes();
  }

  getDetalhes() {
    this.api.getCaminhaoDetalhes().subscribe(
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