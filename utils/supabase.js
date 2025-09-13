require('dotenv').config({ quiet: true });

const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL 		= process.env.SUPABASE_URL || 'https://xyzcompany.supabase.co';
const SUPABASE_ANON_KEY	= process.env.SUPABASE_ANON_KEY || 'publishable-or-anon-key';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function authenticate() {
	const { data, error } = await supabase.auth.signInWithPassword({
	  email: process.env.SUPABASE_EMAIL,
	  password: process.env.SUPABASE_PASSWORD,
	})
	if (error) {
		console.error(error?.message || "There was an error creating the anonymous login");
	}
}

authenticate();

module.exports = supabase;