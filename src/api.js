import axios from 'axios';

const baseURL = 'http://localhost:10000'; // Define tu URL base aquí

const api = axios.create({
  baseURL: baseURL,
  // Puedes agregar más opciones de configuración de Axios aquí si es necesario
});

export default api;