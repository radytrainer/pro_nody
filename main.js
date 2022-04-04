const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.static('public'))

const PORT = 5000;
app.listen(PORT, () => console.log('listening on port: ' + PORT));

let students = JSON.parse(fs.readFileSync('./students.json'));

app.get('/students', (req, res) => {
    res.json(students)
})