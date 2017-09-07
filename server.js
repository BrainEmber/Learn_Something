const express = require('express');
const app = express();
const PORT = 2080;

app.use(express.static('public'));

app.listen(PORT, ()=>{
	console.log('express listening on port ' + PORT);
});

