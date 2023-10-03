const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 2000
const dbconnection = require('./db/conn');

//Collection required........................
const User = require('./models/usermsg');


//getting static file.......................
const staticpath = path.join(__dirname, 'public');



// middleware..................................
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/jq', express.static(path.join(__dirname, '../node_modules/jquery/dist')));
app.use(express.static(staticpath));



//Engine set.....................
app.set('view engine', 'ejs')
app.set('views', 'views');



//Routing........................................
app.get('/', (req, res) => {
    res.render('../views/admin/index.ejs');
})

app.get('/contact', (req, res) => {
    res.render('../views/admin/contact.ejs');
})
app.post('/contact', async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message
        })
        // const userData = new User(req.body);
        const Data = await user.save();
        res.status(200).render('../views/admin/index.ejs')
    } catch (error) {
        res.status(500).send(error);
    }
})


//dbconnection.....................................
dbconnection();


// server create......................................
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})
