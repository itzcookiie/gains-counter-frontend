import { useCallback, useEffect, useState, useContext } from 'react';
import { useSession } from "next-auth/react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

import { getMeals } from '@lib/api';
import { useUserIdContext } from '@contexts/UserId';
import { useDateContext } from '@contexts/Date';
import { login } from '@lib/api';

import styles from './home-normal.module.scss';
import Form from '@blocks/MealForm/index';
import Stats from '@blocks/Stats/index';
import Cards from '@blocks/Cards/index';

function Home() {
  const [userId, setUserId] = useUserIdContext();
  const [date, setDate] = useDateContext();

  const {data: meals, isLoading, isError} = getMeals(userId, date);
  console.log(meals, isLoading, date)

  // useEffect(() => {
  //   async function loginUser() {
  //     if (session?.user?.email) {
  //       const { data, resultCode } = await login(session.user.email);
  //       if (data.result_code === resultCode.LOGIN_SUCCESS) {
  //         setUserId(data.user.id)x
  //       } else {
  //         console.error('Login failed!');
  //         console.error(data.result_code);
  //         console.error(data.result_message);
  //       }
  //     }
  //   };

  //   loginUser();
  // }, [session?.user?.email]);

  const statResults = [
    {score: 80, field: 'calories'},
    {score: 40, field: 'protein'}
  ];

  
  return (
    <Container fluid className="h-100">
    {isLoading ? <p>Loading...</p> :
      <Row className="h-100">
        <Col xs={12} sm={12} md={6} className="h-100">
          <Row className="h-100 flex-column">
            <Col className="flex-grow-0">
              <h2 className="text-center">Add your meal to track gains</h2>
            </Col>
            <Col className="overflow-y-scroll">
              <Form />
            </Col>
          </Row>
        </Col>
        <Col className="h-100 overflow-hidden"> 
          <Stack gap={3} className="h-100">
            <h2 className="text-center">Gains</h2>
            <p className="text-center">See all the gains you've made so far</p>
            {
              meals.length 
              ? <>
                  <Stats statResults={statResults} /> 
                  <Cards meals={meals} />
                </>
              : <p>No meals saved yet!</p>
            }
          </Stack>
        </Col>
      </Row>
      }
    </Container>
    
  )
}

export default Home
