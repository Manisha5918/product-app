import axios from "axios";

import {
  useEffect,
  useState
} from "react";

import {
  useNavigate,
  useParams
} from "react-router-dom";

function ProductDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [product, setProduct] =
    useState({});

  useEffect(()=>{

    getProduct();

  },[]);

  async function getProduct(){

    const res = await axios.get(

      `https://fakestoreapi.com/products/${id}`

    );

    setProduct(res.data);
  }

  return (

    <div className="container py-5">

      <button
        className="btn btn-dark mb-5"

        onClick={()=>navigate(-1)}
      >

        Back

      </button>

      <div className="details">

        <div className="row align-items-center">

          <div className="col-md-6 text-center">

            <img
              src={product.image}
              className="img-fluid"
              alt="product"
            />

          </div>

          <div className="col-md-6">

            <h1 className="fw-bold">

              {product.title}

            </h1>

            <h2 className="my-4">

              ₹ {(product.price * 83)?.toFixed(0)}

            </h2>

            <h4 className="mb-3">

               {product.rating?.rate}

            </h4>

            <h5 className="mb-4 text-muted">

              {product.category}

            </h5>

            <p className="lead">

              {product.description}

            </p>

          </div>

        </div>

      </div>

    </div>

  );
}

export default ProductDetails;