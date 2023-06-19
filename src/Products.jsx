
import Nav from "./components/Nav"
import { CartContext } from "./context/cartContext";
import { useState, useEffect, useContext } from "react";


const Products = () => {

  
  const [cart,setCart, price, setPrice,cantidad, setCantidad] = useContext(CartContext)  



 //Actualiza al cart

 useEffect(()=>{
  if(cart.length>=1){
    
    const total = cart.map(producto=>{
    
      return producto.precio * producto.cantidad
    })

    
    const priceReal = total.reduce((i, a)=>{
      return i+ a
    },0)
    const cantidad = cart.map(producto=>{
      return producto.cantidad
    })
    //calcular la cantidad de productos
    const sumaCantidad = cantidad.reduce((i,a)=>{
      return i+a
    },0)
    setCantidad(sumaCantidad)
    setPrice(priceReal )
  }
},[cart])

  
  const carrito = (e)=>{

    e.preventDefault();
    const id = e.target.getAttribute('id')
    //hacer traversing al dom
    const producto = e.target.parentElement
 
    //crear objeto de producto
    const imagen = producto.querySelector('.imagen').src
    
    //selecionar el card
    const Info_Div = producto.querySelector('.card')

    const precio = Number(Info_Div.children[0].innerHTML);
    const nombre = Info_Div.children[1].innerHTML;
    //Aumentar la cantidad
  
    const objProducto = {
        imagen,
        precio,
        nombre,
        id,
        cantidad: 1
        
    
    };

  //actualizar productos

   // updateProduct(objProducto)

  if(cart.some(product=> product.id === objProducto.id)){ //verificar si hay un ID duplicado
    const productos = cart.map(product=>{
      if(product.id === objProducto.id){
        product.cantidad ++
      
        return product
      }
      else{
        return product
      }
    })
    setCart([...productos])
  }
  else{
    setCart([...cart, objProducto])
    
  }
  

}


return (
    <>
      <div >
        <h2 className='text-center my-10 font-bold text-5xl'>Productos</h2>
        <div className='md:container mx-auto grid md:grid-cols-2 lg:grid-cols-3 md:gap-2 lg:gap-8'>
            <div className='producto text-center '>
                <img className='imagen mx-auto' src="../src/img/1.jpg" alt="imagen_logo"  />
                <div className='card'>
                    <p className='precio'>{400}</p>
                    <p className='talla'>VueJS</p>

                </div>
                <a href="" className='font-bold bg-blue-600 text-white py-2  block hover:bg-blue-800' id='1' onClick={carrito}>Agregar</a>
            </div>
            {/*Fin del producto*/}
            <div className='producto text-center'>
                <img className='imagen imagen mx-auto' src="../src/img/2.jpg" alt="imagen_logo"  />
                <div className='card'>
                    <p className='precio'>{400}</p>
                    <p className='talla'>Angular</p>

                </div>
               <a href=""  className='font-bold bg-blue-600 text-white py-2  block hover:bg-blue-800' id='2' onClick={carrito}>Agregar</a>
            </div>
             {/*Fin del producto*/}
             <div className='producto text-center'>
                <img className='imagen imagen mx-auto' src="../src/img/3.jpg" alt="imagen_logo"  />
                <div className='card'>
                    <p className='precio'>{400}</p>
                    <p className='talla'>React</p>

                </div>
               <a href=""  className='font-bold bg-blue-600 text-white py-2  block hover:bg-blue-800' id='3' onClick={carrito}>Agregar</a>
            </div>
             {/*Fin del producto*/}
             <div className='producto text-center'>
                <img className='imagen imagen mx-auto' src="../src/img/4.jpg" alt="imagen_logo"  />
                <div className='card'>
                    <p className='precio'>{400}</p>
                    <p className='talla'>Redux</p>

                </div>
               <a href=""  className='font-bold bg-blue-600 text-white py-2  block hover:bg-blue-800'id='4' onClick={carrito}>Agregar</a>
            </div>
             {/*Fin del producto*/}
             <div className='producto text-center'>
                <img className='imagen imagen mx-auto' src="../src/img/5.jpg" alt="imagen_logo"  />
                <div className='card'>
                    <p className='precio'>{400}</p>
                    <p className='talla'>Node JS</p>

                </div>
               <a href="" className='font-bold bg-blue-600 text-white py-2  block hover:bg-blue-800' id='5' onClick={carrito}>Agregar</a>
            </div>
             {/*Fin del producto*/}
             <div className='producto text-center'>
                <img className='imagen imagen mx-auto' src="../src/img/6.jpg" alt="imagen_logo"  />
                <div className='card'>
                    <p className='precio'>{400}</p>
                    <p className='talla'>Sass</p>

                </div>
               <a href=""  className='font-bold bg-blue-600 text-white py-2  block hover:bg-blue-800'id='6' onClick={carrito}>Agregar</a>
            </div>
             {/*Fin del producto*/}
             <div className='producto text-center'>
                <img className='imagen imagen mx-auto' src="../src/img/7.jpg" alt="imagen_logo"  />
                <div className='card'>
                    <p className='precio'>{400}</p>
                    <p className='talla'>HTML</p>

                </div>
               <a href="" className='font-bold bg-blue-600 text-white py-2  block hover:bg-blue-800' id='7' onClick={carrito}>Agregar</a>
            </div>
             {/*Fin del producto*/}
             <div className='producto text-center'>
                <img className='imagen imagen mx-auto' src="../src/img/8.jpg" alt="imagen_logo"  />
                <div className='card'>
                    <p className='precio'>{400}</p>
                    <p className='talla'>Git Hub</p>

                </div>
               <a href="" className='font-bold bg-blue-600 text-white py-2  block hover:bg-blue-800' id='8' onClick={carrito}>Agregar</a>
            </div>
             {/*Fin del producto*/}
             <div className='producto text-center'>
                <img className='imagen imagen mx-auto h-72 mt-12' src="../src/img/14.jfif" alt="imagen_logo"  />
                <div className='card'>
                    <p className='precio'>{400}</p>
                    <p className='talla'>C#</p>

                </div>
               <a href="" className='font-bold bg-blue-600 text-white py-2  block hover:bg-blue-800' id='9' onClick={carrito}>Agregar</a>
            </div>
             {/*Fin del producto*/}
             <div className='producto text-center'>
                <img className='imagen imagen mx-auto h-80' src="../src/img/15.jfif" alt="imagen_logo"  />
                <div className='card'>
                    <p className='precio'>{400}</p>
                    <p className='talla'>Python</p>

                </div>
               <a href=""  className='font-bold bg-blue-600 text-white py-2  block hover:bg-blue-800'id='10' onClick={carrito}>Agregar</a>
            </div>
             {/*Fin del producto*/}
             <div className='producto text-center'>
                <img className='imagen imagen mx-auto h-80' src="../src/img/16.webp" alt="imagen_logo"  />
                <div className='card'>
                    <p className='precio'>{400}</p>
                    <p className='talla'>Goland</p>

                </div>
               <a href="" className='font-bold bg-blue-600 text-white py-2  block hover:bg-blue-800' id='11' onClick={carrito}>Agregar</a>
            </div>
             {/*Fin del producto*/}
             <div className='producto text-center'>
                <img className='imagen imagen mx-auto h-80' src="../src/img/12.jpg" alt="imagen_logo"  />
                <div className='card'>
                    <p className='precio'>{400}</p>
                    <p className='talla'>Javascript</p>

                </div>
               <a href="" className='font-bold bg-blue-600 text-white py-2  block hover:bg-blue-800' id='12' onClick={carrito}>Agregar</a>
            </div>
        </div>
      </div>
    
    </>
  )
}

export default Products