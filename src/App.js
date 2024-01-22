import './App.css';
import { HashRouter,Route,Routes } from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import Products from './Components/Products/Products.js';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact'
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Cart from './Components/Cart/Cart.js';
import { useEffect, useState } from 'react';
import ProductDisplay from './Components/ProductDisplay/ProductDisplay.js';

function App() {

  const [theme, settheme] = useState(JSON.parse(localStorage.getItem('theme')) || false);
  const [products,setproducts] = useState([]);
  const [cart,setcart] = useState([]);
  const [openProduct,setOpenProduct] = useState([]);
  const [loading,setLoading] = useState(false);


  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  

  return (
    <div className={theme?"App darkcolor":"App"}>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Menu theme={theme} settheme={settheme} cart={cart} loading={loading}/>}>
            <Route path='/' element={<Home theme={theme}/>}/>
            <Route path='/Products' element={<Products theme={theme} 
                                                        products={products} 
                                                        setproducts={setproducts} 
                                                        cart={cart} 
                                                        setcart={setcart}
                                                        openProduct={openProduct}
                                                        setOpenProduct={setOpenProduct}
                                                        loading={loading}
                                                        setLoading={setLoading}
                                                        />}/>            
            <Route path='/about' element={<About theme={theme}/>}/>
            <Route path='/contact' element={<Contact theme={theme}/>}/>
            <Route path='/login' element={<Login theme={theme}/>}/>
            <Route path='/register' element={<Register theme={theme}/>}/>
            <Route path='/cart' element={<Cart theme={theme} cart={cart} setcart={setcart} loading={loading} setLoading={setLoading}/>}/>
            <Route path={`/product/:id`} element={<ProductDisplay theme={theme} settheme={settheme} setOpenProduct={setOpenProduct} openProduct={openProduct} products={products} setproducts={setproducts} loading={loading} setLoading={setLoading}/>}/>
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
