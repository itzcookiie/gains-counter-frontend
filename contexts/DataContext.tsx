import { createContext, useEffect, useState } from 'react';

import { getMeals } from '../lib/api';

interface Props {
    id: number;
}

export const DataContext = createContext({});

export const DataComponent = (props) => {
    const [meals, setMeals] = useState({});
    const userMeals = getMeals(props.id);
    useEffect(() => {
        setMeals(userMeals);
    }, [userMeals]);


    return (
        <DataContext.Provider value={meals}>
            {props.children}
        </DataContext.Provider>
    )
}
