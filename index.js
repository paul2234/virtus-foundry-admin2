const express = require('express');
const app = express();
const { Events } = require('./models/events.js');

const PORT = 3000;

app.set('view engine','ejs');
app.use(express.static('public'));

app.get('/', (req,res) => {
	res.render('index');
})

// app.get('/', async (req,res) => {

// 	// instantiate events
// 	const events = new Events('fast_finance');
	
// 	// instantiate data and error first
// 	let count;
// 	let error;

// 	// load events
// 	async function loadEvents() {
// 		try {
// 			await events.load();
// 			count = events.length;	
// 		} catch (e) {
// 			error = e;
// 		}
// 	}

// 	await loadEvents();
	
// 	// render the index template. pass data and error.
// 	res.render('index',{count,error});
// });

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});