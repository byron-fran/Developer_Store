import React from 'react'
import {useContext} from 'react'
import { CartContext } from '../context/cartContext'
const ItemCart = ({product}) => {
    const [cart,setCart,price, setPrice, can, setCantidad] = useContext(CartContext)
    
    const {imagen, precio, nombre, cantidad, id} = product

   
    const deleteProdct = ()=>{
        const real =can-cantidad
        const newReal = can -real
       
       //Filtra todos los productos que no tengan el mismo id
        const newValue = cantidad*precio
        const newProducts =cart.filter(prduct => prduct.id!=id)  
        setPrice(price - newValue)
        setCart([...newProducts])
        setCantidad(can - newReal)

    }
 
 
  return (
    <>
           <tr className='text-center' >
            
              <td><img className='mx-auto md:w-60 md:h-64 ' src={`${imagen}`} alt="image-product" /></td>
              <td>{precio * cantidad}</td>
              <td>{nombre}</td>
              <td>{cantidad}</td>
              <td ><div className='bg-red-600 hover:bg-red-700 text-white p-1 rounded-lg cursor-pointer mx-auto'><p onClick={deleteProdct}>X</p></div></td>
            </tr>
    </>
  )
}

export default ItemCart