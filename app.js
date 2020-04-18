const express = require('express');
const path = require('path');
const { v4 } = require('uuid');
const app = express();

const CONTACTS = [
    { id: v4(), name: "tata", value: '3801002030', marked: false }
]

//GET
app.get('/api/contacts', (req, res) => {
    res.status(200).json(CONTACTS);
})

//POST
app.post('/api/contacts', (req, res) => {
    res.status(200).json(CONTACTS);
})

app.use(express.static(path.resolve(__dirname, 'client')));

app.get('*', (req, res) => {
    res.res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
});

app.listen(3000, () => console.log('Server has been started on port 3000...'))