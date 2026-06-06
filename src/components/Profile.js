import { useState, useEffect } from "react";


function Profile(){


const [name,setName] = useState("User");

const [email,setEmail] = useState("");

const [phone,setPhone] = useState("");

const [address,setAddress] = useState("");

const [city,setCity] = useState("");

const [pincode,setPincode] = useState("");

const [about,setAbout] = useState("");



// RIGHT PANEL STATES

const [activeTab,setActiveTab] =
useState("payment");


const [theme,setTheme] =
useState("dark");


const [card,setCard] =
useState("");


const [delivery,setDelivery] =
useState("");


const [password,setPassword] =
useState("");


const [support,setSupport] =
useState("");






function updateProfile(){


const data={

name,
email,
phone,
address,
city,
pincode,
about,
card,
delivery,
password,
support

};



localStorage.setItem(

"profile",

JSON.stringify(data)

);



alert(

"Profile Updated Successfully"

);


}






useEffect(()=>{


const data =

JSON.parse(

localStorage.getItem("profile")

);




if(data){


setName(data.name || "User");

setEmail(data.email || "");

setPhone(data.phone || "");

setAddress(data.address || "");

setCity(data.city || "");

setPincode(data.pincode || "");

setAbout(data.about || "");


setCard(data.card || "");

setDelivery(data.delivery || "");

setPassword(data.password || "");

setSupport(data.support || "");


}



},[]);







return(


<div className={`profile-page ${theme}`}>


<div className="profile-dashboard">





{/* HEADER */}


<div className="profile-header">


<div>

<h1>
Account Overview
</h1>


<p>
Manage your shopping account information
</p>


</div>





<div className="profile-user">


<div className="small-avatar">

{
name
?
name.charAt(0).toUpperCase()
:
"U"
}

</div>



<div>

<h3>
{name}
</h3>


<span>
Active Customer
</span>

</div>


</div>





<button

className="theme-btn"

onClick={()=>{

setTheme(

theme==="dark"

?

"light"

:

"dark"

)

}}

>

{

theme==="dark"

?

"Light Mode"

:

"Dark Mode"

}

</button>




</div>









{/* SUMMARY */}



<div className="summary-grid">



<div>

<h2>
12
</h2>

<p>
Total Orders
</p>

</div>




<div>

<h2>
8
</h2>

<p>
Wishlist Items
</p>

</div>




<div>

<h2>
3
</h2>

<p>
Cart Products
</p>

</div>




<div>

<h2>
₹25,400
</h2>

<p>
Total Purchased
</p>

</div>



</div>









<div className="profile-main">





{/* LEFT FORM */}



<div className="settings-box">



<h2>

Personal Information

</h2>





<div className="form-grid">



<input

placeholder="Full Name"

value={name}

onChange={(e)=>

setName(e.target.value)

}

/>




<input

placeholder="Email Address"

value={email}

onChange={(e)=>

setEmail(e.target.value)

}

/>




<input

placeholder="Mobile Number"

value={phone}

onChange={(e)=>

setPhone(e.target.value)

}

/>





<input

placeholder="City"

value={city}

onChange={(e)=>

setCity(e.target.value)

}

/>





<input

placeholder="Address"

value={address}

onChange={(e)=>

setAddress(e.target.value)

}

/>





<input

placeholder="Pincode"

value={pincode}

onChange={(e)=>

setPincode(e.target.value)

}

/>






<textarea

placeholder="Additional Information"

value={about}

onChange={(e)=>

setAbout(e.target.value)

}

>

</textarea>






<button

onClick={updateProfile}

>

Update Profile

</button>



</div>



</div>









{/* RIGHT SIDE */}



<div className="side-panel">





<div

onClick={()=>setActiveTab("payment")}

>

<h3>

Payment Methods

</h3>


<p>

Cards and payment options

</p>


</div>







<div

onClick={()=>setActiveTab("delivery")}

>

<h3>

Delivery Address

</h3>


<p>

Manage shipping location

</p>


</div>







<div

onClick={()=>setActiveTab("security")}

>


<h3>

Privacy & Security

</h3>


<p>

Password settings

</p>


</div>








<div

onClick={()=>setActiveTab("support")}

>


<h3>

Customer Support

</h3>


<p>

Service requests

</p>


</div>








{/* EDIT AREA */}



<div className="option-edit">





{

activeTab==="payment" &&

<>

<h2>
Payment Details
</h2>


<input

placeholder="Card Number / UPI ID"

value={card}

onChange={(e)=>

setCard(e.target.value)

}

/>

</>

}








{

activeTab==="delivery" &&

<>

<h2>
Delivery Details
</h2>


<textarea

placeholder="Enter Full Delivery Address"

value={delivery}

onChange={(e)=>

setDelivery(e.target.value)

}

></textarea>

</>

}









{

activeTab==="security" &&

<>

<h2>
Security Settings
</h2>


<input

type="password"

placeholder="New Password"

value={password}

onChange={(e)=>

setPassword(e.target.value)

}

/>


</>

}









{

activeTab==="support" &&

<>

<h2>
Support Request
</h2>


<textarea

placeholder="Describe your issue"

value={support}

onChange={(e)=>

setSupport(e.target.value)

}

></textarea>


</>

}







<button

onClick={updateProfile}

>

Save

</button>




</div>






</div>






</div>





</div>



</div>


);


}



export default Profile;