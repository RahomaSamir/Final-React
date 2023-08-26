import React, { useState, useEffect } from 'react';
import { getproducts } from '../../services/todo.service';
import 'bootstrap/dist/css/bootstrap.min.css';
import './products.css'
import { Link } from 'react-router-dom'
const Products = () => {
    const [productsData, setProductsData] = useState([]);

   const getData = async () =>{
    let data = await getproducts();
    const {products} = data;
    setProductsData(products); 
   }

   useEffect(()=>{
    getData()
},
[])
    return (
        <div className="container text-center mt-5">
            <div className="row ">
            {productsData.map((productData) => (
                <div className="col-md-4 mb-5 " key={productData.id}>
                 <div className="card animated-border" style={{width:'17rem',height:'100%'}}>
                  <img src={productData.thumbnail} alt="" className="card-img-top" />
                    <div className="card-body justify-content-center">
                        <h5 className="card-title">{productData.title}</h5>
                         <p className="card-text">{productData.description}</p>
                         <p className="card-title">${productData.price}</p>
                    </div>
                    <div className="">
                                <Link to={`/details/${productData.id}`} className="btn btn-secondary">
                                Go to Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
