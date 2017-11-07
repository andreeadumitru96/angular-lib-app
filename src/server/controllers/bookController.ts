var Book = require("../models/Book.model");

export class BookController {
    async createNewBook(newBook){
        let book = new Book(newBook);
        await book.save();
    }
    
    async getBooks(){
        return await Book.find({}).exec();
    }

    async getOneBook(bookId){
        return await Book.findOne({_id: bookId}).exec();
    }
}


