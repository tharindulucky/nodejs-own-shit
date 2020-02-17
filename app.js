const express = require('express');
const bodyParser = require('body-parser');
const models = require('./models');

const productRoutes = require('./routes/products');

const app = express();

//DB Connection Sync
models.sequelize.sync().then(() => {
    console.log("DB Synced");
}).catch((error) => {
    console.log(error);
});

//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//routes
app.use('/products', productRoutes);

module.exports = app;
