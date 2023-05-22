import axios from 'axios';

const baseURL = 'http://serhsi-rh-env.eba-jqr5fnb9.us-east-1.elasticbeanstalk.com'; // Define tu URL base aquí

const api = axios.create({
  baseURL: baseURL,
  // Puedes agregar más opciones de configuración de Axios aquí si es necesario
});

export default api;