interface ProductDetailsProps{
    name:string;
    description:string;
    price:number;
    unit:number;
}

function ProductDetails({name, description, price, unit}:ProductDetailsProps){
    return(
        <>
            <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-12 max-sm:gap-8 border-5 p-3 m-2 w-125">
                <h3 className="text-lg sm:text-xl text-gray-900 dark:bg-gray-400">{name}</h3>
                {unit<5 && unit>0?
                    <span className="bg-orange-200 text-xs px-2 py-1 rounded">Limited Quantity</span>
                :null}

                {unit===0?
                    <span className="bg-red-200 text-xs px-2 py-1 rounded ">Out Of Stock</span>
                :null}

                {price>500?
                    <span className="bg-green-200 text-xs px-2 py-1 rounded">Premium</span>
                :null}
                <br/>
                <p className="text-sm mt-1 text-gray-500">{description}</p>
                <h4>Rs. {price}</h4>
                <h5>Units left: {unit}</h5>
            </div>
        </>
    )
}

export default ProductDetails