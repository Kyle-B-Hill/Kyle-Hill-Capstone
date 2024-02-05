import "./EditProfilePage.scss";
import Footer from "../../Components/Footer/Footer"
import { useEffect, useState } from "react";
import { getUserEndpoint } from "../../Utils/api-utils"
import axios from "axios";

const EditProfilePage = () => {

    console.log("This is the edit profile page");

    const [user, setUser] = useState(null);

    const getUser = async (id) => {
        if (!id) {
            return;
        }
        try {
            let res = await axios.get(getUserEndpoint(id));
            setUser(res.data);
            console.log(res.data);
            
        } catch (err) {
            console.log("Error", err);
        }
    }

    useEffect(() => {
        const userId = JSON.parse(localStorage.getItem("credentials")).id;
        console.log(userId);
        getUser(userId);
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const city = form.city.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const email = form.email.value;
        const gender = form.gender.value;
        const bio = form.bio.value;
        const age = form.age.value;

        if (!username || !city || !password || !confirmPassword || !email || !gender || !bio || !age) {
            alert("You must fill out all fields");
            return;
        }
        const data = {
            id: user.id,
            user_name: username,
            city: city,
            password: password,
            email: email,
            gender: gender,
            bio: bio,
            age: age
        }  
        
        console.log('Request Payload:', data);

        if (!user.id) {
            return
        }
        const config = {
            headers: {
                "content-type": "application/json",
            },
        };
        try {
            let res = await axios.patch(
                getUserEndpoint(user.id),
                data,
                config
            );
            console.log(res);
            return res;
            } catch (err) {
                console.log("Error updating user profile:", err)
        }
        

    }
    
    return (
        <>
            {user && (
                <section className="edit-page">
                    <div className="edit-page__display--picture"></div>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Username: <input type="text" name="username" defaultValue={user.user_name} />
                        </label>
                        <label>
                            City: <input type="text" name="city" defaultValue={user.city} />
                        </label>
                        <label>
                            Password: <input type="password" name="password" defaultValue={user.password} />
                        </label>
                        <label>
                            Confirm Password: <input type="password" name="confirmPassword" defaultValue={user.password} />
                        </label>
                        <label>
                            Email: <input type="text" name="email" defaultValue={user.email} />
                        </label>
                        <label>
                            Gender: <input type="text" name="gender" defaultValue={user.gender} />
                        </label>
                        <label>
                            Bio: <input type="text" name="bio" defaultValue={user.bio} />
                        </label>
                        <label>
                            Age: <input type="text" name="age" defaultValue={user.age} />
                        </label>
                        <button>Submit Changes</button>
                    </form>
                < Footer />
                </section>
            )}
        </>
    )
}

export default EditProfilePage;