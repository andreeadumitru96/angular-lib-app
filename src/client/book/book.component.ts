import { Component, OnInit, Pipe } from '@angular/core';
import { Router }from '@angular/router';

import { Book } from './book';
import { BookService } from '../services/book.service';
import { SortBookComponent } from '../filters/sorting.component';
import { SearchBookComponent } from '../filters/searching.component';

@Component({
  selector: 'my-books',
  templateUrl: './book.component.html', 
  styleUrls: ['src/client/book/book.component.css'],
  providers: [BookService]
})

export class BookComponent implements OnInit {
  title = 'Library';
  books: Book[];
  bookTitle; bookAuthor; bookCategory;
  selectedBook: Book;
  router: Router;

  constructor(private bookService: BookService) { }

  getBooks(): void {
     this.bookService.getBooks()
      .then(books => {
        this.books = books
      });
  }
  ngOnInit(): void {
    this.getBooks();
  }
  onSelect(book: Book): void {
    this.selectedBook = book;
  }
  createBook(title: string, author: string, category: string, cantity: Number, date: Date, image: string,  specifications: Object): void {
    title = title.trim();
    
    if(!title){
        return;
    }
    let book = new Book();
    book.author = author;
    book.title = title;
    book.date = date;
    book.image = image;
    book.category = category;
    book.cantity = cantity;

    this.bookService.createBook(book)
        .then(book => {
          console.log(book);
        this.books.push(book);
        this.selectedBook = null;

        this.bookTitle = '';
        this.bookAuthor = '';
        this.bookCategory = '';

    });
  }
}


