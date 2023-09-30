import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, platform }) {
	const { results } = await plattform.env.DB.prepare('SELECT * FROM mails WHERE id = ?')
		.bind(id)
		.all();

	if (results?.length) {
		const mail = results[0];
		return mail;
	}

	throw error(404, 'Not found');
}
