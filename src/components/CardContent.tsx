interface Product{
    id:number;
    title:string;
    price:number;
    category:string;
}

interface CartItem extends Product{
    quantity: number;
}

interface CartContextType{
    cart: CartItem[];
    addToCart : (product:Product) => void;
    decreaseQuantity: (id:number)=> void;
    removeFromCart: (id: number)=> void;
    clearCart: () => void;
    totalItems: number;
    totalPrice: number;
}