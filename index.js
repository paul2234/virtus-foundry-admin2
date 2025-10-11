const express = require('express');
const app = express();
const { salary } = require('./models/kpis.js');
const cookieParser = require('cookie-parser');
// const { Events } = require('./models/events.js');

const PORT = 3000;

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(cookieParser());

app.get('/', (req,res) => {

	const myIds = ['e9e259fb-f2ab-4329-90ae-907a606c55a8'];
	let browserId = req?.cookies?.sid;

	if (browserId && myIds.includes(browserId)) {
		res.status(200).render('index',{salary});
		return;	
	} else {
		res.status(401).render('401');
		return;
	}
	
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