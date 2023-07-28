/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getTeams } from '../api/teamData';
import { useAuth } from '../utils/context/authContext';
import TeamCard from '../components/TeamCard';

export default function Home() {
  const [team, setTeam] = useState([]);

  const { user } = useAuth();

  const getAllTheTeams = () => {
    getTeams(user.uid).then(setTeam);
  };

  useEffect(() => {
    getAllTheTeams();
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/team/new" passHref>
        <Button>Add A Player</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {/* TODO: map over books here using BookCard component */}
        {team.map((items) => (
          <TeamCard key={items.firebaseKey} teamObj={items} onUpdate={getAllTheTeams} />
        ))}
      </div>
    </div>
  );
}
