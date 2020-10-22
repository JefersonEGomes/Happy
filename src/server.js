    // importar dependencia
    const express = require('express');
    const path = require('path');
    const pages = require('./pages.js')
    // iniciando o express
    const server = express()
    server
    // utilizar body do req
    .use(express.urlencoded({extended: true}))
    // utilizando os arquivos estaticos
    .use(express.static('public'))

    // configurar template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // rotas da aplicação
    server.get('/', pages.index)
    server.get('/orphanage', pages.orphanage)
    server.get('/orphanages', pages.orphanages)
    server.get('/create-orphanage', pages.createOrphanage)
    server.post('/save-orphanage', pages.saveOrphanage)


    // ligar o servidor
    server.listen(5500)