import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = (props) => {

    const [inputValue, setinputValue] = useState('');

    const onInputChange = (event)=> {
        setinputValue(event.target.value );
    }

    const onSubmit = (event)=> {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;
        console.log(inputValue);
        props.addNewCategory(inputValue);
        setinputValue('');
    }

    return (
        <form onSubmit={ onSubmit } aria-label="add category">
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            >
            </input>
        </form>
    );
}

AddCategory.propTypes = {
    addNewCategory: PropTypes.func.isRequired
}