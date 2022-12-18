import { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';

import { getMeals } from '@lib/api';
import { useUserIdContext } from '@contexts/UserId';
import Cards from '../../blocks/Cards/index';
import Stats from '../../blocks/Stats/index';

import styles from './styles.module.scss';

interface Props {

}

export default function ResultDetail() {
  const [userId, setUserId] = useUserIdContext();
  const { data: meals, isLoading, isError } = getMeals(userId);
  const [addDeleteBtn, setAddDeleteBtn] = useState(false);

  const statResults = [
    {score: 80, field: 'calories'},
    {score: 40, field: 'protein'}
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
                <Cards meals={meals} addDeleteBtn={addDeleteBtn} />
              </Col>
              {/* <Col className="pe-0" xs="auto">
                <Stack className={`${styles.delete_container} border border-primary border-2 bg-info sticky-top vh-100 align-items-end justify-content-end`}>
                  <button onClick={(e) => setAddDeleteBtn(!addDeleteBtn)}>DELETE MODE</button>
                </Stack>
              </Col> */}
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