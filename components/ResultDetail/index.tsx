import { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';

import Cards from '../../blocks/Cards/index';
import Stats from '../../blocks/Stats/index';

import styles from './styles.module.scss';

interface Props {

}

export default function Result() {
  const [addDeleteBtn, setAddDeleteBtn] = useState(false);

  const statResults = [
    {score: 80, field: 'calories'},
    {score: 40, field: 'protein'}
  ];
        
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
        <>
          <Container fluid className="text-center">
            <Row>
              <Col>
              <h1>Detailed Result</h1>
                <h2>What you ate on</h2>
                <h3>Nov 19</h3>
                <Stats statResults={statResults} />
                <Cards meals={data} addDeleteBtn={addDeleteBtn} />
              </Col>
              <Col xs="auto pe-0">
                <Stack className={`${styles.delete_container} border border-primary border-2 bg-info sticky-top vh-100 align-items-end justify-content-end`}>
                  <button onClick={(e) => setAddDeleteBtn(!addDeleteBtn)}>DELETE MODE</button>
                </Stack>
              </Col>
            </Row>
          </Container>
          {addDeleteBtn && (
            <footer className="text-bg-danger p-3 text-center">
              <Button variant="outline-light">DELETE</Button>
            </footer>
          )}
        </>
    )
}