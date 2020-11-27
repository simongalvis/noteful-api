const express = require('express')
const morgan = require('morgan');



const app = express();
app.use(morgan('dev'));




app.get('/', (req, res) => {
    res.send('Hello Express!');
})


app.listen(8007, () =>{
    console.log('local host listening on port 8007!')
})


module.exports = app;