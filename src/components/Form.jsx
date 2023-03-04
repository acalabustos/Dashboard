import React, { useState } from 'react';
import { productsHandler } from '../handlers/productsHandler';
import { Form, Button } from 'react-bootstrap';
import "../Style/Form.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function FormUpload() {
  const [previewImage, setPreviewImage] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [condition, setCondition] = useState('');
  const [price, setPrice] = useState('');

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    const imageReader = new FileReader();

    imageReader.onload = () => {
      setPreviewImage(imageReader.result);
    };

    if (selectedImage) {
      imageReader.readAsDataURL(selectedImage);
    }
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
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
    let newProduct = {name, description, category, brand, condition, price};
    console.log("esto es el producto", newProduct);
  
        productsHandler.addProduct(newProduct);
  }


  return (
    
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <div className='centerText'><Form.Label>Upload Image:</Form.Label></div>
        <Form.Control 
          id="StyleControl"
          type="file"
          accept="image/*"
          onChange={(e) => handleImageChange(e)}
        />
        {previewImage && (
          <img src={previewImage} alt="View image" />
        )}
      </Form.Group>

      <Form.Group className='mb-3'>
        <div className='centerText'>
          <Form.Label 
            htmlFor="textInput">Product:
          </Form.Label>
        </div> 
        <Form.Label htmlFor="textInput">Nombre:</Form.Label>
        <Form.Control 
        id="textInput"  
        value={name} 
        onChange={handleNameChange} 
        placeholder="Add Product" />

      </Form.Group>

      <Form.Group className="mb-3">
       <div className='centerText'><Form.Label htmlFor="textInput">Description:</Form.Label></div>
        <Form.Control 
        id="textInput" 
        value={description} 
        onChange={handleDescriptionChange}
        placeholder="Add description" />
      </Form.Group>

      <Form.Group className="mb-3">
        <div className='centerText'><Form.Label id="StyleLabel" htmlFor="textInput">Category:</Form.Label></div>
        <Form.Control 
        id="textInput" 
        value={category} 
        onChange={handleCategoryChange}
        placeholder="Add category" />
      </Form.Group>

      <Form.Group className="mb-3">
        <div className='centerText'><Form.Label htmlFor="textInput">Brand:</Form.Label></div>
        <Form.Control 
        id="textInput" 
        value={brand} 
        onChange={handleBrandChange}
        placeholder="Add brand" />
      </Form.Group>

      <Form.Group className="mb-3">
        <div className='centerText'><Form.Label htmlFor="select">Condition:</Form.Label></div>
        <Form.Select 
        id="select"
        name= "condition"
        value={condition}
        onChange={handleConditionChange}>
        <option>Select option</option>
          <option value={"new"}>New</option>
          <option value={"nearly new"}>Nearly new</option>
          <option value={"good"}>Good</option>
          <option value={"satisfactory"}>Satisfactory</option>
        </Form.Select>
      </Form.Group> 

      <Form.Group className="mb-3">
        <div className='centerText'><Form.Label htmlFor="numberInput">Price:</Form.Label></div>
        <Form.Control 
        id="numberInput" 
        value={price}
        pattern="[0-9,.]*"
        onChange={handlePriceChange}
        placeholder="Add price" />
      </Form.Group>
      
      <Button variant="primary" type="submit" id="Send">  
        Send
      </Button>

    </Form>
  
  );
}

export default FormUpload;