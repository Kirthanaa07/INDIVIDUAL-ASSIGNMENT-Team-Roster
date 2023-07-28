import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSinglePlayer } from '../../../api/teamData';
import TeamForm from '../../../components/form/TeamForm';

export default function EditBook() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;
  useEffect(() => {
    getSinglePlayer(firebaseKey).then(setEditItem);
  }, [firebaseKey]);
  return (<TeamForm obj={editItem} />);
}
