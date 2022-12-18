import { NextApiRequest, NextApiResponse } from 'next';

const BASE_URL = 'https://itzcookiie-bookish-trout-pgqr47495qg375v-9000.preview.app.github.dev';
const API_URL = `${BASE_URL}/api/v1/meals/{id}`;

export default async function meals(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { query, body } = req;
    const { id } = query;
    console.log('ID: ', id);

    const response = await fetch(API_URL.replace('{id}', id), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    const json = await response.json();
    console.log('JSON: ', json)
    res.status(200).send(json);
}