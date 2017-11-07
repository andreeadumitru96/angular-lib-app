import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 

import { BookDetailComponent } from './book/book-detail.component';
import { BookComponent } from './book/book.component';
import { BookService } from './services/book.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SortBookComponent } from './filters/sorting.component';
import { SearchBookComponent } from './filters/searching.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    BookDetailComponent,
    BookComponent,
    SortBookComponent,
    SearchBookComponent
  ],
  providers: [ BookService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
