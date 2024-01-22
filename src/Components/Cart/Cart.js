import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import './Cart.css';



function Cart(props){
    const {cart,setcart,theme} = props;

    
    const handleinc = (type,e) =>{
        if(type===0){
            const updatedCart = cart.map(item => 
                item.id === e.id ? { ...item, count: item.count + 1 } : item
            );
            setcart(updatedCart);
        }else if(e.count>0){
            const updatedCart = cart.map(item => 
                item.id === e.id ? { ...item, count: item.count - 1 } : item
            );
            setcart(updatedCart);
        }
    }


    return(
        <div className="CartContainer">
            <h1 className="carttitle">Cart</h1>
            <hr/>
            <div className="cartproducts">
             {
                    cart.length!==0?
                        cart.map((items)=>(
                            <div className={theme?"productinfo darkproductinfo":"productinfo"} key={items.id}>
                                <img src={items.Images[0]} alt="sorry we are unable to load picture!"/>
                                <h1>{String(items.Title).slice(0,20)+'...'}</h1>
                                <p>{String(items.Description).slice(0,80)+'...'}</p>
                                <label className="price">{'$ '+items.Price}</label>
                                <div className="cartbuttons">
                                    <label className="incdec" onClick={()=>{handleinc(0,items)}}>+</label>
                                    <label className="count">{items.count}</label>
                                    <label className="incdec" onClick={()=>{handleinc(1,items)}}>-</label>
                                </div>
                            </div>
                        ))
                    :
                    <div className={theme?"cartempty darkcartempty":"cartempty"}>
                        <label>Your Cart is Empty</label>
                        <Link to='/products' className={theme?"cartlink darkcartlink":"cartlink"}><FontAwesomeIcon icon={faArrowLeft}/> Continue Shopping</Link>
                    </div>
                }
            </div>
        </div>
    )
}

export default Cart;