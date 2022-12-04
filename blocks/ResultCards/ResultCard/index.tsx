import {default as BootstrapCard} from 'react-bootstrap/Card';

interface Props {
  calories: number;
  protein: number;
  createdAt: string;
}

export default function Card({ calories, protein, createdAt }: Props) {
    return (
      <BootstrapCard className="shadow h-100" bg='light' text='dark' border='dark'>
        <BootstrapCard.Body className="p-lg-5">
          <BootstrapCard.Text className="mb-4 display-4">{calories} calories</BootstrapCard.Text>
          <BootstrapCard.Text className="display-4">{protein}g of protein</BootstrapCard.Text>
        </BootstrapCard.Body>
        <BootstrapCard.Footer className="text-muted">{createdAt}</BootstrapCard.Footer>
      </BootstrapCard>
    )
}