const express = require('express')

const app = express();
const path =require('path');
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname,"./Develop/public"
)))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './Develop/public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './Develop/public/notes.html')));

app.get('/api/notes', (req, res) => res.sendFile(path.join(__dirname, './Develop/db/db.json')));

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));