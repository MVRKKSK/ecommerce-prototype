import React, { useState, useRef, useEffect } from "react"
import './App.css';
import axios from "axios"
function App() {


  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [dummy , setDummy] = useState([])

  useEffect(() => {
    const ShowData = async () => {
      try {
        const res = await axios.get("/products");
        const result = res.data.filter(product => product.gradingtype === "green ply" || product.gradingtype === "red ply");
        setProducts(result);
        setProducts(res.data);
        setDummy(res.data);
      }
      catch (err) {

      }
    }
    ShowData();
  }, [])
  /* const implementSearch = products.filter(product => { return product.name.toLowerCase().includes(search.toLowerCase()) }) */

 /*  const filterdata = products.filter(item => {
    Object.values(item).some(index => {
      return item[index].toString().toLowerCase().includes(search);
    });
  }) */

  const handleChange = value => {
    setSearch(value);
    filterData(value);
  };

  const notincluded = ["description"]

  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setProducts(dummy);
    else {
      const filteredData = products.filter(item => {
        return Object.keys(item).some(key =>
          notincluded.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setProducts(filteredData);
    }
  }

  return (
    <div className="Main-content">
      <input className="mt-6 mb-6 " type="text" placeholder="search" value={search}
        onChange={e => handleChange(e.target.value)} />
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className=" grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div className="rounded overflow-hidden shadow-lg">
                <a key={product.id} href="" className="group">
                  <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={product.image}
                      alt={product.image}
                      className="w-full h-full object-center object-cover group-hover:opacity-75"
                    />
                  </div>
                  <p className="p-2 mt-1 text-lg font-medium text-gray-900">{product.name}</p>
                  <h3 className="p-2 mt-4 text-sm text-gray-700">{product.description}</h3>
                  <p className="p-2 mt-1 text-lg font-medium text-gray-900">{product.gradingtype}</p>
                  <p className="p-2 mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div >
  );
}

export default App;
