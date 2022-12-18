import { createContext, useContext, useState, useEffect } from "react";

import { userSession } from '@lib/sessionStorage';


export const UserIdContext = createContext([null, (arg) => {}]);

export const UserIdProvider = (props) => {
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    const storedUserId = userSession.getUser();
    if (storedUserId && !Number.isInteger(userId)) {
      setUserId(storedUserId)
    };
    
  }, [userId]);

    return (
        <UserIdContext.Provider value={[userId, setUserId]}>
            {props.children}
        </UserIdContext.Provider>
    )
}

export function useUserIdContext() {
    return useContext(UserIdContext);
} 