import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

const CityCard = ({description ,imageUrl,city,id}) => {
  return <div>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={imageUrl} />
  <Card.Body>
    <Card.Title>{city}</Card.Title>
    <Card.Text>
     {description}
    </Card.Text>
    <Link to={`City/${id}`}> SEE More </Link>
  </Card.Body>
</Card>
  </div>;
};

export default CityCard;

