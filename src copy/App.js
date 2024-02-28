// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     const fetchItems = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/items');
//         setItems(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchItems();
//   }, []);

//   return (
//     <div className="App">
//       <h1>Items</h1>
//       <ul>
//         {items.map(item => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import ItemsList from '../itemList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My React App</h1>
      </header>
      <main>
       <ItemsList/>
      </main>
    </div>
  );
}

export default App;
