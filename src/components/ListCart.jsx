
import {useContext} from 'react'
import { CartContext } from '../context/cartContext'
import ItemCart from './ItemCart'
import pago from '../img/logo-pago.png'
const ListCart = () => {
  const [cart, setCart,price, setPrice,can, setCantidad] = useContext(CartContext)
  //Vaciar El carrito  
  const emptyCart = ()=>{
    const pagado = document.querySelector('.pagado');
    const agradecer = document.querySelector('.agradecer')

    const logo = document.createElement('IMG');
    const gracias = document.createElement('p');
    gracias.textContent = 'Gracias Por Su Compra!!!'
    logo.setAttribute('src', pago)
    logo.setAttribute('alt', 'Imagen_pago')
    logo.classList.add('mx-auto')
    pagado.innerHTML = ''
    pagado.appendChild(logo)
    agradecer.appendChild(gracias)
      setTimeout(()=>{
          
          setCart([])
          setCantidad(0)
          pagado.removeChild(logo)
          agradecer.removeChild(gracias)

      },3000)

  }
  
  
  return(
    <>
      {cart.length>=1?(
       <div>
        <h1 className='text-center my-3 font-extrabold text-2xl'>Lista de Pedidos</h1>
        <table className='w-full md:w-3/4 mx-auto '>
          <thead>
             <tr >
               <th>producto</th>
               <th>Precio</th>
               <th>Nombre</th>
               <th>Cantidad</th>
               <th></th>
             </tr>
          </thead>
          <tbody>
              
              {cart.map(product =>(
                 <ItemCart key={product.id} product={product}></ItemCart>
              ))}
          </tbody>
        </table>
        <div className='w-full md:w-3/4 mx-auto  text-center p-2 font-extrabold text-2xl agradecer'>
          <h2>Total: ${price}</h2>
        </div>
        <div className='w-full md:w-3/4 mx-auto bg-green-500 hover:bg-green-600 cursor-pointer text-white text-center p-2 font-extrabold text-2xl pagado'><h2 onClick={emptyCart}>Pagar</h2></div>
       </div>
      ):(
        <>
          <div className='parrafo'>

            <h1 className='text-center mt-40 font-extrabold text-2xl'>Aun No Tienes Pedidos</h1>
          </div>
        </>
      )}
   
    </>
  )


}

export default ListCart