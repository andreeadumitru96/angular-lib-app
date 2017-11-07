import { Pipe, PipeTransform, Component, Input } from '@angular/core';
import { Book } from '../book/book';

@Pipe({
    name: 'sortingFilter'
})
       
export class SortBookComponent implements PipeTransform {
    private items: Book[];
    private filteredItems: Book[];

    transform(items: Book[], filter: number): any {

        console.log(items);
        
        if(filter == 1) {
            this.sortAscending(items);
            return items;
        }
        else if(filter == 2) {
            this.sortDescending(items);
            return items;
        }
        else if(filter == 3) {
            this.shuffle(items);
            return items;
        }
        else {
            return items;
        }
    }
    sortAscending(items) {
        items.sort((firstBook, secondBook): any => {
            return (firstBook.title.toUpperCase < secondBook.title.toUpperCase) ? -1 : (firstBook.title > secondBook.title) ? 1 : 0;
        })
        console.log(items);
        
    }
    sortDescending(items) {
        items.sort((firstBook, secondBook): any => {
            return (firstBook.title.toUpperCase > secondBook.title.toUpperCase) ? -1 : (firstBook.title < secondBook.title) ? 1 : 0;
        }) 
    }
    shuffle(items) {
        for (let index = items.length; index; index--) {
            let randomNumber = Math.floor(Math.random() * index);
            [items[index - 1], items[randomNumber]] = [items[randomNumber], items[index - 1]];
        }
    }

    // assignCopy() {
    //     this.filteredItems = Object.assign([], this.books);
    //  }
    //  filterItem(value) {
    //     if(!value) {
    //         this.assignCopy();
    //     } 
    //     this.filteredItems = Object.assign([], this.books).filter(
    //        item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
    //     )
    //  }
}