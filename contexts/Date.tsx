import { createContext, useContext, useState, useEffect } from "react";


export const DateContext = createContext(null);

export const DateContextProvider = (props) => {
  const [date, setDate] = useState(new Date());

    return (
        <DateContext.Provider value={[date, setDate]}>
            {props.children}
        </DateContext.Provider>
    )
}

export function useDateContext() {
    return useContext(DateContext);
} 