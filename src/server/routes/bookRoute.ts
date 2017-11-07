import * as express from 'express';
import { BookController } from '../controllers/bookController';
export let bookRouter = express.Router();

let Book = require('../models/Book.model');

let ctrl = new BookController();

bookRouter.get('/book', async (req, res) => {
    try{
        let books = await ctrl.getBooks();
        res.status(200).json(books);
    }
    catch(err){
        res.status(500).send(err);
    }
});

bookRouter.get('/book/:id', async (req, res) => {
    try {
        let bookId = req.params.id;
        let book = await ctrl.getOneBook(bookId);
        console.log(book);
        res.status(200).json(book);
    }
    catch(err){
        res.status(500).send(err);
    }
});

bookRouter.post('/book', async (req, res) => {
    try{
        let book = {
            title: req.body.title,
            category: req.body.category,
            author: req.body.author,
            cantity: req.body.cantity,
            image: req.body.image,
            date: req.body.date,
            specifications: req.body.specifications
        }
        await ctrl.createNewBook(book); 
        res.status(200).json(book);
    }
    catch(err){
        res.status(500).send(err);
    }
});



