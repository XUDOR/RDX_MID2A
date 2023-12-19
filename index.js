const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // for parsing application/json

//CRUD routes

app.listen(port,() => {
  console.log('Server running on http://localhost:${port}');
});

const pool = require('./db');

//create (POST)
app.post('/users', async (req, res) =>{
  //create new user
});

//read (GET)
app.get('/users', async (req,res) => {
  //code to get a single user by id
}); // code to get all users

app.get('/users/:id', async (req,res) => {
  //code to get a single user by id
});

//Update (PUT/PATCH)
app.put('users/:id', async (req,res) => {
  //code to update a user by id
});

//Delete (DELETE)
app.delete('/users/:id', async (req, res) => {
  //code to delete a user by id
});