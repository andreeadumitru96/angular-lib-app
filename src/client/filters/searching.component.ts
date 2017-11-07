import { Pipe } from '@angular/core';
import { Book } from '../book/book';

@Pipe({
    name: 'searchingFilter'
})

export class SearchBookComponent {
    transform(books, ...args) {
        console.log(args);
        if(!args[0]) {
            return books;
        }
        else if (books) {
            return books.filter(item => {
                for(let key in item){
                    if((typeof item[key] === 'string' || item[key] instanceof String) &&
                        (item[key].toLowerCase().indexOf(args[0]) !== -1)) {
                        return true;
                        }
                }
            })
        }

    }
    
}
