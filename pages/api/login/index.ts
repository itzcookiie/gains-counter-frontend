import { NextApiRequest, NextApiResponse } from 'next';

const BASE_URL = 'https://itzcookiie-bookish-trout-pgqr47495qg375v-9000.preview.app.github.dev';
const API_URL = `${BASE_URL}/api/v1/login`;

export default async function login (
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const { query, body } = req;

    const response = await fetch(API_URL, {
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