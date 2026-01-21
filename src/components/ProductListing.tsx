import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

interface Product{
        id: number;
        title:string;
        price:number;
        category:string;
    };

function ProductListing(){
  const [Products, setProducts] = useState([]);
  const [Categories, setCategories] = useState([]);
  //const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchQuery,setSearchQuery] = useState<string>("");
  const [selectedCategory,setSelectedCategory] = useState<string>("All");

  useEffect(()=>{
    fetch("https://dummyjson.com/products/category-list")
    .then((res)=>res.json())
    .then((data)=>setCategories(data))
    .catch((err)=>console.error("Error"));
  },[]);

  useEffect(()=>{
    fetchData();
  },[searchQuery,selectedCategory]);

  const fetchData = async () =>{
    setLoading(true);
    setError(null);

    try{
      let url = "https://dummyjson.com/products"

      if(searchQuery.trim().length > 0){
        url = `https://dummyjson.com/products/search?q=${searchQuery}`;
      }else if(selectedCategory !== "All"){
        url = `https://dummyjson.com/products/category/${selectedCategory}`;
      }

      const response = await fetch(url);

      if(!response.ok){
        throw new Error("HTTP Error")
      }

      const json = await response.json();

      if(json.products){
        setProducts(json.products)
      }else{
        setProducts([]);
      }
    }catch(err:any){
      console.error("Fetch error");
    }finally{
      setLoading(false);
    }
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>)=>{
    setSelectedCategory(e.target.value);
    setSearchQuery("");
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setSearchQuery(e.target.value);
    if(e.target.value !== "")setSelectedCategory("All");
  };

  if(error){
    return(
      <div>Error:{error}</div>
    )
  }

  return (
    <div>
      <h1>Product Catalog</h1>

      <div>
        <input type="text" placeholder="Search Products" value={searchQuery} onChange={handleSearchChange}/>
        <select name="" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">All Categories</option>
          {Categories.map((cat)=>(
            <option value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {loading?(
        <div>
          <p>Loading data...</p>
        </div>
      ):(
        <>
          {Products.length === 0 ? (
            <div>
              <p>No products found</p>
            </div>
          ):(
            <div>
              {Products.map((item)=>(
                <ProductCard product={item}/>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}


export default ProductListing;