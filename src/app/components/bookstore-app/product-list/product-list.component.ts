import { Component, OnInit } from '@angular/core';
import { BookService } from './product-list-component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  books: any
  bookService : BookService

  constructor( bookService : BookService) {

    this.bookService = bookService;

   }

  ngOnInit(): void {
    this.getBooks()
  
  }

  getBooks() {
    this.bookService.getBooks().subscribe((data => {
        this.books = data;
        console.log(this.books)
   }))
  }


}
