const express = require('express');
const app = express();
const port = 3000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./models');

// converting requests to JSON format 
app.use(express.urlencoded({ extended: true }))

// setting path for static files
app.use(express.static('./assets'));

// express app use expressLayouts (before it routes to the views)
app.use(expressLayouts);

// extract styles and scripts from subpages and place it in layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// express app use ./routes/index as the starting point for the routes
app.use('/', require('./routes/index'));

// express app set view engine as ejs and provide views location
app.set('view engine', 'ejs');
app.set('views', './views');

// syncing schema and starting server 
db.sequelize.sync().then((req) => {
    app.listen(port, (err)=> {
        if(err) console.log(`Error in running server: ${err}`);
        console.log(`Server listening on port: ${port}`);
    });
});