
//*si funcion ok 
// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');

// const app = express();
// const PORT = 3000;

// app.use(cors());

// // Función para realizar la solicitud a la API con manejo de errores y espera
// async function fetchData() {
//   try {
//     const response = await axios.get('https://erp.duxsoftware.com.ar/WSERP/rest/services/items', {
//     timeout: 10000,
//       headers: {
//         accept: 'application/json',
//         authorization: 'mZ3CSCVZYN8KEI5FfcAw2kCiYoPW8ra5OJoX8Bx8k5iKYyRTg2MLpc6ZuHU1wNoo'
//       },
//       params: {
    
//         offset: 500,
//         limit: 20,
//         idListaPrecio: 27331
//       }
//     });
//     return response.data;
//   } catch (error) {
//     if (error.response && error.response.status === 429) {
//       // Si el error es "Demasiadas solicitudes", esperar 5 segundos y volver a intentarlo
//       console.log('Demasiadas solicitudes. Esperando...');
//       await new Promise(resolve => setTimeout(resolve, 5000)); // Esperar 5 segundos
//       return fetchData(); // Volver a intentar la solicitud
//     } else {
//       // Otro tipo de error, lanzar una excepción
//       throw error;
//     }
//   }
// }

// // Ruta para proxy
// app.get('/api/items', async (req, res) => {
//   try {
//     const data = await fetchData();
//     res.json(data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Something went wrong' });
//   }
// });

// // Iniciar el servidor
// app.listen(PORT, () => {
//   console.log(`Servidor proxy escuchando en el puerto ${PORT}`);
// });

//*pagincion ok
// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');

// const app = express();
// const PORT = 3000;

// app.use(cors());

// // Función para realizar la solicitud a la API con manejo de errores y espera
// async function fetchData(offset = 0, limit = 20) {
//   try {
//     const response = await axios.get('https://erp.duxsoftware.com.ar/WSERP/rest/services/items', {
//       timeout: 10000,
//       headers: {
//         accept: 'application/json',
//         authorization: 'mZ3CSCVZYN8KEI5FfcAw2kCiYoPW8ra5OJoX8Bx8k5iKYyRTg2MLpc6ZuHU1wNoo'
//       },
//       params: {
//         offset: offset,
//         limit: limit,
//         idListaPrecio: 27331
//       }
//     });
//     return response.data;
//   } catch (error) {
//     if (error.response && error.response.status === 429) {
//       // Si el error es "Demasiadas solicitudes", esperar 5 segundos y volver a intentarlo
//       console.log('Demasiadas solicitudes. Esperando...');
//       await new Promise(resolve => setTimeout(resolve, 5000)); // Esperar 5 segundos
//       return fetchData(offset, limit); // Volver a intentar la solicitud
//     } else {
//       // Otro tipo de error, lanzar una excepción
//       throw error;
//     }
//   }
// }

// // Ruta para proxy con paginación
// app.get('/api/items', async (req, res) => {
//   try {
//     const offset = parseInt(req.query.offset) || 0;
//     const limit = parseInt(req.query.limit) || 20;
//     const data = await fetchData(offset, limit);
//     res.json(data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Something went wrong' });
//   }
// });

// // Iniciar el servidor
// app.listen(PORT, () => {
//   console.log(`Servidor proxy escuchando en el puerto ${PORT}`);
// });


//*para rubro modulos
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

async function fetchData(offset = 0, limit = 20, idRubro = null) {
  try {
    const response = await axios.get('https://erp.duxsoftware.com.ar/WSERP/rest/services/items', {
      timeout: 10000,
      headers: {
        accept: 'application/json',
        authorization: 'mZ3CSCVZYN8KEI5FfcAw2kCiYoPW8ra5OJoX8Bx8k5iKYyRTg2MLpc6ZuHU1wNoo'
      },
      params: {
        offset: offset,
        limit: limit,
        idListaPrecio: 27331,
        idRubro: idRubro
      }
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 429) {
      console.log('Demasiadas solicitudes. Esperando...');
      await new Promise(resolve => setTimeout(resolve, 5000));
      return fetchData(offset, limit, idRubro);
    } else {
      throw error;
    }
  }
}

app.get('/api/items', async (req, res) => {
  try {
    const offset = parseInt(req.query.offset) || 0;
    const limit = parseInt(req.query.limit) || 20;
    const idRubro = parseInt(req.query.idRubro) || null;
    const data = await fetchData(offset, limit, idRubro);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor proxy escuchando en el puerto ${PORT}`);
});
