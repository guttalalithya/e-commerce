import React, {useEffect, useState, useRef} from "react";
import axios from "axios";
import './ProductDisplay.css';
import { Link, useParams } from "react-router-dom";

function ProductDisplay(props){
    const {openProduct,products,setOpenProduct, setproducts, theme, setLoading, loading} = props;
    const { id } = useParams(); // Get the product ID from URL parameters  

    const containerRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [image,setImage] = useState('');
    const [displayimage,setdisplayimage] = useState(false);


    useEffect(() => {
      setLoading(true)
        axios.get('http://localhost:3030/getproducts')
        .then((resposne)=>{
          setproducts(resposne.data)
          setLoading(false)
        })
        .catch((err)=>{
          console.log(err)
        })
      }, []);


      useEffect(() => {
        const foundProduct = products.find(product => product.id === id);
        if (foundProduct) {
          setOpenProduct(foundProduct);
          setImage(foundProduct.Images[0])          
        }
      }, [id, products, openProduct]);



      const handleScroll = (direction) => {
        const container = containerRef.current;
        const scrollDistance = containerRef.current.clientWidth;
        if (direction === "right") {
          container.scrollLeft += scrollDistance;
        } else {
          container.scrollLeft -= scrollDistance;
        }
      };


      useEffect(() => {
        if (containerRef.current) {
          setScrollPosition(Math.ceil(containerRef.current.scrollLeft) || 0);
        }
      }, []);
      


      useEffect(()=>{
        const imgElement = document.getElementById('img');
        if (imgElement) {
          imgElement.classList.add('pop');
          setTimeout(() => {
            imgElement.classList.remove('pop');
          }, 100);
        }
      },[image])

    
      
      
    return(
        <div className="ProductDisplay">
            
            <div className="productwrapper">
              {
                displayimage?
                  <div className="imagedisplaying" onClick={()=>setdisplayimage(false)}>
                    <img src={image} alt='sorry! Try to reload the page to see the image.' onClick={()=>setdisplayimage(true)}/>
                  </div>
                  :
                  ''
              }
                {openProduct && openProduct.Images && openProduct.Images.length > 0 && (
                  <div className="productimage" >
                    <div className="mainimg">
                      <img src={image} className="hgh" id="img" alt="Product" onClick={()=>setdisplayimage(true)}/>
                    </div>
                    <div className="displayimages">
                        {
                          openProduct.Images.map((item)=>(
                            <div className="images" onMouseOver={()=>setImage(item)} key={item} >
                              <img src={item} alt="Sorry unable to show the image!" />
                            </div>
                          ))
                        }
                    </div>
                  </div>
                )}
                
                <div className="productdetails">
                  {openProduct && (
                      <>
                        <h1 className="ProductTitle">{openProduct.Title}</h1>
                        <div className="rating">
                          <label className="productRating">{openProduct.Rating}</label><label className="star">&#x2605;</label>
                        </div>
                        <label className="ProductPrice">{'$'+openProduct.Price}</label>
                        <div className="productdescdiv">
                          <label>About this item</label>
                          <p className="ProductDescription">{openProduct.Description}</p>
                        </div>
                        <div className="productbtnlinks">
                          <Link className="btnLink buybtn">Buy Now</Link>
                          <Link className="btnLink cartbtn">Add to Cart</Link>
                        </div>
                      </>
                  )}
                </div>
            </div>

            <label className="similarproductlabel">Similar Products that you might like!</label>

            <div className="remainigdiv" onMouseOver={() => {
                if (containerRef.current) {
                  setScrollPosition(Math.ceil(containerRef.current.scrollLeft) || 0);
                }
              }}
              
            >
                {scrollPosition > 0 && (
                  <label className="lt" onClick={() => handleScroll("left")}>
                    &lt;
                  </label>
                )}
                <div className="remaining" ref={containerRef}>
                  {products.map((item) => (
                    item.id !== (openProduct && openProduct.id) && item.Tags.some((element) => (openProduct && openProduct.Tags ? openProduct.Tags.includes(element) : false)) ? (
                      <div className={theme ? "otherproductinfo darkotherproductinfo" : "otherproductinfo"} key={item.id}>
                        {item.Images && item.Images.length > 0 && (
                          <Link onClick={() => setOpenProduct(item)} to={"/product/" + item.id} className="otherimgLink" target="_blank">
                            <img src={item.Images[0]} alt="sorry we are unable to load picture!" />
                            </Link>
                        )}
                        <h1 className={theme ? "producttitle darkproducttitle" : "producttitle"}><Link className="othertitleLink" to={"/product/" + item.id} target="_blank">{String(item.Title).slice(0, 60) + '...'}</Link></h1>
                        
                        <div className="otherrating">
                          <label className="otherproductRating">{item.Rating ?  item.Rating : ''}</label><label className="otherstar">&#x2605;</label>
                        </div>
                        <p>{item.Description ? String(item.Description).slice(0, 80) + '...' : ''}</p>
                        <label className="otherprice">{item.Price ? '$ ' + item.Price : ''}</label>
                      </div>
                    ) : ('')
                  ))}
                </div>
                {containerRef.current && scrollPosition <= ((containerRef.current.scrollWidth - containerRef.current.clientWidth)===0?containerRef.current.scrollWidth - containerRef.current.clientWidth:containerRef.current.scrollWidth - containerRef.current.clientWidth-1) && (
                  <label className="gt" onClick={() => handleScroll("right")}>
                    &gt;
                  </label>
                )}
            </div>

        </div>
    )
}


export default ProductDisplay;