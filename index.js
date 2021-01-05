const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.set('view engine', 'ejs')

app.get('/', (req, res) =>
    res.send('teste')
)

app.get('/cadastro', (req, res) =>
    res.render('create')
)

require('./controllers/main')(app)

app.listen(8080, () =>
    console.log('Servidor aberto')
)