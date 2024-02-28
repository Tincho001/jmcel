// //*FUNCIONA CORRIENDO EL SERVER Y CORRIENDO EN REACT

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/items');
//         setItems(response.data.results); // Actualizamos el estado con response.data.results
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []); // Este efecto se ejecuta solo una vez al montar el componente

//   return (
//     <div>
//       <h1>Lista de Items</h1>
//       <ul>
//         {items.map(item => (
//           <li key={item.cod_item}>{item.item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
//*ok para paginacion 
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [items, setItems] = useState([]);
//   const [page, setPage] = useState(1);
//   const perPage = 50; // Cambiar esto según tus necesidades

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/items', {
//           params: {
//             offset: (page - 1) * perPage,
//             limit: perPage,
//             idListaPrecio: 27331 // Cambiar esto según tus necesidades
//           }
//         });
//         setItems(response.data.results);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, [page]); // Este efecto se ejecuta cuando cambia la página

//   const handleNextPage = () => {
//     setPage(page + 1);
//   };

//   const handlePrevPage = () => {
//     setPage(page - 1);
//   };

//   return (
//     <div>
//       <h1>Lista de Items</h1>
//       <ul>
//         {items.map(item => (
//           <li key={item.cod_item}>{item.item}</li>
//         ))}
//       </ul>
//       <button onClick={handlePrevPage} disabled={page === 1}>Anterior</button>
//       <button onClick={handleNextPage}>Siguiente</button>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 50;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/items', {
          params: {
            offset: (page - 1) * perPage,
            limit: perPage,
            idListaPrecio: 27331,
            idRubro: 115155 // ID del rubro específico
          }
        });
        setItems(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [page]); 

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  return (
    <div>
      <h1>Lista de Items</h1>
      <ul>
        {items.map(item => (
          <li key={item.cod_item}>{item.item}</li>
        ))}
      </ul>
      <button onClick={handlePrevPage} disabled={page === 1}>Anterior</button>
      <button onClick={handleNextPage}>Siguiente</button>
    </div>
  );
}

export default App;
