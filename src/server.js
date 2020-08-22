const dotenv = require('dotenv')
const jsonServer = require('json-server')

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

dotenv.config()

const PORT = process.env.SERVER_PORT

server.use(middlewares)
server.use(router)
server.listen(PORT, () => {
    console.log(`Сервер запущен на порту: ${PORT}`)
})