import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Book } from './book';
import { BookService } from '../services/book.service';
import { BookComponent } from './book.component';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'], 
  providers: [ BookService, BookComponent ]
})
export class BookDetailComponent implements OnInit{
    book: Book;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {

    this.route.paramMap
    .switchMap((params: ParamMap) => this.bookService.getBook(params.get('id')))
    .subscribe(book => this.book = book);
  }

  goBack(){
    this.location.back();
  }

}

