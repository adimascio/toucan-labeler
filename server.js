const express = require('express');
const app = express();
const port = 3344;


app.get('/', (req, res) => res.send('Waiting for PRs!'));

app.post('/toucan-pr', (req, res) => {
    console.log('got', req.body);
    res.end()
});

app.listen(port, () => console.log(`webhook app listening on port 3344!`))
