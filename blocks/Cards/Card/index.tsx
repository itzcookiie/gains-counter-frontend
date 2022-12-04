import {default as BootstrapCard} from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

interface Props {
  calories: number;
  protein: number;
  mealType: string;
  mealName: string;
  createdAt: string;
  addDeleteBtn?: boolean;
}

export default function Card({ calories, protein, mealName, mealType, createdAt, addDeleteBtn }: Props) {
    return (
      <BootstrapCard className="shadow" bg='light' text='dark' border='dark'>
        {/* {addDeleteBtn && (
        <Badge pill className="position-absolute top-0 start-100 translate-middle bg-danger p-3">X</Badge>
        )} */}
        <BootstrapCard.Img src="https://images.unsplash.com/photo-1562436260-8c9216eeb703?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1641&q=80" alt="" />
        <BootstrapCard.Body>
          <BootstrapCard.Title>{mealName}</BootstrapCard.Title>
          <BootstrapCard.Subtitle className="mb-2 text-muted">{mealType}</BootstrapCard.Subtitle>
          <BootstrapCard.Text>{calories} calories</BootstrapCard.Text>
          <BootstrapCard.Text>{protein}g of protein</BootstrapCard.Text>
        </BootstrapCard.Body>
        <BootstrapCard.Footer className="text-muted">{createdAt}</BootstrapCard.Footer>
      </BootstrapCard>
    )
}