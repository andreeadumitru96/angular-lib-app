import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as path from 'path';

import { bookRouter } from './server/routes/bookRoute';

mongoose.connect("mongodb://localhost");

let app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../node_modules')));
app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, '../')));

app.use(bookRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/index.html'));
});

const port =  3000;

app.listen(port); 
app.on('listening', onListening);

function onListening(): void {
    console.log(`Listening on port `+ port);
}

