import React from 'react';
import Navbar from './Navbar';

import React, { useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');

  // ... aquí se agregan los métodos para cargar los datos y realizar la búsqueda ...
}

function handleInputChange(event) {
  setQuery(event.target.value);
}
