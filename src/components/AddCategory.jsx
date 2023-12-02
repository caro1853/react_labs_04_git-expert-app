import { useState } from "react";

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
        <form onSubmit={ onSubmit }>
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