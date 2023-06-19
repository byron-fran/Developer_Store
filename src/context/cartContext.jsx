import {useState, createContext } from "react";

const CartContext = createContext()

const CartProvider = ({children})=>{
    const [cart, setCart]  =useState([]);
    const [price, setPrice] = useState(0);
    const [cantidad, setCantidad] = useState(0)

    return(
        <CartContext.Provider value={[cart, setCart, price, setPrice,cantidad, setCantidad]}>
            {children}
        </CartContext.Provider>
    )
}



export {
    CartContext,
    CartProvider
}
