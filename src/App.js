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

//*ordenado por categoria y productos alfabeticamente SIRVE
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [items, setItems] = useState([]);
//   const [page, setPage] = useState(1);
//   const perPage = 50; // Cambiar esto a 100 si quieres mostrar 100 productos por página

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
//   }, [page]); // Se ejecuta cuando cambia la página

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
//         {items.map(item => {
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
//       <div>
//         <button onClick={handlePrevPage} disabled={page === 1}>Anterior</button>
//         <button onClick={handleNextPage}>Siguiente</button>
//       </div>
//     </div>
//   );
// }

// export default App;



//*CON PRECIOS
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [items, setItems] = useState([]);
//   const [page, setPage] = useState(1);
//   const perPage = 50; // Cambiar esto a 100 si quieres mostrar 100 productos por página

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
//   }, [page]); // Se ejecuta cuando cambia la página

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
//         {items.map(item => {
//           console.log('Item:', item); // Log de cada item
//           const stockAvailable = item.stock && item.stock.length > 0 ? parseInt(item.stock[0].ctd_disponible) : 0;
//           console.log('Stock Available:', stockAvailable); // Log del stock disponible
//           const price = item.precios && item.precios.length > 0 ? parseFloat(item.precios[0].precio) : 0;
//           console.log('Price:', price); // Log del precio
//           return (
//             <li key={item.cod_item}>
//               {item.item} - 
//               {stockAvailable <= 0 ? (
//                 <span style={{ color: 'red' }}>SIN STOCK</span>
//               ) : (
//                 <span style={{ color: 'green' }}>HAY STOCK</span>
//               )} -
//               ${price.toFixed(2)} {/* Mostrar precio con 2 decimales */}
//             </li>
//           );
//         })}
//       </ul>
//       <div>
//         <button onClick={handlePrevPage} disabled={page === 1}>Anterior</button>
//         <button onClick={handleNextPage}>Siguiente</button>
//       </div>
//     </div>
//   );
// }

// export default App;

//*PAGINACION CON NUMEROS
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [items, setItems] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const perPage = 50; // Cambiar esto a 100 si quieres mostrar 100 productos por página

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
//         setTotalPages(Math.ceil(response.data.paging.total / perPage)); // Calcular el total de páginas
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, [page]); // Se ejecuta cuando cambia la página

//   const handlePageChange = (pageNumber) => {
//     setPage(pageNumber);
//   };

//   const pageNumbers = [];
//   for (let i = 1; i <= totalPages; i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <div>
//       <h1>Lista de Items</h1>
//       <ul>
//         {items.map(item => {
//           console.log('Item:', item); // Log de cada item
//           const stockAvailable = item.stock && item.stock.length > 0 ? parseInt(item.stock[0].ctd_disponible) : 0;
//           console.log('Stock Available:', stockAvailable); // Log del stock disponible
//           const price = item.precios && item.precios.length > 0 ? parseFloat(item.precios[0].precio) : 0;
//           console.log('Price:', price); // Log del precio
//           return (
//             <li key={item.cod_item}>
//               {item.item} - 
//               {stockAvailable <= 0 ? (
//                 <span style={{ color: 'red' }}>SIN STOCK</span>
//               ) : (
//                 <span style={{ color: 'green' }}>HAY STOCK</span>
//               )} -
//               ${price.toFixed(2)} {/* Mostrar precio con 2 decimales */}
//             </li>
//           );
//         })}
//       </ul>
//       <div>
//         {pageNumbers.map(number => (
//           <button key={number} onClick={() => handlePageChange(number)} disabled={number === page}>
//             {number}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

//*funciona paginacion
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const perPage = 50; // Cambiar esto a 100 si quieres mostrar 100 productos por página

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
        console.log('Response:', response.data); // Log de la respuesta
        setItems(response.data.results);
        setTotalPages(Math.ceil(response.data.paging.total / perPage)); // Calcular el total de páginas
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [page]); // Se ejecuta cuando cambia la página

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <h1>Lista de Items</h1>
      <ul>
        {items.map(item => {
          console.log('Item:', item); // Log de cada item
          const stockAvailable = item.stock && item.stock.length > 0 ? parseInt(item.stock[0].ctd_disponible) : 0;
          console.log('Stock Available:', stockAvailable); // Log del stock disponible
          const price = item.precios && item.precios.length > 0 ? parseFloat(item.precios[0].precio) : 0;
          console.log('Price:', price); // Log del precio
          const subrubro = item.sub_rubro && item.sub_rubro.nombre ? item.sub_rubro.nombre : 'N/A';
          console.log('Subrubro:', subrubro); // Log del subrubro
          return (
            <li key={item.cod_item}>
              {item.item} - 
              {stockAvailable <= 0 ? (
                <span style={{ color: 'red' }}>SIN STOCK</span>
              ) : (
                <span style={{ color: 'green' }}>HAY STOCK</span>
              )} -
              ${price.toFixed(2)} - 
              {subrubro}
            </li>
          );
        })}
      </ul>
      <div>
        {pageNumbers.map(number => (
          <button key={number} onClick={() => handlePageChange(number)} disabled={number === page}>
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
