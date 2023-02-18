import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function FormUpload() {
  const [previewImage, setPreviewImage] = useState(null);
  const [title, setTitle] = useState('');

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
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.prevetDefault();
  }


  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Imagen:</Form.Label>
        <Form.Control
          type="file"
          accept="image/*"
          onChange={(e) => handleImageChange(e)}
        />
        {previewImage && (
          <img src={previewImage} alt="Vista previa de la imagen" />
        )}
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label htmlFor="textInput">Title:</Form.Label>
        <Form.Control id="textInput" placeholder="Add title" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="textInput">Description:</Form.Label>
        <Form.Control id="textInput" placeholder="Add description" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="textInput">Category:</Form.Label>
        <Form.Control id="textInput" placeholder="Add category" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="textInput">Brand:</Form.Label>
        <Form.Control id="textInput" placeholder="Add brand" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="select">Condition:</Form.Label>
        <Form.Select id="select">
        <option></option>
          <option>New</option>
          <option>Nearly new</option>
          <option>Good</option>
          <option>Satisfactory</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="numberInput">Price:</Form.Label>
        <Form.Control id="numberInput" placeholder="Add price" />
      </Form.Group>


      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default FormUpload;