import { ProductsService } from './services/products.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Angular pet App';

  products: IProduct[] = []

  constructor(private productsService: ProductsService) {   
  }

  ngOnInit(): void {
    this.productsService.getAll().subscribe(products => {      
      this.products = products
    })
  }
}
