import { useCallback, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';


import styles from './home-normal.module.scss';
import Form from '../../blocks/Form/index';
import Stats from '../../blocks/Stats/index';
import Cards from '../../blocks/Cards/index';

function Home() {
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
    <Container fluid className="h-100">
      <Row className="h-100">
        <Col xs={12} sm={12} md={6} className="h-100">
          <Row className="h-100 flex-column">
            <Col className="flex-grow-0">
              <h2 className="text-center">Add your meal to track gains</h2>
            </Col>
            <Col className="h-100">
              <Form />
            </Col>
          </Row>
        </Col>
        <Col className="h-100">
          <Stack gap={3} className="h-100">
            <h2 className="text-center">Gains</h2>
            <p className="text-center">See all the gains you've made so far</p>
            <Stats statResults={statResults} />
            <Cards meals={data} />
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
