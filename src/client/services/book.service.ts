import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Book } from '../book/book';
import { BookComponent } from '../book/book.component';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {

    private headers = new Headers({'Content-Type': 'application/json'});

    private bookUrl = 'http://localhost:3000/book';
    constructor(private http: Http) { }

    getBooks(): Promise<Book[]> {
        return this.http.get(this.bookUrl)
            .toPromise()
            .then(response => response.json() as Book[])
            .catch(this.handleError);
    }

    getBook(id: any): Promise <Book> {
        const url = `${this.bookUrl}/${id}`;
        console.log(url);
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Book)
            .catch(this.handleError);
    }

    createBook(book: Book): Promise <Book> {
        return this.http
            .post(this.bookUrl, JSON.stringify({title: book.title, author: book.author, category: book.category, specifications: book.specifications}), {headers : this.headers})
            .toPromise()
            .then(res => res.json() as Book)
            .catch(this.handleError);    
    }

    private handleError(error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}

