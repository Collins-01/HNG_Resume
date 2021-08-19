const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public'),),)
// app.use(express.static(`${__dirname}/public`))
 
app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));