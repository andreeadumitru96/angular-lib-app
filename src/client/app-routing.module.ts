import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book/book-detail.component';

  
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'book', component: BookComponent },
  { path: 'book/:id', component: BookDetailComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}