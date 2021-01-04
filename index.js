const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.set('view engine', 'ejs')

app.get('/', (req, res) =>
    res.send('Quanto tempo kkk ')
)

app.get('/cadastro', (req, res) =>
    res.render('create')
)

app.listen(8080, () =>
    console.log('Servidor aberto')
)