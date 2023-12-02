import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
    
    const [categories, setCategories ] = useState(['One Punch']);
    
    
    const addCategory = (newCategory)=>{
        setCategories( cate => {
            const cant = cate.filter(p=> p == newCategory).length;
            
            if(cant <= 0 ){
                return [...cate, newCategory];
            }
            else{
                return cate;
            }
        }
         );
    }


    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory addNewCategory = { addCategory }></AddCategory>

            { categories.map(cat => {
                return <GifGrid key = { cat } category = { cat }></GifGrid>
            })}
                

        </>
    )
}