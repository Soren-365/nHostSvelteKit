import { NhostClient } from '@nhost/nhost-js';

const nhost = new NhostClient({
	backendUrl: 'https://ojtyorcmhmdntinlsvcf.nhost.run'
});

interface ReturnInterface {
	data: unknown;
	error: any;
}

export default async function dbQuery(query) {
	const { data, error }: ReturnInterface = await nhost.graphql.request(query);

	if (error) {
		console.log('Graphql hasura query error: ', error);
	}
	console.log('rawReturnData', data, typeof data);
	return data;
}
