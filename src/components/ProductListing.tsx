import { useEffect, useState } from "react";

function ProductListing(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");

        // Check if the response is OK (status 200–299)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); // Parse JSON
        console.log("Fetched Data:", data.products); // Log to console
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the async function
  }, []);

    return(
        <>
                <h1>Product List</h1>
                        <p>Title</p>
                        <p>Description</p>
                        <p>Category</p>
                        <p>Price</p>
        </>
    )
}

export default ProductListing;