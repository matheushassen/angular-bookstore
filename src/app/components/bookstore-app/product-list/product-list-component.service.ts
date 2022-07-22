import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class BookService {
  private url ="https://localhost:5001/api/bookstore";
  books = [];

  httpOptions = {
    Headers: new HttpHeaders({'content-type': 'application/json'})
  }

  constructor(private httpClient: HttpClient) { }
  
  getBooks() {
    return this.httpClient.get(this.url)
  }


}
