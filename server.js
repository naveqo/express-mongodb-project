const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose');

// MissingSchemaError: Schema hasn't been registered for model "Task".
require('./api/models/taskModel');

mongoose.Promise = global.Promise;
mongoose.connect(
    'mongodb://localhost/Tododb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
);

//body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require('./api/routes/taskRoutes');
routes(app);

app.listen(port);

console.log("todo list RESTful API server started on: " + port);

