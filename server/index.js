const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller.js');
const massive = require('massive');
require('dotenv').config()

const app = express();
massive( process.env.CONNECTION_STRING ).then( dbInstance => app.set('db', dbInstance) );


app.use( bodyParser.json() );

// app.get

const port = 4000;
app.listen( port, () => { console.log(`Area 51 is snooping on port ${port}`); } );