import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

import { getGifs } from "../../src/helpers/getGifs";
jest.mock("../../src/helpers/getGifs");

describe('useFetchGifs', ()=> {
    
    const category = 'One Punch';

    test('debe regrear un estado inicial', ()=> {
        const { result } = renderHook(() => useFetchGifs(category));
        console.log(result);
        const objExpected = { images: [], isLoading: true };
        expect(result.current).toEqual(objExpected);
    });

    test('debe retornar un arreglo de images y isloading en false con mock', async()=> {
        
        getGifs.mockReturnValue([{}]);
        const { result } = renderHook(() => useFetchGifs(category));

        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0),
            {
                timeout: 1000
            }
        );
        const { images,  isLoading } = result.current;
        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
        
    });

});