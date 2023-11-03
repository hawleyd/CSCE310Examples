/*
In addition to the dependencies needed for firstServer.js,
you also need to install Mongoose in the web folder and have a working
MongoDB with a connection string.
Instructions for each step are on the Canvas course website

run with sudo node serverWithConnect.js

Author: Doug Hawley
*/

const express = require('express');
const mongoose = require('mongoose');
const app = express();

main().catch(err => console.log(err));

async function main() {

  //when someone wants the page
  app.get('/', (req, res) => {
    res.send('Hola Mundo!');
  });

  const server = app.listen(80, () => {
    console.log(`Express running ? PORT ${server.address().port}`);
  });

  //now do the DB stuff
  await mongoose.connect('mongodb+srv://doug:AXhW2DeCWXIeXr1A@coursework.kwwenmk.mongodb.net/testVotes');
  const voteSchema = new mongoose.Schema({
    voterName: String,
    voterID: Number,
    firstChoice: String,
    secondChoice: String,
    thirdChoice: String,
    fourthChoice: String,
    fifthChoice: String,
  });
  const ballotCast = mongoose.model('original-ballots', voteSchema);
  const vote01 = new ballotCast({ voterName: 'Ben Franklin', voterID: 10, firstChoice: "William Henry Harrison", secondChoice: "Taylor Swift", thirdChoice: "George Washington",
     fourthChoice: "Mr. Bean", fifthChoice: "Malcom X"});
  vote01.save();
  console.log("Vote recorded for " + vote01.voterName);
  
}




