
function getDialData(actual,target) {
	return {
    	datasets: [{
		    label: 'Score',
		    data: [actual,target],
		    backgroundColor: ['#4cd137','rgb(200,200,200)'],
		    borderWidth: 0,
     	}]
    }
}

const salary = getDialData(350000,4000000);

module.exports = {salary}