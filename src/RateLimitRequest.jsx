import React, { useEffect } from 'react';
import axios from 'axios';

function RateLimitedRequest() {
  // Función para realizar la solicitud a la API respetando el Rate Limit
  async function makeRequestWithRateLimit() {
    try {
      // Realizar la solicitud a la API
      const response = await axios.get('https://erp.duxsoftware.com.ar/WSERP/rest/services/items?offset=10&limit=10&idListaPrecio=27331', {
        headers: {
          accept: 'application/json',
          authorization: 'mZ3CSCVZYN8KEI5FfcAw2kCiYoPW8ra5OJoX8Bx8k5iKYyRTg2MLpc6ZuHU1wNoo'
        }
      });

      // Manejar la respuesta de la API
      console.log(response.data);

    } catch (error) {
      // Manejar errores de la solicitud
      console.error(error);
    }
  }

  // Función para ejecutar la solicitud con un intervalo de tiempo respetando el Rate Limit
  async function executeWithRateLimit() {
    // Ejecutar indefinidamente
    while (true) {
      // Realizar la solicitud respetando el Rate Limit
      await makeRequestWithRateLimit();

      // Esperar 8 segundos antes de realizar la próxima solicitud
      await new Promise(resolve => setTimeout(resolve, 8000));
    }
  }

  // UseEffect para ejecutar la solicitud al montar el componente
  useEffect(() => {
    executeWithRateLimit();

    // Limpieza al desmontar el componente (no es necesario en este caso)
    return () => {};
  }, []);

  // No necesitas retornar nada en el componente
  return null;
}

export default RateLimitedRequest;
