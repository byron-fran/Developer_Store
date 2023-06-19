import {NavLink} from 'react-router-dom'
import carrito from '../img/carritoClaro.png'
import { createContext, useContext } from 'react'
import { CartContext } from '../context/cartContext'

const Nav = () => {
  const [cart, setCart, price, setPrice,cantidad, setCantidad] = useContext(CartContext)
 
  
  return (

    <>
        <nav>
            <div className='bg-blue-600 py-2 text-white text-center font-extrabold text-2xl flex flex-col items-center gap-y-2 md:gap-y-0 md:flex-row md:justify-around'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/products'>Products</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/list-cart' className='flex '>
                  {cantidad>=1?<p>+{cantidad}</p>: ''}
                  <img className='w-8 mx-auto h-8' src={`${carrito}`} alt="imagen Carrito" />
                </NavLink>
            </div>
        </nav>
    </>
  )
}

export default Nav