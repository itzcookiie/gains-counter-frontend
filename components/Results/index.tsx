import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import ResultCards from '../../blocks/ResultCards/index';

import styles from './template.module.scss';

interface Props {

}

export default function Results() {
  const data = [
    {
        "calories": 100,
        "createdAt": "Thu, 01 Dec 2022 23:40:33 GMT",
        "id": 1,
        "mealName": "Cereal",
        "mealType": "Food",
        "protein": 100
    },
    {
        "calories": 300,
        "createdAt": "Thu, 01 Dec 2022 23:40:33 GMT",
        "id": 2,
        "mealName": "Cereal",
        "mealType": "Drink",
        "protein": 10
    },
    {
        "calories": 100,
        "createdAt": "Thu, 01 Dec 2022 23:40:33 GMT",
        "id": 3,
        "mealName": "Cereal",
        "mealType": "Food",
        "protein": 100
    },
    {
        "calories": 250,
        "createdAt": "Thu, 01 Dec 2022 23:40:33 GMT",
        "id": 4,
        "mealName": "Cereal",
        "mealType": "Drink",
        "protein": 30
    },
    {
        "calories": 499,
        "createdAt": "Thu, 01 Dec 2022 23:41:31 GMT",
        "id": 9,
        "mealName": "Jellof rice",
        "mealType": "FOOD",
        "protein": 200
    },
    {
        "calories": 499,
        "createdAt": "Thu, 01 Dec 2022 23:42:07 GMT",
        "id": 10,
        "mealName": "Jellof rice",
        "mealType": "FOOD",
        "protein": 200
    },
    {
        "calories": 499,
        "createdAt": "Thu, 01 Dec 2022 23:42:58 GMT",
        "id": 11,
        "mealName": "Jellof rice",
        "mealType": "FOOD",
        "protein": 200
    },
    {
        "calories": 499,
        "createdAt": "Thu, 01 Dec 2022 23:44:13 GMT",
        "id": 12,
        "mealName": "Jellof rice",
        "mealType": "FOOD",
        "protein": 205
    }
];

    return (
        <Container fluid className="text-center">
          <h1>Results</h1>
          <h2>See how much gains you've made</h2>
          <h3>Nov</h3>
          <ResultCards meals={data} />
        </Container>
    )
}