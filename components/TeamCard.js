import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deletePlayer } from '../api/teamData';

function TeamCard({ teamObj, onUpdate }) {
  const deleteThisPlayer = () => {
    if (window.confirm(`Delete ${teamObj.name}?`)) {
      deletePlayer(teamObj.firebaseKey).then(() => onUpdate());
    }
  };
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={teamObj.image} alt={teamObj.name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{teamObj.name}</Card.Title>
        <p>{teamObj.role}</p>
        <Button variant="primary" className="m-2">VIEW</Button>
        <Link href={`/team/edit/${teamObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisPlayer} className="m-2">DELETE</Button>
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
  onUpdate: PropTypes.func.isRequired,
};

export default TeamCard;
