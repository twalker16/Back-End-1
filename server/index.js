const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/api/users', (req, res)=>{
    let friends = [ "Nintin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
})

app.get("/weather/:temperature", (req, res) => {
    const { temperature } = req.params;
    const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
    res.status(200).send(phrase);
  });


app.listen(4000, ()=> console.log('Server running on port 4000'))