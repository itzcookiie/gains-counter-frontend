import { useRouter } from 'next/router';

import {default as BootstrapCard} from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

interface Props {
  calories: number;
  protein: number;
  createdAt: string;
  id: number;
}

export default function Card({ calories, protein, createdAt, id }: Props) {
  const router = useRouter();
  const handleResultDetail = () => {
    router.push(`results/${id}`);
  }
    return (
      <BootstrapCard onClick={handleResultDetail} className="shadow h-100" bg='light' text='dark' border='dark'>
        <BootstrapCard.Body className="p-lg-5">
          <BootstrapCard.Text className="mb-4 display-4">{calories} calories</BootstrapCard.Text>
          <BootstrapCard.Text className="display-4">{protein}g of protein</BootstrapCard.Text>
        </BootstrapCard.Body>
        <div className="pb-5">
          <Button variant="outline-primary" className="stretched-link">Click card for details</Button>
        </div>
        <BootstrapCard.Footer className="text-muted">{createdAt}</BootstrapCard.Footer>
      </BootstrapCard>
    )
}