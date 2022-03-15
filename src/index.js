const express = require('express');
const app = express()
const path = require('path');
const handlebars = require('express-handlebars');
const port = process.env.PORT || 5000


app.use(express.static(path.join(__dirname, 'public')));


app.engine('hbs', handlebars({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, './resources/views'))



app.get('/', (req, res) => {
   res.json([
       {
           id: 1,
           name: 'test 1',
       },
       {
        id: 2,
        name: 'test 2',
    },
   ])
})

app.get('/tubuscu', (req, res) => {
    res.json({message: "Tú BusCu"})
})

// app.get('/news', (req, res) => {
//     res.render('news')
// })


app.listen(port, () => {
    console.log(`App start at port 3000`);
})
