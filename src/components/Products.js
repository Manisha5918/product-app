// Products.jsx

import React, {
    useEffect,
    useState
} from "react";

import axios from "axios";

import {
    Link
} from "react-router-dom";

function Products(props) {

    const [products, setProducts] = useState([]);

    const [deletedProducts, setDeletedProducts] = useState([]);

    const [showForm, setShowForm] = useState(false);

    const [search, setSearch] = useState("");

    const [category, setCategory] = useState("all");

    const [sort, setSort] = useState("");

    const [editProduct, setEditProduct] = useState({
        id: "",
        title: "",
        price: "",
        category: ""
    });

    /* FETCH PRODUCTS */

    useEffect(() => {

        axios
        .get("https://fakestoreapi.com/products")

        .then((response) => {

            setProducts(response.data);

        });

    }, []);

    /* DELETE PRODUCT */

    function deleteProduct(id) {

        const productToDelete =
        products.find((item)=>
            item.id === id
        );

        setDeletedProducts([
            ...deletedProducts,
            productToDelete
        ]);

        const updatedProducts =
        products.filter((item)=>
            item.id !== id
        );

        setProducts(updatedProducts);

    }

    /* RESTORE PRODUCT */

    function restoreProduct(id){

        const productToRestore =
        deletedProducts.find((item)=>
            item.id === id
        );

        setProducts([
            ...products,
            productToRestore
        ]);

        const updatedDeleted =
        deletedProducts.filter((item)=>
            item.id !== id
        );

        setDeletedProducts(updatedDeleted);

    }

    /* OPEN EDIT FORM */

    function openEditForm(item){

        setShowForm(true);

        setEditProduct({
            id: item.id,
            title: item.title,
            price: item.price,
            category: item.category
        });

    }

    /* HANDLE INPUT */

    function handleChange(e){

        setEditProduct({
            ...editProduct,
            [e.target.name]: e.target.value
        });

    }

    /* UPDATE PRODUCT */

    function updateProduct(){

        const updatedProducts =
        products.map((item)=>{

            if(item.id === editProduct.id){

                return{
                    ...item,
                    title: editProduct.title,
                    price: editProduct.price,
                    category: editProduct.category
                };

            }

            return item;

        });

        setProducts(updatedProducts);

        setShowForm(false);

    }

    return (

        <div className="container mt-5">

            {/* EDIT MODAL */}

            {
                showForm &&

                <div className="modal-overlay">

                    <div className="edit-modal">

                        <h2 className="mb-4 text-center">
                            Edit Product
                        </h2>

                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={editProduct.title}
                            onChange={handleChange}
                            className="form-control mb-3"
                        />

                        <input
                            type="text"
                            name="price"
                            placeholder="Price"
                            value={editProduct.price}
                            onChange={handleChange}
                            className="form-control mb-3"
                        />

                        <input
                            type="text"
                            name="category"
                            placeholder="Category"
                            value={editProduct.category}
                            onChange={handleChange}
                            className="form-control mb-3"
                        />

                        <div className="d-flex justify-content-center gap-3">

                            <button
                                className="btn btn-success"

                                onClick={updateProduct}
                            >
                                Update
                            </button>

                            <button
                                className="btn btn-secondary"

                                onClick={()=>
                                    setShowForm(false)
                                }
                            >
                                Cancel
                            </button>

                        </div>

                    </div>

                </div>
            }

            {/* FILTER SECTION */}

            <div className="filter-section">

                {/* SEARCH */}

                <input
                    type="text"

                    placeholder="Search products..."

                    value={search}

                    onChange={(e)=>
                        setSearch(e.target.value)
                    }

                    className="search-input"
                />

                {/* CATEGORY */}

                <select
                    value={category}

                    onChange={(e)=>
                        setCategory(e.target.value)
                    }

                    className="filter-select"
                >

                    <option value="all">
                        All Categories
                    </option>

                    <option value="men's clothing">
                        Men's Clothing
                    </option>

                    <option value="women's clothing">
                        Women's Clothing
                    </option>

                    <option value="electronics">
                        Electronics
                    </option>

                    <option value="jewelery">
                        Jewelery
                    </option>

                </select>

                {/* SORT */}

                <select
                    value={sort}

                    onChange={(e)=>
                        setSort(e.target.value)
                    }

                    className="filter-select"
                >

                    <option value="">
                        Sort By
                    </option>

                    <option value="low">
                        Price Low To High
                    </option>

                    <option value="high">
                        Price High To Low
                    </option>

                </select>

            </div>

            {/* PRODUCTS */}

            <div className="row">

                {
                    products

                    .filter((item)=>{

                        return item.title
                        .toLowerCase()
                        .includes(search.toLowerCase());

                    })

                    .filter((item)=>{

                        if(category === "all"){
                            return true;
                        }

                        return item.category === category;

                    })

                    .sort((a,b)=>{

                        if(sort === "low"){
                            return a.price - b.price;
                        }

                        if(sort === "high"){
                            return b.price - a.price;
                        }

                        return 0;

                    })

                    .map((item)=>{

                        return(

                            <div
                                className="col-lg-4 mb-4"
                                key={item.id}
                            >

                                {/* PRODUCT CARD */}

                                <div
                                    className="card p-4 text-center h-100 position-relative"
                                >

                                    {/* TOP RIGHT BUTTONS */}

                                    <div
                                        className="position-absolute top-0 end-0 m-3 d-flex gap-2"
                                    >

                                        <button
                                            className="btn btn-warning btn-sm"

                                            onClick={()=>
                                                openEditForm(item)
                                            }
                                        >
                                            Edit
                                        </button>

                                        <button
                                            className="btn btn-danger btn-sm"

                                            onClick={()=>
                                                deleteProduct(item.id)
                                            }
                                        >
                                            Delete
                                        </button>

                                    </div>

                                    {/* IMAGE */}

                                    <img
                                        src={item.image}
                                        alt=""
                                        style={{
                                            height:"250px",
                                            objectFit:"contain"
                                        }}
                                    />

                                    {/* TITLE */}

                                    <h3 className="mt-4">
                                        {item.title}
                                    </h3>

                                    {/* PRICE */}

                                    <h1 className="mt-3">

                                        ₹ {
                                            Math.floor(
                                                item.price * 83
                                            )
                                        }

                                    </h1>

                                    {/* CATEGORY */}

                                    <p>
                                        {item.category}
                                    </p>

                                    {/* RATING */}

                                    <h4>
                                        ⭐ {item.rating.rate}
                                    </h4>

                                    {/* BUTTON SECTION */}

                                    <div className="product-buttons">

                                        {/* CART */}

{/* WISHLIST */}

<button
    className="wishlist-btn"

    onClick={()=>
        props.addToWishlist(item)
    }
>
    ❤️
</button>

{/* CENTER BUTTONS */}

<div className="center-buttons">

    {/* CART */}

    <button
        className="btn btn-outline-dark"

        onClick={()=>
            props.addToCart(item)
        }
    >
        Cart
    </button>

    {/* DETAILS */}

    <Link
        to={`/products/${item.id}`}
    >

        <button
            className="btn btn-dark"
        >
            Details
        </button>

    </Link>

</div>

                                    </div>

                                </div>

                            </div>

                        );

                    })
                }

            </div>

            {/* DELETED PRODUCTS */}

            {
                deletedProducts.length > 0 &&

                <div className="mt-5">

                    <h2 className="mb-4">
                        Deleted Products
                    </h2>

                    <div className="row">

                        {
                            deletedProducts.map((item)=>{

                                return(

                                    <div
                                        className="col-lg-4 mb-4"
                                        key={item.id}
                                    >

                                        <div className="card p-4 text-center">

                                            <h4>
                                                {item.title}
                                            </h4>

                                            <button
                                                className="btn btn-success mt-3"

                                                onClick={()=>
                                                    restoreProduct(item.id)
                                                }
                                            >
                                                Restore
                                            </button>

                                        </div>

                                    </div>

                                );

                            })
                        }

                    </div>

                </div>
            }

        </div>

    );
}

export default Products;