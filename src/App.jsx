import { CartProvider } from './context/cartContext'
import {Routes, Route, Outlet} from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import ListCart from './components/ListCart';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';
function App() {


  return (
    <>
     <CartProvider>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/list-cart' element={<ListCart/>}></Route>
            
        </Routes>
        <Outlet/>
        <Footer/>
     </CartProvider>
    </>
  )
}

export default App
