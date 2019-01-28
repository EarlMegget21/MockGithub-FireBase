import * as functions from 'firebase-functions';

 // Start writing Firebase Functions
 // https://firebase.google.com/docs/functions/typescript

 export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
 });

import * as express from 'express';

const app = express();

// build multiple CRUD interfaces:
app.get('/:name/repos', (req, res) => {
    switch(req.params.name.toLowerCase()){
        case "earlmegget21":
            res.send([{id: 1234, name:"Project1"}, {id: 1235, name:"Project2"}])
            break;
        case "florent37":
            res.send([{id: 1111, name:"Project A"}])
            break;
        default:
            res.status(404).send({message: "User not found"})
    }
});

// build multiple CRUD interfaces:
app.get('/:name', (req, res) => {
    switch(req.params.name.toLowerCase()){
        case "earlmegget21":
            res.send({id: "1963", name: "Rudy Sonetti", login: "EarlMegget21", company: "Idean", avatar_url: "https://avatars1.githubusercontent.com/u/32954364?s=400&v=4"})
            break;
        case "florent37":
            res.send({id: "2000", name: "Florent Champigny", login: "florent37", company: "Idean", avatar_url: "https://avatars2.githubusercontent.com/u/5754972?s=400&v=4"})
            break;
        default:
            res.status(404).send({message: "User not found"})
    }
});

// Expose Express API as a single Cloud Function:
exports.users = functions.https.onRequest(app);