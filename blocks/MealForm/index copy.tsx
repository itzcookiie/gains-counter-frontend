import { useState, useEffect } from "react";

import styles from './form.module.scss';

enum QuantitativeData {
    CALORIES = 'calories',
    PROTEIN = 'protein',
}

const API_URL = '/api/meals/{id}';

export default function Form() {
    const [gains, setGains] = useState({
        calories: 0,
        protein: 0,
        mealType: '',
        mealName: ''
    })

    // useEffect(() =>undefined, [gains])
    // console.log(gains)

    const handleInput = e => {
        const { fieldName } = e.target.dataset;
        const value = Object.values(QuantitativeData).includes(fieldName) ? +e.target.value : e.target.value;
        setGains((prevState) => ({
            ...prevState,
            [fieldName]: value
        }))
    }

    const handleForm = async(e) => {
        e.preventDefault();
        const id = '1';
        const response = await fetch(API_URL.replace('{id}', id));
        const json = await response.json();
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleForm}>
                <section className={styles.form_section} >
                    <div className={styles.form_input}>
                        <label htmlFor="meal-name">Meal name: </label>
                        <input onInput={handleInput} required id="meal-name" name="meal-name" data-field-name="mealName" />
                    </div>
                    <div className={styles.form_input} >
                        <label htmlFor="calories">Calories: </label>
                        <input onInput={handleInput} required type="number" id="calories" name="calories" data-field-name="calories" />
                    </div>
                    <div className={styles.form_input} >
                        <label htmlFor="protein">Protein: </label>
                        <input onInput={handleInput} required type="number" id="protein" name="protein" data-field-name="protein" />
                    </div>
                    <div className={styles.form_radio_container}>
                        <div className={styles.form_radio}>
                            <label htmlFor="food">Food</label>
                            <input onInput={handleInput} required type="radio" id="food" name="meal-type" value="FOOD" data-field-name="mealType" />
                        </div>
                        <div className={styles.form_radio}>
                            <label htmlFor="drink">Drink</label>
                            <input onInput={handleInput} required type="radio" id="drink" name="meal-type" value="DRINK" data-field-name="mealType" />
                        </div>
                    </div>
                </section>
                <div className={styles.button_container}>
                  <button>Submit</button>
                </div>
            </form>
        </div>
    )
}