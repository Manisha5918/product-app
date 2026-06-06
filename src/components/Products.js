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


const [products,setProducts] = useState([]);

const [deletedProducts,setDeletedProducts] = useState([]);

const [showForm,setShowForm] = useState(false);


const [search,setSearch] = useState("");

const [category,setCategory] = useState("all");

const [sort,setSort] = useState("");

const [priceRange,setPriceRange] = useState(100000);

const [rating,setRating] = useState(0);



const [editProduct,setEditProduct] = useState({

    id:"",
    title:"",
    price:"",
    category:""

});




// API FETCH


useEffect(()=>{


axios

.get("https://fakestoreapi.com/products")

.then((response)=>{


setProducts(response.data);


});


},[]);







// DELETE PRODUCT


function deleteProduct(id){


const deleted = products.find(

item => item.id === id

);


setDeletedProducts([

...deletedProducts,

deleted

]);


setProducts(

products.filter(

item => item.id !== id

)

);


}







// RESTORE PRODUCT


function restoreProduct(id){


const restore = deletedProducts.find(

item => item.id === id

);


setProducts([

...products,

restore

]);


setDeletedProducts(

deletedProducts.filter(

item => item.id !== id

)

);


}







// EDIT PRODUCT


function openEditForm(product){


setShowForm(true);


setEditProduct({

id:product.id,

title:product.title,

price:product.price,

category:product.category


});


}






function handleChange(e){


setEditProduct({

...editProduct,


[e.target.name]:

e.target.value


});


}






function updateProduct(){



const updated = products.map(

item=>{


if(item.id === editProduct.id){


return{

...item,

title:editProduct.title,

price:editProduct.price,

category:editProduct.category

};


}


return item;


});



setProducts(updated);


setShowForm(false);


}









// FILTER LOGIC


let filteredProducts = products



.filter(item=>


item.title

.toLowerCase()

.includes(

search.toLowerCase()

)


)





.filter(item=>{


if(category==="all"){

return true;

}


return item.category === category;


})





.filter(item=>{


let indianPrice = item.price * 83;


return indianPrice <= priceRange;


})






.filter(item=>{


return item.rating.rate >= rating;


})






.sort((a,b)=>{


if(sort==="low"){

return a.price - b.price;

}


if(sort==="high"){

return b.price - a.price;

}


return 0;


});









return(


<div className="container mt-5">







{/* EDIT MODAL */}



{

showForm &&



<div className="modal-overlay">


<div className="edit-modal">


<h2>

Edit Product

</h2>



<input

className="form-control mb-3"

name="title"

value={editProduct.title}

onChange={handleChange}

/>



<input

className="form-control mb-3"

name="price"

value={editProduct.price}

onChange={handleChange}

/>



<input

className="form-control mb-3"

name="category"

value={editProduct.category}

onChange={handleChange}

/>



<button

className="btn btn-success"

onClick={updateProduct}

>

Update

</button>



<button

className="btn btn-secondary ms-3"

onClick={()=>setShowForm(false)}

>

Cancel

</button>



</div>


</div>


}









{/* FILTER SECTION */}


<div className="filter-wrapper">






<div className="filter-section">



<input

className="search-input"

placeholder="Search products..."

value={search}

onChange={(e)=>

setSearch(e.target.value)

}

/>






<select

className="filter-select"

value={category}

onChange={(e)=>

setCategory(e.target.value)

}

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








<select

className="filter-select"

value={sort}

onChange={(e)=>

setSort(e.target.value)

}

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








{/* PRICE + RATING */}


<div className="advanced-filter">






<div className="price-filter-box">



<div className="price-text">


<span>

Price Filter

</span>


<h3>

₹ {priceRange.toLocaleString("en-IN")}

</h3>


</div>






<input

className="price-slider"

type="range"

min="1000"

max="100000"

step="1000"

value={priceRange}

onChange={(e)=>

setPriceRange(

Number(e.target.value)

)

}

/>




</div>








<div className="rating-box">




<button

onClick={()=>setRating(4)}

>

4+ Rating

</button>





<button

onClick={()=>setRating(3)}

>

3+ Rating

</button>





<button

onClick={()=>{


setSearch("");

setCategory("all");

setSort("");

setRating(0);

setPriceRange(100000);


}}

>

Reset

</button>



</div>



</div>






<h3 className="product-count">


Showing {filteredProducts.length} Products


</h3>





</div>











{/* PRODUCTS */}


<div className="row">



{


filteredProducts.map((item)=>{


return(


<div

className="col-lg-4 mb-4"

key={item.id}

>



<div className="card p-4 text-center h-100 position-relative">






<img

src={item.image}

alt=""

style={{

height:"250px",

objectFit:"contain"

}}

/>





<h3 className="mt-4">

{item.title}

</h3>





<h1>


₹ {Math.floor(item.price * 83)}


</h1>






<p>

{item.category}

</p>





<h4>

⭐ {item.rating.rate}

</h4>









<div className="product-buttons">



<button

className="wishlist-btn"

onClick={()=>

props.addToWishlist(item)

}

>

♡

</button>







<div className="center-buttons">





<button

className="btn btn-outline-dark"

onClick={()=>

props.addToCart(item)

}

>

Cart

</button>





<Link to={`/products/${item.id}`}>



<button className="btn btn-dark">

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









{/* DELETED ITEMS */}


{

deletedProducts.length>0 &&


<div>


<h2>

Deleted Products

</h2>


{

deletedProducts.map(item=>(


<div key={item.id}>


<h3>

{item.title}

</h3>


<button

onClick={()=>restoreProduct(item.id)}

>

Restore

</button>


</div>


))

}



</div>


}





</div>


);


}



export default Products;