const express = require('express')

const app = express()
const port = 3002;
app.listen(port, function (){
    console.log("successfully Running at http:localhost:" + port);
});
