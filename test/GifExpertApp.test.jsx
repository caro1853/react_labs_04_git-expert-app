import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";
//import { useState } from "react";
//jest.mock("react");

describe('GifExpertApp', ()=> {
    test('debe de agregar una categoria', () => {
        //useState.mockReturnValue({
        //    categories: ['One Punch'],
        //    setCategories: ()=>{}
        //});
        render(<GifExpertApp></GifExpertApp>);
        screen.debug();
    });
});