const express = require('express');
const app = express();

//object req: object representing the incoming request
//object res: object representing the outgoing response
app.get('/', (req, res) => {
    res.send(
        {
            hi: 'there',
            'bye': 'buddy'
        }
    );
});


//dynamic PORT:
//env => environment variables
//look at underlying env and see whether they defined port for us to use; otherwise just use 5000 (for localhost)
const PORT = process.env.PORT || 5000;
//express tells node to listen to 5000
//node sends traffic rec. from 5000 to express
app.listen(PORT);