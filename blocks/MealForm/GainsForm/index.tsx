import { forwardRef, useRef, useState } from 'react';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';


enum QuantitativeData {
  CALORIES = 'calories',
  PROTEIN = 'protein',
}

interface Props {
  [index: string]: any;
}

interface Meal {
	id: number;
	calories: number;
	protein: number;
	mealType: string;
	mealName: string;
}

const convertMealToPythonFormat = (meal: Meal) => ({
  id: meal.id,
  meal_type: meal.mealType,
  meal_name: meal.mealName,
  calories: meal.calories,
  protein: meal.protein,
});

function GainsForm({ setMeals, gainsPlaceholder, gainsId, userId }: Props, refs) {
  const [gains, setGains] = useState({
    ...gainsPlaceholder
  });
  const [disableForm, setDisableForm] = useState(false);

  const handleInput = e => {
    const { name } = e.target;
    const value = Object.values(QuantitativeData).includes(name) ? +e.target.value : e.target.value;
    console.log(value)
    setGains((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const addGains = async (e) => {
    e.preventDefault();
    const gainsFormElements = e.target.parentElement.parentElement.querySelectorAll('input') as NodeList;
    const validFormElements = Array.from(gainsFormElements).filter((element: HTMLInputElement) => (element.type === 'radio' && element.checked) || (element.type !== 'radio' && element.value));
    if (validFormElements.length < 4) {
      const invalidFormElement = Array.from(gainsFormElements).find((element: HTMLInputElement) => !element.checkValidity()) as HTMLInputElement;
      console.log(invalidFormElement)
      console.log(Array.from(gainsFormElements))
      invalidFormElement.reportValidity();
      return;
    }
    const mealObj = convertMealToPythonFormat(gains);
    console.log(mealObj);
    setMeals((prevState) => {
      console.log(prevState, gainsId)
      return [...prevState.filter(meal => meal.id !== gainsId), mealObj]
    })
    setDisableForm(true);
  }

  return (
    <Col>
      <fieldset disabled={disableForm}>
        <Form.Group controlId={`meal-name-${gainsId}`}>
          <Form.Label>Meal name</Form.Label>
          <Form.Control onChange={handleInput} required name="mealName" type="text" />
        </Form.Group>
        <Form.Group controlId={`calories-${gainsId}`}>
          <Form.Label>Calories</Form.Label>
          <Form.Control onChange={handleInput} name="calories" required type="number" />
        </Form.Group>
        <Form.Group controlId={`protein-${gainsId}`}>
          <Form.Label>Protein</Form.Label>
          <Form.Control onChange={handleInput} required name="protein" type="number" />
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
            id={`food-${gainsId}`} />
          <Form.Check
            onChange={handleInput}
            inline
            required
            className="ms-auto"
            label="Drink"
            name="mealType"
            type="radio"
            value="Drink"
            id={`drink-${gainsId}`} />
        </Stack>
        <Stack>
          <Button onClick={addGains} className="mx-auto h-100 justify-content-center align-items-center" variant="primary">Add</Button>
        </Stack>
      </fieldset>
    </Col>
  )
}

export default forwardRef(GainsForm)