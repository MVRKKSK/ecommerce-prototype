import React, { useState, useRef, useEffect } from "react"
import './App.css';
import axios from "axios"
function App() {


  const [products, setProducts] = useState([]);
  const [search , setSearch] = useState("");

  useEffect(() => {
    const ShowData = async () => {
      try {
        const res = await axios.get("/products");
        const result = res.data.filter(product => product.gradingtype === "green ply" || product.gradingtype === "red ply");
        setProducts(result);
        setProducts(res.data);
      }
      catch (err) {

      }
    }
    ShowData();
  }, [])

  const implementSearch = products.filter(product => { return product.name.toLowerCase().includes(search.toLowerCase()) })



  return (
    <div className="Main-content">
    <input className="mt-6 mb-6" type="text" placeholder="search" onChange={e => setSearch(e.target.value)} />
    {implementSearch.map((product, index) => (
      <div key={index}>
        <div className="mb-6 max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{product.name}</div>
            <p className="text-gray-700 text-base">
              {product.description}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{product.gradingtype}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{product.thickness}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{product.price}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{product.rating}</span>
          </div>
        </div>
      </div>
    ))}

    </div>
  );
}

export default App;
