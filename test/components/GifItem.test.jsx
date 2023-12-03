import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe('GifItem', ()=> {
    const title = 'Dragon';
    const url = 'https://';
    
    test('Snapshot', ()=> {
        const { container } = render(<GifItem title={title} url={url}></GifItem>);
        expect( container ).toMatchSnapshot();
    });

    test('mostrar la imagen con el URL y ALT correcto', ()=> {
        render(<GifItem title={title} url={url}></GifItem>);
        //screen.debug();

        //console.log( screen.);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
        expect( screen.getByText(`${title}`) ).toBeTruthy()
    });
})