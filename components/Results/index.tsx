import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import ResultCards from '../../blocks/ResultCards/index';

import { getMeals } from '@lib/api';
import { useUserIdContext } from '@contexts/UserId';

import styles from './template.module.scss';

interface Props {

}

export default function Results() {
  const [userId, setUserId] = useUserIdContext();
  const { data: meals, isLoading, isError } = getMeals(userId);

  return (
    <Container fluid className="text-center">
      {isLoading ? <p>Loading...</p> :
      <>
        <h1>Results</h1>
        <h2>See how much gains you've made</h2>
        <h3>Nov</h3>
        <ResultCards meals={meals} />
      </>
      }
    </Container>
  )
}