import { useState } from 'react';
import { useSession, signIn, signOut } from "next-auth/react";

import HomeLogin from '../components/HomeLogin/index';
import HomeNormal from '../components/HomeNormal/index';

function Home() {
  const { data: session } = useSession();

  return (
    <main>
      {session?.user?.email
          ? <HomeNormal />
          : <HomeLogin />}
    </main>
  )
}

export default Home
