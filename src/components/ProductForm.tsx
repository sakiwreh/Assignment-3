import { useForm, type SubmitHandler } from "react-hook-form";

interface FormInputs{
    name:string;
    price:number;
    category:string;
    unit:number;
};

interface ProductFormProps{
    onAddProduct:(product:any) => void;
}

const ProductForm:
React.FC<ProductFormProps>=
({onAddProduct})=>{
    const{
        register,
        handleSubmit,
        reset,
        formState:{errors}
    }=useForm<FormInputs>();
    
    const onSubmit:
    SubmitHandler<FormInputs> = (data)=>{
        const newProduct = {
            id:Date.now(),
            name:data.name,
            description: `Category:${data.category}`,
            price: Number(data.price),
            unit: Number(data.unit),
            category:data.category
        };

        onAddProduct(newProduct);
        reset();
    };

    return(
        <div>
            <h2>Add New Product</h2>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input {...register("name",{required:"Name is required"})} 
                    placeholder="Product Name"/>
                    {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
                </div>

                <div>
                    <input type="number" {...register("price",{required:"Price is required",min:{value:0.01, message:"Price must be greater than 0"}})} 
                    placeholder="Price"/>
                    {errors.price && <span className="text-red-500 text-xs mt-1">{errors.price.message}</span>}
                </div>

                <div>
                    <select {...register("category")}>
                        <option value="Electronics">Electronics</option>
                        <option value="Fashion">Fashion</option>
                    </select>
                </div>

                <div>
                    <input type="number" {...register("unit",{required:true, min:0 })}
                    placeholder="Stock Quantity"/>
                </div>

                <button type="submit" className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors">
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default ProductForm;