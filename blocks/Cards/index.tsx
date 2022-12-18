import Card from './Card/index';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface Meal {
  calories: number;
  protein: number;
  meal_type: string;
  meal_name: string;
  created_at: string;
}

interface Props {
  meals: Meal[];
  addDeleteBtn?: boolean;
}

export default function Cards({ meals, addDeleteBtn }: Props) {
    return (
      <Row className="py-5 g-5" xs={1} sm={2} xl={3}>
        {meals.map((meal, index) => (
          <Col key={index}>          
            <Card
              addDeleteBtn={addDeleteBtn}
              mealName={meal.meal_name}
              protein={meal.protein}
              calories={meal.calories}
              mealType={meal.meal_type}
              createdAt={meal.created_at}
            />
          </Col>
        ))}
      </Row>
    )
}