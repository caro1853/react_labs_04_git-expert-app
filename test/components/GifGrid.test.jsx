import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
jest.mock("../../src/hooks/useFetchGifs");

describe('GifGrid', ()=> {
    const category = 'One Punch'; 
    test('Debe mostrar el loading incialmente', ()=> {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category = { category }></GifGrid>);
        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(screen.getByRole('heading', {level: 2}).innerHTML).toBe('Cargando...');
    });

    test('debe mostrar items cuando se cargan las imágenes con useFetchGifs', ()=>{
        const imgs = [
            {
                id: '1',
                title: 'Un',
                url: 'src'
            },
            {
                id: '2',
                title: 'dos',
                url: 'src'
            }
        ]
        useFetchGifs.mockReturnValue({
            images: imgs,
            isLoading: false
        });
        render(<GifGrid category = { category }></GifGrid>);
        expect( screen.getAllByRole('img').length ).toBe(2);
    });

});