import React, { useState } from 'react';
import '../Style/Create.css'
function Form (){
    const [title, setTitle] = useState('');
    const [description, setDescription]= useState('');
    const [category, setCategory]= useState('');
    const [brand, setBrand]= useState('');
    const [condition, setCondition]= useState('');
    const [price, setPrice]= useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };
    const handleBrandChange = (event) => {
        setBrand(event.target.value);
    };
    const handleConditionChange = (event) => {
        setCondition(event.target.value);
    };
    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };
 
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Titulo:', title);
        console.log('Descripción:', description);
        console.log('Categoria:', category);
        console.log('Marca:', brand);
        console.log('Estado:', condition );
        console.log('Precio:', price);
    };

    return (
        <form onSubmit={handleSubmit}>
          <label>
            Titulo:
            <input type='text' value={title} onChange={handleTitleChange}/>
          </label>  
          <label>
            Descripción:
            <input type='text' value={description} onChange={handleDescriptionChange}/>
          </label>
          <label>
            Categoría:
            <input type='text' value={category} onChange={handleCategoryChange}/>
          </label>
          <label>
            Marca:
            <input type='text' value={brand} onChange={handleBrandChange}/>
          </label>
          <label>
            Estado:
            <input type='text' value={condition} onChange={handleConditionChange}/>
          </label>
          <label>
            Precio
            <input type='text' value={price} onChange={handlePriceChange}/>
          </label>
        </form>
    )
}
 export default Form;