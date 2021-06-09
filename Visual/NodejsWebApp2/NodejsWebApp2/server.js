
var express = require('express');
var app = express();
var PORT = process.env.PORT || 1337;

app.get('/', (req, res) => res.send('Hello~! Mo'));
    return res.send('Hello');
});
app.get('/JTS', (req, res) => res.send('Hello~!'));
app.listen(PORT, () => {
    console.log('Server listening on port $(PORT)...');
});
