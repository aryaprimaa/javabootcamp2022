import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Trx} from "../model/trx";

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() trx!:Trx
  listTrx!:[Trx]
  total!:number

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Munculkan Trx
    if (this.listTrx){
      this.listTrx.push(this.trx)
    }else{
      if (this.trx){
        this.listTrx=[this.trx];
      }
    }

    //Total Harga
    if (this.total){
      this.total=this.total+(this.trx.product.price * this.trx.qty)
    }else{
      this.total=(this.trx.product.price * this.trx.qty)
    }
  }

  //Hapus Trx
  delete(id:number):void{
    this.total = this.total - (this.listTrx[id].product.price * this.listTrx[id].qty)
    this.listTrx.splice(id,1);
  }

}
