import { useState, useEffect } from 'react';

import { useUserIdContext } from '@contexts/UserId';
import HomeLogin from '../components/HomeLogin/index';
import HomeNormal from '../components/HomeNormal/index';
import { userSession } from '@lib/sessionStorage';

function Home() {
  const [userId, setUserId] = useUserIdContext();

  useEffect(() => {
    const storedUserId = userSession.getUser();
    console.log(typeof storedUserId)
    if (storedUserId && !Number.isInteger(userId)) {
      setUserId(storedUserId)
    };
  }, [userId]);

  return (
    <main>
      {userId ? <HomeNormal /> : <HomeLogin />}
    </main>
  )
}

export default Home
