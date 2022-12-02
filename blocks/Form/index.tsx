import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import styles from './form.module.scss';

enum QuantitativeData {
    CALORIES = 'calories',
    PROTEIN = 'protein',
}

interface Meal {
    calories: number;
    protein: number;
    mealType: string;
    mealName: string;
}

const convertMealToPythonFormat = (meal: Meal) => ({
    meal_type: meal.mealType,
    meal_name: meal.mealName,
    calories: meal.calories,
    protein: meal.protein,
});

const API_URL = '/api/meals/{id}';

export default function MealForm() {
    const [gains, setGains] = useState({
        calories: 0,
        protein: 0,
        mealType: '',
        mealName: ''
    })

    useEffect(() =>undefined, [gains])
    console.log(gains)

    const handleInput = e => {
        const { name } = e.target;
        const value = Object.values(QuantitativeData).includes(name) ? +e.target.value : e.target.value;
        setGains((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleForm = async(e) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const validity = form.checkValidity();
        if (!validity) return;
        const id = '1';
        const mealObj = {
            'meal': convertMealToPythonFormat(gains)
        }
        console.log(mealObj);
        
        const response = await fetch(API_URL.replace('{id}', id), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mealObj)
        });
        const json = await response.json();
        console.log(json);
    }

    return (
        <Container className="h-100">
            <Form onSubmit={handleForm} className="h-100 d-flex flex-column justify-content-around">
                <Form.Group controlId="meal-name">
                    <Form.Label>Meal name</Form.Label>
                    <Form.Control onChange={handleInput} required name="mealName" type="text" />
                </Form.Group>
                <Form.Group controlId="calories">
                    <Form.Label>Calories</Form.Label>
                    <Form.Control onChange={handleInput} name="calories" required type="text" />
                </Form.Group>
                <Form.Group controlId="protein">
                    <Form.Label>Protein</Form.Label>
                    <Form.Control onChange={handleInput} required name="protein" type="text" />
                </Form.Group>
                <Stack direction="horizontal" gap={3}>
                <Form.Check
                        onChange={handleInput}
                        required
                        inline
                        label="Food"
                        name="mealType"
                        type="radio"
                        value="Food"
                        id="food" />
                    <Form.Check
                        onChange={handleInput}
                        inline
                        required
                        className="ms-auto"
                        label="Drink"
                        name="mealType"
                        type="radio"
                        value="Drink"
                        id="drink" />
                </Stack>
                <Button className="mx-auto" variant="primary" type="submit">Submit</Button>
            </Form>
        </Container>
    )
}