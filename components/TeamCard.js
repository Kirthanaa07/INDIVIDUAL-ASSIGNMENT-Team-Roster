import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';

function TeamCard({ teamObj }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <img src={teamObj.image} alt="" style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{teamObj.name}</Card.Title>
        <p>{teamObj.role}</p>
        <Button variant="primary" className="m-2">VIEW</Button>
        <Button variant="primary" className="m-2">EDIT</Button>
        <Button variant="primary" className="m-2">DELETE</Button>
      </Card.Body>
    </Card>
  );
}

TeamCard.propTypes = {
  teamObj: PropTypes.shape({
    firebaseKey: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
  }).isRequired,
};

export default TeamCard;
