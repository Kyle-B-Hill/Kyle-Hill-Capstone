import "./UserPage.scss";
import Footer from "../../Components/Footer/Footer"
import { useEffect, useState } from "react";
import { getUserEndpoint } from "../../Utils/api-utils"
import axios from "axios";


const UserPage = () => {
 
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
    
    if(user) {
        console.log("This should be the selected user:", user.user_name)
    }
    return (
        <>
            {user && (
                <section className="user-page">
                    <div className="user-page__header">
                        <button>Logout</button>
                        <button>Edit Profile</button>
                    </div>
                    <p>Hello {user.user_name}</p>
                    <div className="user-page__display-picture"></div>
                < Footer />
                </section>
            )}
        </>
    )
}

export default UserPage;