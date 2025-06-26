const todoList = [{taak: "Kippen voeren", gedaan: true},
                {taak: "Eieren rapen", gedaan: true}, 
                {taak: "Honden + katten voeren", gedaan: false}, 
                {taak: "Vee naar buiten", gedaan: false}, 
                {taak: "Hooien + mesten", gedaan: true}];

let todoListJSON = JSON.stringify(todoList);

const http = require('http');

function handlerequest(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.end(todoListJSON);
}

const server = http.createServer();
server.on('request', handlerequest);

server.listen(3000, () => {
    console.log('server draait op http://localhost:3000');
});