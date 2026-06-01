import { useState, useEffect } from "react";

function Profile() {

    const [name, setName] = useState("Manisha");

    const [email, setEmail] = useState("manisha@gmail.com");

    const [phone, setPhone] = useState("");

    const [location, setLocation] = useState("");

    const [about, setAbout] = useState("");
    const [profileImage, setProfileImage] =
useState("/profile.jpeg");


function updateProfile() {

    const updatedProfile = {

        name,
        email,
        phone,
        location,
        about,
        image: profileImage

    };

    localStorage.setItem(

        "profile",

        JSON.stringify(updatedProfile)

    );

    localStorage.setItem(

        "user",

        JSON.stringify({

            name,
            email

        })

    );

    alert("Profile Updated Successfully ✅");

}

    function imageHandler(e){

    const file = e.target.files[0];

    if(file){

        const imageURL =

        URL.createObjectURL(file);

        setProfileImage(imageURL);

    }


}


useEffect(()=>{

    const savedUser = JSON.parse(

        localStorage.getItem("user")

    );

    const savedProfile = JSON.parse(

        localStorage.getItem("profile")

    );

    if(savedUser){

        setName(savedUser.name);

        setEmail(savedUser.email);

    }

    if(savedProfile){

        setPhone(savedProfile.phone || "");

        setLocation(savedProfile.location || "");

        setAbout(savedProfile.about || "");

        if(savedProfile.image){

            setProfileImage(savedProfile.image);

        }

    }

},[]);
    return (

        <div className="profile-page">

            <div className="profile-card">

                {/* LEFT SIDE */}

                <div className="profile-left">

                   <div className="profile-avatar">

    <img
        src={profileImage}
        alt="profile"
    />

</div>

<label className="upload-btn">

    Choose Photo

    <input
        type="file"
        accept="image/*"
        onChange={imageHandler}
        hidden
    />

</label>

                    <h1 className="profile-name">
                        {name}
                    </h1>

                    <p className="profile-email">
                        {email}
                    </p>

                    <div className="profile-stats">

                        <div className="stat-box">
                            <h2>5</h2>
                            <p>Orders</p>
                        </div>

                        <div className="stat-box">
                            <h2>3</h2>
                            <p>Wishlist</p>
                        </div>

                        <div className="stat-box">
                            <h2>2</h2>
                            <p>Cart</p>
                        </div>

                    </div>

                </div>

                {/* RIGHT SIDE */}

                <div className="profile-right">

                    <h2 className="profile-title">
                        Edit Profile
                    </h2>

                    <div className="profile-form">

                        <input
                            type="text"
                            placeholder="Enter Name"
                            value={name}
                            onChange={(e)=>
                                setName(e.target.value)
                            }
                        />

                        <input
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e)=>
                                setEmail(e.target.value)
                            }
                        />

                        <input
                            type="text"
                            placeholder="Enter Phone"
                            value={phone}
                            onChange={(e)=>
                                setPhone(e.target.value)
                            }
                        />

                        <input
                            type="text"
                            placeholder="Enter Location"
                            value={location}
                            onChange={(e)=>
                                setLocation(e.target.value)
                            }
                        />

                        <textarea
                            placeholder="Write About Yourself"
                            value={about}
                            onChange={(e)=>
                                setAbout(e.target.value)
                            }
                        ></textarea>

                        <button
                            className="save-btn"
                            onClick={updateProfile}
                        >

                            Update Profile

                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Profile;