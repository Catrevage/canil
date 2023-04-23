import express from 'express';
import env from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import routes from './routes/index'
env.config();

const server = express();

server.set('view engine', 'mustache');
server.set('view', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

//routes
server.use(routes)
server.use((req, res) =>{
    res.send('Páfina não encontrada');
})


server.listen(process.env.PORT);


