import React,{useEffect, useState} from "react";
import './Products.css'
import axios from 'axios';
import { Link } from "react-router-dom";


function Products(props){
    const {products,theme,cart,setcart,openProduct,setOpenProduct,setproducts, loading, setLoading} = props;

    const [active,setactive] = useState(1);
    const [temporary,setTemporary] = useState([]);


    useEffect(()=>{
        setLoading(true);
        axios.get('http://localhost:3030/getproducts')
        .then((resposne)=>{
          setproducts(resposne.data)
        })
        .catch((err)=>{
          console.log(err)
        })
      },[])


    useEffect(() => {
        // Shuffle the data when the component is mounted
        const shuffledData = [...products].sort(() => Math.random() - 0.5);
        setLoading(false)
        setTemporary(shuffledData);
      }, [products]);


      useEffect(() => {
        var result = [];
      
        if (active === 1) {
          result = products;
        } else {
          const tagToFilter = getTagBasedOnActive(active);
      
          const filteredProducts = products.filter((product) =>
            product.Tags.includes(tagToFilter)
          );
      
          result = filteredProducts;
        }
      
        setTemporary(result);
      }, [active]);
      
      const getTagBasedOnActive = (active) => {
        switch (active) {
          case 2:
            return 'men';
          case 3:
            return 'women';
          case 4:
            return 'kids';
          case 5:
            return 'mobile';
          case 6:
            return 'tv';
          case 7:
            return 'home';
          case 8:
            return 'electronic';
          case 9:
            return 'computer';
          case 10:
            return 'laptop';
          default:
            return 'All';
        }
      };
      


    const handlecart = (e) => {
        // Check if the item already exists in the cart
        const existingItem = cart.find(item => item.id === e.id);
    
        if (existingItem) {
            // If item exists, update its count
            const updatedCart = cart.map(item => 
                item.id === e.id ? { ...item, count: item.count + 1 } : item
            );
            setcart(updatedCart);
        } else {
            // If item doesn't exist, add it to the cart
            const updatedCart = [...cart, { ...e, count: 1 }];
            setcart(updatedCart);
        }
    }

    
    
    
    



    return(
        <div className="productContainer">
            <div className={theme?"filterbtns darkbuttons ":"filterbtns"}>
                <button onClick={()=>{setactive(1)}}>All</button>
                <button onClick={()=>{setactive(2)}}>Men's wear</button>
                <button onClick={()=>{setactive(3)}}>Women's wear</button>
                <button onClick={()=>{setactive(4)}}>child's wear</button>
                <button onClick={()=>{setactive(5)}}>Smartphones</button>
                <button onClick={()=>{setactive(6)}}>Tv's</button>
                <button onClick={()=>{setactive(7)}}>Home Accessories</button>
                <button onClick={()=>{setactive(8)}}>Electronic Components</button>
                <button onClick={()=>{setactive(9)}}>Computer Accessories</button>
                <button onClick={()=>{setactive(10)}}>Laptops</button>
            </div>
            <div className="productdiv">
                {
                    temporary.length!==0?
                        temporary.map((items)=>(
                            <div className={theme?"productinfo darkproductinfo":"productinfo"} key={items.id} >
                                <Link onClick={()=>setOpenProduct(items)} to={"/product/" + items.id}  className="imgLink" target="_blank"><img src={items.Images[0]} alt="sorry we are unable to load picture!"/></Link>
                                <h1 className={theme?"producttitle darkproducttitle":"producttitle"}><Link className="titleLink" to={"/product/" + items.id} target="_blank">{String(items.Title).slice(0,60)+'...'}</Link></h1>
                                <p>{String(items.Description).slice(0,80)+'...'}</p>
                                <label className="price">{'$ '+items.Price}</label>
                                <div className={theme?"productbtns darkbuttons":"productbtns"}>
                                    <Link onClick={()=>setOpenProduct(items)} to={"/product/" + items.id}  className="Link" target="_blank">Buy Now</Link>
                                    <Link onClick={()=>{handlecart(items)}} className="Link">Add to Cart</Link>
                                </div>
                            </div>
                        ))
                    :
                    <label className="noitems">No items to Found</label>
                }
            </div>
        </div>
    )
}

export default Products;