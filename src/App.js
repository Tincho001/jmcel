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
//*muestra paginado de a 50 productos
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [items, setItems] = useState([]);
//   const [page, setPage] = useState(1);
//   const perPage = 50;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/items', {
//           params: {
//             offset: (page - 1) * perPage,
//             limit: perPage,
//             idListaPrecio: 27331,
//             idRubro: 115155 // ID del rubro específico
//           }
//         });
//         setItems(response.data.results);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, [page]); 

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


//*stock muestra
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [items, setItems] = useState([]);
//   const [page, setPage] = useState(1);
//   const perPage = 50; // Cambiar esto a 100 para mostrar 100 productos por página

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/items', {
//           params: {
//             offset: (page - 1) * perPage,
//             limit: perPage,
//             idListaPrecio: 27331,
//             idRubro: 115155 // ID del rubro específico
//           }
//         });
//         setItems(response.data.results);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, [page]); 

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
//         {Array.isArray(items) && items.map(item => (
//           <li key={item.cod_item}>
//             {item.item} - Stock: {item.stock && item.stock.length > 0 ? item.stock[0].ctd_disponible : 'No disponible'}
//           </li>
//         ))}
//       </ul>
//       <button onClick={handlePrevPage} disabled={page === 1}>Anterior</button>
//       <button onClick={handleNextPage}>Siguiente</button>
//     </div>

//   );
// }

// export default App;

//*con stock andando
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [items, setItems] = useState([]);
//   const [page, setPage] = useState(1);
//   const perPage = 50; // Cambiar esto a 100 para mostrar 100 productos por página

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/items', {
//           params: {
//             offset: (page - 1) * perPage,
//             limit: perPage,
//             idListaPrecio: 27331,
//             idRubro: 115155 // ID del rubro específico
//           }
//         });
//         console.log('Response:', response.data); // Log de la respuesta
//         setItems(response.data.results);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, [page]); 

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
//         {Array.isArray(items) && items.map(item => {
//           console.log('Item:', item); // Log de cada item
//           const stockAvailable = item.stock && item.stock.length > 0 ? parseInt(item.stock[0].ctd_disponible) : 0;
//           console.log('Stock Available:', stockAvailable); // Log del stock disponible
//           return (
//             <li key={item.cod_item}>
//               {item.item} - 
//               {stockAvailable <= 0 ? (
//                 <span style={{ color: 'red' }}>SIN STOCK</span>
//               ) : (
//                 <span style={{ color: 'green' }}>HAY STOCK</span>
//               )}
//             </li>
//           );
//         })}
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        let allItems = [];
        let offset = 0;
        const limit = 50; // Máximo de resultados por solicitud

        // Realizar múltiples solicitudes hasta que se recuperen todos los resultados
        while (true) {
          const response = await axios.get('http://localhost:3000/api/items', {
            params: {
              offset: offset,
              limit: limit,
              idListaPrecio: 27331,
              idRubro: 115155 // ID del rubro específico
            }
          });
          const results = response.data.results;
          allItems = [...allItems, ...results];
          if (results.length < limit) {
            // Si la última solicitud no alcanza el límite, se recuperaron todos los resultados
            break;
          }
          offset += limit;
        }

        setItems(allItems);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <div>
      <h1>Lista de Items</h1>
      <ul>
        {items.map(item => (
          <li key={item.cod_item}>
            {item.item} - 
            {item.stock && item.stock.length > 0 ? (
              <span style={{ color: item.stock[0].ctd_disponible <= 0 ? 'red' : 'green' }}>
                {item.stock[0].ctd_disponible <= 0 ? 'SIN STOCK' : 'HAY STOCK'}
              </span>
            ) : (
              <span style={{ color: 'red' }}>SIN STOCK</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
