interface ProductDetailsProps{
    product:{
        id: number;
        title:string;
        price:number;
        category:string;
    };
}

function ProductCard({ product }:ProductDetailsProps){
    return(
        <>
            <div className="bg-white border border-gray-200 rounded-lg p-5 flex flex-col justify-between h-full">
                
                <div>
                    <span>{product.category}</span>
                    <h3>{product.title}</h3>
                    <p>{product.price}</p>
                    <button onClick={()=>console.log(`Added ${product.title} to cart`)}>Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default ProductCard