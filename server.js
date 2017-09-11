const express = require('express');
const app = express();
const PORT = 2080  || process.env.PORT;

app.use(express.static('public'));

app.listen(PORT, function(){
	console.log('express listening on port ' + PORT);
});
