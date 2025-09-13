const supabase = require('../utils/supabase.js');

class Events {
	constructor(project) {
		this.project = project;
		this.data = [];
		this.length = 0;
	}

	calculateLength() {
		this.length = this.data.length;
	}

	async load() {
		let {data,error} = await supabase.from('events').select('*').eq('project',this.project).gt('created_at','2025-09-11 00:00:00.000000+00');
		if (error) throw new Error(error?.message || 'An error occurred loading events');
		this.data = data;
		this.calculateLength();	
	}
}

module.exports = { Events };