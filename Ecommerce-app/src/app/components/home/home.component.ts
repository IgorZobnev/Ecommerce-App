import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/products.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Array<Product> = [
    {name: "Cottage cheese, 250 gr", price: 105, description: "Krasnodar farm cottage cheese from cow milk", picturePath: "/assets/products_images/1.jpg"},
    {name: "Strawberry", price: 230, description: "Very tasty sweet strawberry from Krasnodar farm", picturePath: "/assets/products_images/2.jpg"},
    {name: "Milk Prostokvashino, 1 l", price: 75, description: "Natural cow milk from Stavropol farm", picturePath: "/assets/products_images/3.jpg"},
    {name: "Berry", price: 150, description: "Great berry from Krymus farm", picturePath: "/assets/products_images/4.jpg"},
    {name: "Apple", price: 95, description: "Apples from Krymus farm", picturePath: "/assets/products_images/5.jpg"},
    {name: "Banana", price: 60, description: "Bananas from Mexica's farm", picturePath: "/assets/products_images/6.jpg"},
    {name: "Pear", price: 78, description: "Pears from Sochi farm, natural and sweet", picturePath: "/assets/products_images/7.jpg"},
    {name: "Sour cream, 300 gr", price: 86, description: "Sour cream from Pyatigorsk farm", picturePath: "/assets/products_images/8.jpg"},
    {name: "Kefir", price: 97, description: "Natural kefir from cow milk from Korenovsk", picturePath: "/assets/products_images/9.jpg"},
    {name: "Mango", price: 360, description: "Natural mango from California", picturePath: "/assets/products_images/10.jpg"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  
  addToCart(index: number) {
    console.log("Added", this.products[index]);
  }

}
