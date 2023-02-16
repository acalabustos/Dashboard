import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import '../Style/Create.css'

function Form() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [condition, setCondition] = useState('');
  const [price, setPrice] = useState('');

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
    console.log('Estado:', condition);
    console.log('Precio:', price);
  };

  return (
    <form onSubmit={handleSubmit}>
       <Form onSubmit={handleSubmit}>

      <fieldset disabled>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Titulo:</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="Disabled input" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Descripción:</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="Disabled input" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Categoria:</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="Disabled input" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Marca:</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="Disabled input" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Estado:</Form.Label>
          <Form.Select id="disabledSelect">
            <option>Nuevo</option>
            <option>Casi nuevo</option>
            <option>Estropeado</option>
            <option>Nuevo</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Precio:</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="Disabled input" />
        </Form.Group>

        <Button type="submit">Submit</Button>
      </fieldset>
    </Form>
      <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
        Block level button
      </Button>
    </div>
    </form>

    )
}

export default Form;
