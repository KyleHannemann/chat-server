const express = require('express');
const ct = require('./controllers/message_controller');
const app = express();
const port = 3001;

app.use(express.json());
app.use(express.static(__dirname + '/../public/build') );
app.get('/api/messages', ct.read);
app.post('/api/messages', ct.create);
app.delete('/api/messages/:id', ct.delete);
app.put('/api/messages/:id', ct.update );

app.listen(port, ()=>{
    console.log('running on port '+ port);
})
