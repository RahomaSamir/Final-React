import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../services/auth.service";
import "./productDetails.css";
const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((data) => {
        console.log("product details:", data);
        setProductDetails(data);
      })
      .catch((error) => console.error("Error fetching product details:", error));
  }, [id]);

  if (!productDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      <h2>{productDetails.title}</h2>

      <img src={productDetails.thumbnail} />
      <p>{productDetails.description}</p>
      <p>${productDetails.price}</p>
    </div>
  );
};

export default ProductDetails;
