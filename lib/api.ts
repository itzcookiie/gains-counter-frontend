import useSwr, { useSWRConfig } from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json());

const MEALS_ENDPOINT = '/api/meals/{id}/{date}';
const LOGIN_ENDPOINT = '/api/login/';

const formatDate = (userDate: Date): string => `${userDate.getTime()}`;

class ResultCode {
  LOGIN_FAILED = 0
  LOGIN_SUCCESS = 1
  MEAL_SAVED_SUCCESS = 2
  MEAL_SAVED_FAILED = 3
  MEAL_UPDATED_SUCCESS = 4
  MEALED_UPDATED_FAILED = 5
  MEALED_DELETED_SUCCESS = 6
  MEAL_DELETED_FAILED = 7
  MEALS_RETRIEVED_SUCCESS = 8
  MEALS_RETRIEVED_FAILED = 9
}

interface LoginResponse {
  user: {
    id: number;
    email: string;
  }
  result_code: number;
  result_message: string;
}

interface LoginPayload {
  data: LoginResponse
  resultCode: ResultCode;
}


export const getRequest = (url: string | null) => {
  const { data, error } = useSwr(url, fetcher);
  console.log('url: ', url)
  console.log('error: ', error)
  return {
    data: data ?? [],
    isLoading: !error && !data,
    isError: error
  }
}

export async function postRequest(url: string, body: any): Promise<LoginPayload> {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  const data: LoginResponse = await response.json();
  console.log(data);
  return {
    data,
    resultCode: new ResultCode()
  }
}

export const getMealsEndpoint = (id: number, userDate: Date): string => (
  MEALS_ENDPOINT
    .replace('{id}', id.toString())
    .replace('{date}', formatDate(userDate))
);

export const getMeals = (id: number | null, userDate: Date | null) => getRequest(
  Number.isInteger(id) && userDate &&
  MEALS_ENDPOINT
    .replace('{id}', id.toString())
    .replace('{date}', formatDate(userDate))
  );

export const getResults = (id: number | null) => getRequest(Number.isInteger(id) && MEALS_ENDPOINT.replace('{id}', id.toString()));

export const login = (email: string) => postRequest(LOGIN_ENDPOINT, {
  user: {
    email
  }
});