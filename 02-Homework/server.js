const express = require('express')

const app = express();
const path =require('path');
const PORT = 3000;
const fs = require ('fs');
const { error } = require('console');
const { response } = require('express');
const { ERANGE } = require('constants');
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname,"./Develop/public"
)))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './Develop/public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './Develop/public/notes.html')));

app.get('/api/notes', (req, res) => res.sendFile(path.join(__dirname, './Develop/db/db.json')));

app.post('/api/notes', (req, res) =>{let newnote = req.body
    fs.readFile(path.join(__dirname,'./Develop/db/db.json'),(error,response)=>{
        if (error){
            console.log(error)
        }
        let jsonResponce = JSON.parse(response)
        jsonResponce.push(newnote)
        fs.writeFile(path.join(__dirname, './Develop/db/db.json'),JSON.stringify(jsonResponce),(error)=>{
        if (error){
            console.log(error)}
        }
        
        )
    })
})

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));