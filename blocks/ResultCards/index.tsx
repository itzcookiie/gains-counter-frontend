import styles from './cards.module.scss';

import ResultCard from './ResultCard/index';
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
      <Row className="py-5 g-3" xs={1} sm={2} md={3} xl={4}>
        {meals.map((meal, index) => (
          <Col key={index}>          
            <ResultCard 
              protein={meal.protein}
              calories={meal.calories}
              createdAt={meal.createdAt}
            />
          </Col>
        ))}
      </Row>
    )
}