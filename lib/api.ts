import { useSwr } from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json());

const MEALS_API = '/api/meals/{id}';

export const getRequest = (url: string) => {
    const { data, error } = useSwr(url, fetcher);
    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}

export const postRequest = async (url: string, body: any) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    return response.json();
}

export const getMeals = (id: number) => getRequest(MEALS_API.replace('{id}', id.toString()));