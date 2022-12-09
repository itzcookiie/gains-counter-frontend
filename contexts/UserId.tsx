import { createContext, useContext, useState } from "react";

export const UserIdContext = createContext([null, (arg) => {}]);

export const UserIdProvider = (props) => {
  const [userId, setUserId] = useState(null);

    return (
        <UserIdContext.Provider value={[userId, setUserId]}>
            {props.children}
        </UserIdContext.Provider>
    )
}

export function useUserIdContext() {
    const [userId, setUserId] = useContext(UserIdContext);
    return [userId, setUserId];
} 