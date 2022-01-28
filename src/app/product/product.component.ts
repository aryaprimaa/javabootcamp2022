import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Product} from "../model/product";
import {Trx} from "../model/trx";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  form!: FormGroup;
  product!: Product;
  trx!: Trx;
  message!: any[];

  constructor(private formBuild: FormBuilder,
              private productService: ProductService) {
    this.form = this.formBuild.group({
      'id': new FormControl(null, [Validators.required]),
      'qty': new FormControl(null, [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  findbyId(): void {
    this.productService.getById(this.form.controls['id'].value).subscribe({
      next: hasil => {
        this.product = hasil;
      }, error: e => {
        alert('data tidak ditemukan');
      }, complete:() => {
      console.log('data produk berhasil dimuat')
      }
  })
  }

  addTrx(): void{
    let c = <Trx>{};
    c.product = this.product;
    c.qty = this.form.controls['qty'].value;
    this.trx = c;
    console.log(c)

    this.form.controls['id'].setValue("");
    this.form.controls['qty'].setValue("")
    this.product = <Product>{};
  }
}
