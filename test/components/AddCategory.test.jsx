import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components";

describe('AddCategory', ()=> {

    const valueInput = 'Saitama';

    test('debe de cambiar el valor de la caja de texto', ()=> {
        render(<AddCategory addNewCategory= { ()=> {} }></AddCategory>);
        
        const input = screen.getByRole('textbox');
        
        fireEvent.input( input, { target: { value: 'Saitama' } } );
        expect( input.value ).toBe('Saitama');
    });

    test('Simular onSubmitFormulario con un valor', ()=>{
        const onNewCategory = jest.fn();
        render(<AddCategory addNewCategory=  { onNewCategory }></AddCategory>);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form', {name: /add category/i});
        fireEvent.input( input , { target: { value: valueInput } });
        expect( input.value ).toBe(valueInput);
        fireEvent.submit( form );
        expect( input.value ).toBe('');
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( valueInput );
        screen.debug();
    });

    test('Simular onSubmitFormulario sin valor', ()=>{
        const onNewCategory = jest.fn();
        render(<AddCategory addNewCategory=  { onNewCategory }></AddCategory>);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form', {name: /add category/i});

        expect( input.value ).toBe('');
        fireEvent.submit( form );
        expect( input.value ).toBe('');
        //expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();
        screen.debug();
    });
});