import styles from './cards.module.scss';

import Card from './Card/index';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface Meal {
  calories: number;
  protein: number;
  mealType: string;
  mealName: string;
  createdAt: string;
}

interface Props {
  meals: Meal[];
}

export default function Cards({ meals }: Props) {

    return (
      <Row className="g-3" xs={1} lg={2} xl={3}>
        {meals.map((meal, index) => (
          <Col>          
            <Card 
              key={index}
              mealName={meal.mealName}
              protein={meal.protein}
              calories={meal.calories}
              mealType={meal.mealType}
              createdAt={meal.createdAt}
            />
          </Col>
        ))}
      </Row>
    )
}