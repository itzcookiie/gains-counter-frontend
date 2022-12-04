import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

import styles from './index.module.scss';

interface Props {
  statResults: {
    field: string;
    score: number;
    target?: string;
  }[]
}

export default function Stats({ statResults }: Props) {
    return (
      <Row xs="auto" className="justify-content-center gx-2 text-center">
        {statResults.map((statResult, index) => (
          <Col key={index}>
            <Stack className={`${styles.stat_container} rounded-circle px-4 py-2`}>
              <p className="mt-3 mb-0 text-capitalize fw-bold">{statResult.field}</p>
              <p className="">{statResult.score}/100</p>
            </Stack>
          </Col>
      ))}
      </Row>
    )
}