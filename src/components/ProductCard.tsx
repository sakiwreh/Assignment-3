interface ProductDetailsProps{
    title:string;
    description:string;
    price:number;
}

function ProductCard({title, description, price}:ProductDetailsProps){
    return(
        <>
            <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-12 max-sm:gap-8 border-5 p-3 m-2 w-125">
                <h3 className="text-lg sm:text-xl text-gray-900 dark:bg-gray-400">{title}</h3>
                                <p className="text-sm mt-1 text-gray-500">{description}</p>
                <h4>Rs. {price}</h4>
            </div>
        </>
    )
}

export default ProductCard