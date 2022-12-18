import { useState, useEffect, useRef } from "react";
import { useSWRConfig } from "swr";
import Container from 'react-bootstrap/Container';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";

import GainsForm from './GainsForm/index';
import { getMealsEndpoint } from '@lib/api';
import styles from './form.module.scss';
import { useUserIdContext } from '@contexts/UserId';


interface Meal {
	id: number;
	calories: number;
	protein: number;
	mealType: string;
	mealName: string;
}

const API_URL = '/api/meals/{id}';

const createEmptyGains = (prevState: Meal[]): Meal => {
	return {
		id: prevState.length,
		calories: 0,
		protein: 0,
		mealType: '',
		mealName: ''
	}
}

export default function MealForm() {
	const { mutate } = useSWRConfig();
  const [userId, setUserId] = useUserIdContext();
	const [meals, setMeals] = useState([]);

	const smallMealFormContainer = useRef(null);

	const triggerNewGainsForm = () => {
		return setMeals((prevState) => (
			[...prevState, createEmptyGains(prevState)]
		))
	}

	const handleForm = async (e) => {
		e.preventDefault();
		const form = e.target as HTMLFormElement;
		const validity = form.checkValidity();
		if (!validity) return;
		console.log(meals)
		const removeKeys = meals.map(meal => Object.keys(meal).filter(key => key !== 'id').reduce((mealObj, curVal) => ({
			...mealObj,
			[curVal]: meal[curVal]
		}), {}))

		const response = await fetch(API_URL.replace('{id}', userId.toString()), {
				method: 'POST',
				headers: {
						'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					meals: removeKeys
				})
		});
		const json = await response.json();
		console.log(json);
    mutate(getMealsEndpoint(userId));
	}

	return (
		<Container className="h-100">
			<Form onSubmit={handleForm} className="h-100 d-flex flex-column">
				<Row xs={1} lg={2} ref={smallMealFormContainer}>
					{meals.map((meal, index) => (
						<GainsForm key={index} gainsId={index} gainsPlaceholder={meal} setMeals={setMeals} userId={1} />
					))}
					<Col>
						<Button onClick={triggerNewGainsForm}>+</Button>
					</Col>
				</Row>
				<Button className="mx-auto" variant="primary" type="submit">Submit</Button>
			</Form>
		</Container>
	)
}