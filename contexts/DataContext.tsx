import { createContext, useEffect, useState } from 'react';

import { getMeals } from '../lib/api';

interface Props {
    id: number;
}

const DataContext = createContext([]);

const DataComponent = (props) => {
    const [meals, setMeals] = useState([]);
    const userMeals = getMeals(props.id);
    setMeals(userMeals.data);

    return (
        <DataContext.Provider value={meals}>
            {props.children}
        </DataContext.Provider>
    )
}