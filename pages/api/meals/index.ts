import { NextApiRequest, NextApiResponse } from 'next';

const BASE_URL = 'https://itzcookiie-bookish-trout-pgqr47495qg375v.github.dev/';
const URL = `${BASE_URL}/api/v1/meals`;

export default async function meals (
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const { query } = req;
    const { id } = query;

    const response = await fetch(URL);
    const json = response.json();
    

  }